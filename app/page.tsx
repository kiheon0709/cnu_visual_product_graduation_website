"use client";

import { useEffect, useRef } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    video.muted = true;
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    
    const tryPlay = async () => {
      try {
        await video.play();
      } catch {
        // iOS/Safari에서 초기 프레임에선 거부될 수 있음 → 무시하고 이벤트에서 재시도
      }
    };
    
    // loadeddata 이벤트 사용 (canplay보다 빠름) - 첫 프레임만 로드되면 재생 시도
    const onLoadedData = () => {
      tryPlay();
    };
    
    // canplaythrough는 백업용 (더 많은 데이터가 로드된 후)
    const onCanPlayThrough = () => {
      tryPlay();
    };
    
    // 이미 로드된 경우 즉시 재생 시도
    if (video.readyState >= 2) {
      tryPlay();
    }
    
    video.addEventListener("loadeddata", onLoadedData, { once: true });
    video.addEventListener("canplaythrough", onCanPlayThrough, { once: true });
    
    // 가시성 전환 시 재시도(백→포그라운드)
    const onVis = () => {
      if (document.visibilityState === "visible") tryPlay();
    };
    document.addEventListener("visibilitychange", onVis);
    
    // 사용자 첫 터치에서 한 번 재시도(정책 우회)
    const onFirstTouch = () => {
      tryPlay();
      window.removeEventListener("touchstart", onFirstTouch);
    };
    window.addEventListener("touchstart", onFirstTouch, { passive: true });
    
    return () => {
      document.removeEventListener("visibilitychange", onVis);
      video.removeEventListener("loadeddata", onLoadedData);
      video.removeEventListener("canplaythrough", onCanPlayThrough);
      window.removeEventListener("touchstart", onFirstTouch);
    };
  }, []);
  
  return (
    <div className="relative w-full min-h-screen bg-background-gray">
      <div className="w-full">
        {/* 메인 포스터 비디오 영역 - 세로 스크롤 가능, 잘림 없이 표시 */}
        <video
          ref={videoRef}
          src="/images/main/main.mp4"
          className="w-full h-auto object-contain"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          controls={false}
          disablePictureInPicture
        />
      </div>
    </div>
  );
}


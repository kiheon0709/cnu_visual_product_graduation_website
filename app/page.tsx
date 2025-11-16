export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-background-gray">
      <div className="w-full">
        {/* 메인 포스터 비디오 영역 - 세로 스크롤 가능, 잘림 없이 표시 */}
        <video
          src="/images/main/메인무빙포스터.mp4"
          className="w-full h-auto object-contain"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/main/홈메인포스터.png"
        />
      </div>
    </div>
  );
}


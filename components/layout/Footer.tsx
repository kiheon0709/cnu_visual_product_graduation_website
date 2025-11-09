"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // 스크롤 위치 감지
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 상단으로 이동
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#d9d9d9] px-[40px] py-[40px] min-[394px]:h-[187px] min-[394px]:flex min-[394px]:items-center">
      <div className="w-full max-w-[1441px] mx-auto min-[394px]:flex min-[394px]:justify-between min-[394px]:items-start relative">
        {/* 좌측 영역 */}
        <div className="max-[393px]:mb-[20px] min-[394px]:w-[333px]">
          {/* 로고 및 텍스트 */}
          <div className="flex items-center mb-[20px] min-[394px]:mb-0 min-[394px]:h-[48px]">
            <Image
              src="/images/logo/cnu-logo.png"
              alt="충남대학교 로고"
              width={48}
              height={48}
              className="object-contain flex-shrink-0 w-[48px] h-[48px]"
            />
            <p className="ml-[40px] text-[16px] leading-[24px] tracking-[-0.64px] font-semibold text-black max-w-[231px]">
              chungnam national unversity college of fine arts & music
            </p>
          </div>

          {/* 저작권 텍스트 */}
          <p className="text-[16px] leading-[24px] tracking-[-0.64px] font-normal text-black min-[394px]:mt-[76px]">
            2025 CNUD Graduation All rights reserved Ⓒ
          </p>
        </div>

        {/* 우측 영역 - 연락처 정보 */}
        <div className="max-[393px]:mb-[20px] min-[394px]:w-[278px] min-[394px]:text-right">
          <div className="text-[14px] leading-[26px] tracking-[-0.56px] font-normal text-black whitespace-pre-line">
            TEL : 042-821-6981{"\n"}
            EMAIL : shr712@cnu.ac.kr{"\n"}
            (34134) 대전광역시 유성구 대학로 99 충남대학교
          </div>
        </div>

        {/* 상단으로 이동 버튼 */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-[40px] right-[40px] w-[60px] h-[60px] bg-[#c9c9c9] rounded-full flex items-center justify-center transition-opacity duration-300 hover:opacity-80 ${
            showScrollTop ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-label="상단으로 이동"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[24px] h-[24px]"
          >
            <path
              d="M12 19V5M5 12L12 5L19 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </footer>
  );
}


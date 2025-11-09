"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProjectPage() {
  const [activeCategory, setActiveCategory] = useState<"ALL" | "Capstone" | "Suhyup" | "Goods">("ALL");
  const categories: Array<{
    key: "ALL" | "Capstone" | "Suhyup" | "Goods";
    label: string;
  }> = [
    { key: "ALL", label: "ALL" },
    { key: "Capstone", label: "Capstone" },
    { key: "Suhyup", label: "Suhyup" },
    { key: "Goods", label: "Goods" },
  ];
  return (
    <div id="project-page" className="w-full min-h-screen min-[394px]:flex min-[394px]:flex-col min-[394px]:gap-[calc(264px*100vw/1920px)]">
      {/* 최상위 컨테이너 */}
      <div id="project-page-container" className="w-full h-auto min-[394px]:flex min-[394px]:flex-col min-[394px]:gap-[calc(52px*100vw/1920px)]">
        {/* 헤더포스터 + 프로젝트 소개(페이지별로 직접 관리) */}
        <div id="project-page-header-container" className="w-full min-[394px]:h-[337px] relative">
          {/* 헤더포스터 */}
          <Image
            src="/images/headers/헤더포스터.png"
            alt="프로젝트 페이지 헤더 포스터"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div id="project-page-content-container" className="w-full min-[394px]:h-[calc(100vh-337px)] min-[394px]:px-[calc(22px*100vw/1920px)]">
          {/* 프로젝트 설명들 영역 (추후 추가) */}
          <div
            id="project-page-content-cartegory-title-container"
            className="w-fit h-fit min-[394px]:pr-[calc(21px*100vw/1920px)] flex items-center justify-start gap-[calc(28px*100vw/1920px)]"
          >
            {categories.map(({ key, label }) => {
              const isActive = activeCategory === key;
              const activeClasses = "font-bold text-black text-[min(calc(40px*100vw/1920px),40px)] tracking-[-1.6px]"; // 40px, -4%
              const inactiveClasses = "font-medium text-[#c2c2c2] text-[min(calc(30px*100vw/1920px),30px)] tracking-[-1.2px]"; // 30px, -4%
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveCategory(key)}
                  className={`${isActive ? activeClasses : inactiveClasses} transition-colors`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      {/* Footer는 (main)/layout.tsx에서 자동으로 렌더링됨 */}
    </div>
  );
}


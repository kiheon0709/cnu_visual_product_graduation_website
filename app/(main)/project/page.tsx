"use client";

import { useState } from "react";
import ProjectCard from "@/components/project/ProjectCard";

const CATEGORY_TABS = [
  { label: "ALL", value: "all" },
  { label: "Capstone", value: "capstone" },
  { label: "Suhyup", value: "suhyup" },
  { label: "Goods", value: "goods" },
];

export default function ProjectPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  return (
    <div id="project-page" className="w-full min-h-screen flex flex-col">
      <section
        id="프로젝트 페이지 헤더 포스터"
        className={[
          "hidden min-[744px]:block",
          "min-[744px]:h-[260px] min-[1025px]:h-[337px]",
          "w-full overflow-hidden bg-background-gray",
        ].join(" ")}
      />
      <section
        id="프로젝트 페이지 본문"
        className={[
          "w-full min-h-full flex flex-col",
          "gap-2 px-5 pt-[23px] pb-[120px]",
          "min-[744px]:gap-10 min-[744px]:px-[22px]",
          "min-[744px]:pt-[57px] min-[744px]:pb-[80px]",
          "min-[1025px]:gap-3 min-[1025px]:px-[22px]",
          "min-[1025px]:pt-[52px] min-[1025px]:pb-[264px]",
        ].join(" ")}
      >
        <div
          id="프로젝트 카테고리 필터 컨테이너"
          className={[
            "flex items-center justify-center",
            "min-[744px]:justify-start",
            "w-full h-fit",
          ].join(" ")}
        >
          <nav aria-label="프로젝트 카테고리 필터">
            <ul
              className={[
                "flex items-center",
                "gap-[16px]",
                "min-[744px]:gap-[28px]",
                "min-[1025px]:gap-[28px]",
              ].join(" ")}
            >
              {CATEGORY_TABS.map(({ label, value }) => {
                const isActive = activeCategory === value;

                return (
                  <li key={value} className="flex items-center">
                    <button
                      type="button"
                      aria-pressed={isActive}
                      className={[
                        "transition-colors",
                        isActive ? "font-bold text-black" : "font-medium text-[#c2c2c2]",
                        isActive
                          ? "text-[20px] min-[744px]:text-[32px] min-[1025px]:text-[40px]"
                          : "text-[16px] min-[744px]:text-[24px] min-[1025px]:text-[30px]",
                        "tracking-[-4%]",
                        "focus:outline-none",
                      ].join(" ")}
                      onClick={() => setActiveCategory(value)}
                    >
                      {label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div
          id="프로젝트 카드 그리드 컨테이너"
          className={[
            "w-full",
            "flex flex-col",
            "gap-6",
            "min-[744px]:gap-[18px]",
            "min-[1025px]:gap-[44px]",
          ].join(" ")}
        >
          {/* 모바일: 카드 1개씩 직접 배치 */}
          <div className="min-[744px]:hidden">
            <ProjectCard />
          </div>
          <div className="min-[744px]:hidden">
            <ProjectCard />
          </div>
          <div className="min-[744px]:hidden">
            <ProjectCard />
          </div>
          <div className="min-[744px]:hidden">
            <ProjectCard />
          </div>

          {/* PC/태블릿: 카드 2개씩 묶음 컨테이너 */}
          <div
            className={[
              "hidden min-[744px]:flex",
              "w-full h-fit",
              "justify-between",
              "min-[1025px]:justify-start min-[1025px]:gap-3",
            ].join(" ")}
          >
            <ProjectCard />
            <ProjectCard />
          </div>
          <div
            className={[
              "hidden min-[744px]:flex",
              "w-full h-fit",
              "justify-between",
              "min-[1025px]:justify-start min-[1025px]:gap-3",
            ].join(" ")}
          >
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </section>
    </div>
  );
}


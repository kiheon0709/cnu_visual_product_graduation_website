"use client";

import { useState, useMemo } from "react";
import ProjectCard from "@/components/project/ProjectCard";
import { getProjectsByCategoryWithDesigners } from "@/lib/utils/projects";

const CATEGORY_TABS = [
  { label: "ALL", value: "all" },
  { label: "Capstone", value: "Capstone" },
  { label: "Suhyup", value: "Suhyup" },
  { label: "Goods", value: "Goods" },
];

export default function ProjectPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // 카테고리로 필터링된 프로젝트와 디자이너 정보 가져오기
  const projectsWithDesigners = useMemo(() => {
    return getProjectsByCategoryWithDesigners(
      activeCategory as "all" | "Capstone" | "Suhyup" | "Goods"
    );
  }, [activeCategory]);

  // 2열 그리드를 위한 그룹화 (PC/태블릿용)
  const projectPairs = useMemo(() => {
    const pairs: typeof projectsWithDesigners[] = [];
    for (let i = 0; i < projectsWithDesigners.length; i += 2) {
      pairs.push(projectsWithDesigners.slice(i, i + 2));
    }
    return pairs;
  }, [projectsWithDesigners]);

  return (
    <div id="project-page" className="w-full min-h-screen flex flex-col">
      <section
        id="프로젝트 페이지 헤더 포스터"
        className={[
          "hidden min-[1025px]:block",
          "min-[1025px]:h-[337px]",
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
            {projectsWithDesigners.map((project) => (
              <ProjectCard
                key={project.id}
                slug={project.slug}
                title={project.title}
                category={project.category}
                designerName={project.designer?.nameKo || ""}
                imageUrl={project.images.thumbnail}
                description={project.description}
                keywords={project.keywords}
              />
            ))}
          </div>

          {/* PC/태블릿: 카드 2개씩 묶음 컨테이너 */}
          {projectPairs.map((pair, pairIndex) => (
            <div
              key={pairIndex}
              className={[
                "hidden min-[744px]:flex",
                "w-full h-fit",
                "items-stretch",
                "gap-[20px]",
                "min-[1025px]:gap-3",
              ].join(" ")}
            >
              {pair.map((project) => (
                <div key={project.id} className="flex-1 min-w-0">
                  <ProjectCard
                    slug={project.slug}
                    title={project.title}
                    category={project.category}
                    designerName={project.designer?.nameEn || ""}
                    imageUrl={project.images.thumbnail}
                    description={project.description}
                    keywords={project.keywords}
                  />
                </div>
              ))}
              {pair.length === 1 && (
                <div
                  className="flex-1 min-w-0 opacity-0 pointer-events-none"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}


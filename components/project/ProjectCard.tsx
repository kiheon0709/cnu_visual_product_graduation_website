"use client";

import Link from "next/link";

interface ProjectCardProps {
  slug?: string;
  title?: string;
  category?: string;
  designerName?: string;
  imageUrl?: string;
  description?: string;
  keywords?: string[];
  variant?: "default" | "full"; // full: 부모 컨테이너 너비 100% 기준으로 스케일
}

export default function ProjectCard({
  slug,
  title = "프로젝트명",
  category = "PRODUCT",
  designerName = "홍길동",
  imageUrl,
  description,
  keywords,
  variant = "default",
}: ProjectCardProps) {
  const cardContent = (
    <div
      className={[
        "flex flex-col",
        "w-full h-fit",
        "gap-2",
        variant === "default" ? "max-[743px]:w-full" : "",
        variant === "default" ? "min-[744px]:gap-3 min-[744px]:w-fit" : "",
        variant === "default" ? "min-[1025px]:gap-2" : "",
        variant === "default" ? "min-[1025px]:w-[calc((100vw-var(--sidebar-w)-44px)*733/1476)]" : "",
      ].join(" ")}
    >
      {/* 사진 컨테이너 */}
      <div
        className={[
          "bg-[#D9D9D9]",
          variant === "default" ? "w-[calc(100vw-40px)] aspect-[353/158]" : "",
          variant === "default"
            ? "min-[744px]:w-[calc((100vw-257.5px)*278.52/576.5)] min-[744px]:h-[calc((100vw-257.5px)*155.29/576.5)] min-[744px]:aspect-auto min-[744px]:max-w-none"
            : "",
          variant === "default"
            ? "min-[1025px]:w-[calc((100vw-var(--sidebar-w)-44px)*733/1476)] min-[1025px]:h-[calc((100vw-var(--sidebar-w)-44px)*412/1476)] min-[1025px]:max-w-none"
            : "",
          variant === "full" ? "w-full aspect-[733/412]" : "",
        ].join(" ")}
      >
        {/* 추후 이미지와 호버 텍스트 영역 */}
      </div>

      {/* 문구 컨테이너 */}
      <div className={["w-full", "h-fit", "flex flex-col"].join(" ")}>
        {/* 프로젝트명 컨테이너 */}
        <div
          className={[
            "flex items-center",
            "gap-2",
          ].join(" ")}
        >
          {/* 프로젝트명 텍스트 */}
          <span
            className={[
              "font-semibold text-black tracking-[-4%]",
              "text-[16px]",
              "min-[744px]:text-[20px]",
              "min-[1025px]:text-[24px]",
            ].join(" ")}
          >
            {title}
          </span>

          {/* 카테고리 텍스트 */}
          <span
            className={[
              "font-normal text-[#A8A8A8] tracking-[-4%]",
              "text-[14px]",
              "min-[744px]:text-[16px]",
              "min-[1025px]:text-[20px]",
            ].join(" ")}
          >
            {category}
          </span>
        </div>

        {/* 이름 텍스트 */}
        <span
          className={[
            "font-normal text-black tracking-[-4%]",
            "text-[12px]",
            "min-[744px]:text-[16px]",
            "min-[1025px]:text-[20px]",
          ].join(" ")}
        >
          {designerName}
        </span>
      </div>
    </div>
  );

  if (slug) {
    return (
      <Link href={`/project/${slug}`} className="block w-full h-fit">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}


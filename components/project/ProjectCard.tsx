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
}

export default function ProjectCard({
  slug,
  title = "프로젝트명",
  category = "PRODUCT",
  designerName = "홍길동",
  imageUrl,
  description,
  keywords,
}: ProjectCardProps) {
  const cardContent = (
    <div
      className={[
        "flex flex-col",
        "w-full h-fit",
        "gap-2",
        // 모바일: 전체 너비 사용
        "max-[743px]:w-full",
        // 태블릿: gap 12px
        "min-[744px]:gap-3 min-[744px]:w-fit",
        // PC: gap 8px, 너비는 실제 컨테이너 너비 기준 비례 스케일링
        "min-[1025px]:gap-2",
        // PC: 실제 사용 가능 너비 기준 (1920px - 400px 사이드바 - 44px 패딩 = 1476px)
        "min-[1025px]:w-[calc((100vw-var(--sidebar-w)-44px)*733/1476)]",
      ].join(" ")}
    >
      {/* 사진 컨테이너 */}
      <div
        className={[
          "bg-[#D9D9D9]",
          // 모바일: 실제 컨테이너 너비 기준 (393px - 40px 패딩 = 353px)
          // 카드 크기 353x158은 393px 기준
          // 실제 사용 가능 너비 = 100vw - 40px (좌우 패딩 20px * 2)
          "w-[calc(100vw-40px)]",
          "aspect-[353/158]",
          // 태블릿: 사이드바(메뉴바)는 1025px 기준으로 고정 (400px * 1025/1920 = 213.5px)
          // 실제 사용 가능 너비 = 100vw - 213.5px - 44px = 100vw - 257.5px
          // 카드 크기 278.52×155.29는 834px 기준 (메뉴바 213.5px 고정 기준으로 재계산)
          // 834px 기준: 사이드바 213.5px(고정), 패딩 44px, 실제 사용 가능 = 834 - 213.5 - 44 = 576.5px
          // 따라서 실제 사용 가능 너비 대비 비율로 계산: (100vw - 257.5px) * 278.52 / 576.5
          "min-[744px]:w-[calc((100vw-257.5px)*278.52/576.5)]",
          "min-[744px]:h-[calc((100vw-257.5px)*155.29/576.5)]",
          "min-[744px]:aspect-auto min-[744px]:max-w-none",
          // PC: 실제 컨테이너 너비 기준 (1920px - 400px 사이드바 - 44px 패딩 = 1476px)
          "min-[1025px]:w-[calc((100vw-var(--sidebar-w)-44px)*733/1476)]",
          "min-[1025px]:h-[calc((100vw-var(--sidebar-w)-44px)*412/1476)]",
          "min-[1025px]:max-w-none",
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
            "min-[1025px]:text-[16px]",
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


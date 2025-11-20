"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const [pcScale, setPcScale] = useState(1);

  useEffect(() => {
    if (!imageWrapperRef.current) return;

    const BASE_IMAGE_WIDTH = 733; // 디자인 기준 1920px 환경에서의 카드 이미지 너비
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      const width = entry.contentRect.width || BASE_IMAGE_WIDTH;
      setPcScale(width / BASE_IMAGE_WIDTH);
    });

    observer.observe(imageWrapperRef.current);

    return () => observer.disconnect();
  }, []);

  const scaledPadding = 50 * pcScale;
  const scaledGap = 120 * pcScale;
  const scaledDescriptionFont = 26 * pcScale;
  const scaledKeywordFont = 26 * pcScale;
  const scaledKeywordGap = 36 * pcScale;

  const cardContent = (
    <div
      className={[
        "group",
        "flex flex-col",
        "w-full h-fit",
        "gap-2",
        variant === "default" ? "max-[743px]:w-full" : "",
        variant === "default" ? "min-[744px]:gap-[12px] min-[744px]:w-full" : "",
        variant === "default" ? "min-[1025px]:gap-[8px]" : "",
        variant === "default" ? "min-[1025px]:w-[calc((100vw-var(--sidebar-w)-44px)*733/1476)]" : "",
      ].join(" ")}
    >
      {/* 사진 컨테이너 */}
      <div
        ref={imageWrapperRef}
        className={[
          "bg-[#D9D9D9]",
          "w-full h-full",
          "relative",
          "overflow-hidden",
          "aspect-[733/412]",
        ].join(" ")}
      >
        {/* 썸네일 이미지 */}
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title || "프로젝트 이미지"}
            className="absolute inset-0 w-full h-full object-cover object-left-top"
          />
        )}
        {/* 추후 이미지와 호버 텍스트 영역 */}
        <div
          className={[
            "hidden min-[1025px]:block",
            "absolute inset-0",
            "bg-[#000000]/40",
            "opacity-0 group-hover:opacity-100",
            "transition-opacity duration-300 ease-out",
            "pointer-events-none",
          ].join(" ")}
        />
        <div
          className={[
            "hidden min-[1025px]:flex",
            "absolute inset-0",
            "flex-col justify-between",
            "opacity-0 group-hover:opacity-100",
            "transition-opacity duration-300 ease-out",
            "pointer-events-none",
          ].join(" ")}
          style={{
            padding: `${scaledPadding}px`,
            gap: `${scaledGap}px`,
          }}
        >
          <p
            className={[
              "text-white",
              "font-normal",
              "leading-[1.4]",
              "w-full",
            ].join(" ")}
            style={{
              fontSize: `${scaledDescriptionFont}px`,
            }}
          >
            {description || "작품 설명이 준비 중입니다."}
          </p>
          {keywords && keywords.length > 0 && (
            <div
              className={[
                "w-full",
                "flex flex-row flex-wrap",
                "text-[#B8EDFF]",
                "font-medium",
              ].join(" ")}
              style={{
                gap: `${scaledKeywordGap}px`,
                fontSize: `${scaledKeywordFont}px`,
              }}
            >
              {keywords.map((keyword, index) => (
                <span key={`${keyword}-${index}`}>
                  {keyword?.startsWith("#") ? keyword : `#${keyword}`}
                </span>
              ))}
            </div>
          )}
        </div>
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


"use client";

import Image from "next/image";
import Link from "next/link";
import { Archive } from "@/types";

interface ArchiveCardProps {
  archive: Archive;
  priority?: boolean;
}

export default function ArchiveCard({ archive, priority = false }: ArchiveCardProps) {
  const cardContent = (
    <div
      id="아카이브 카드 컨테이너"
      className={[
        "flex flex-col",
        "w-full h-fit",
        "gap-[8px]",
        "min-[744px]:gap-[18px]",
        "min-[1025px]:gap-[9px]",
      ].join(" ")}
    >
      {/* 아카이브 포스터 이미지 컨테이너 */}
      <div
        id="아카이브 카드 - 포스터 프레임"
        className={[
          "w-full",
          "relative",
          "overflow-hidden",
          "flex items-center justify-center",
        ].join(" ")}
      >
        {archive.posterImage && (
          <Image
            src={archive.posterImage}
            alt={archive.title}
            width={0}
            height={0}
            sizes="100vw"
            className={[
              "w-full",
              "h-auto",
            ].join(" ")}
            priority={priority}
          />
        )}
      </div>

      {/* 제목 컨테이너 */}
      <div
        id="아카이브 카드 - 제목 컨테이너"
        className={[
          "w-full",
          "h-fit",
          "flex flex-col",
          "text-center",
          "min-[1025px]:text-left",
        ].join(" ")}
      >
        {/* 제목 텍스트 */}
        <span
          className={[
            "font-semibold text-black tracking-[-4%]",
            "text-[16px]",
            "min-[744px]:text-[20px]",
            "min-[1025px]:text-[24px]",
          ].join(" ")}
        >
          {archive.title}
        </span>
      </div>
    </div>
  );

  // link가 있으면 Link로 감싸기
  if (archive.link) {
    return (
      <Link
        href={archive.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-fit"
        aria-label={`${archive.title} 아카이브로 이동`}
      >
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}


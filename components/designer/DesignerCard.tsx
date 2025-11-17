import Image from "next/image";
import Link from "next/link";

interface DesignerCardProps {
  slug: string;
  nameEn: string;
  nameKo?: string;
  roleOrDept?: string;
  profileImage: string; // public 경로 e.g. "/images/designers/profile/이건홍.jpg"
  priority?: boolean;
}

export default function DesignerCard({
  slug,
  nameEn,
  nameKo,
  roleOrDept,
  profileImage,
  priority = false,
}: DesignerCardProps) {
  return (
    <Link
      id="디자이너 카드 컨테이너 영역"
      href={`/designer/${slug}`}
      className={[
        "group",
        "block w-full",
        "flex flex-col",
        "gap-[8px]",
        "min-[744px]:gap-[14px]",
        "min-[1025px]:gap-[16px]",
      ].join(" ")}
      aria-label={`${nameEn} 상세 페이지로 이동`}
    >
      {/* 사진 컨테이너 */}
      <div
        id="디자이너 카드 - 사진 컨테이너"
        className={[
          "w-full h-full",
          "relative",
          "overflow-hidden",
          "rounded-none",
          // 이미지 프레임은 정사각형을 기본으로
          "aspect-square",
        ].join(" ")}
      >
        <Image
          src={profileImage}
          alt={nameEn}
          fill
          className={[
            "object-cover object-top",
            // "transition-transform duration-300",
            // "group-hover:scale-[1.03]",
          ].join(" ")}
          priority={priority}
        />
      </div>

      {/* 디자이너 이름 컨테이너 */}
      <div
        id="디자이너 카드 - 이름 컨테이너"
        className={[
          "flex flex-col",
        ].join(" ")}
      >
        {/* 영문명 */}
        <p
          id="디자이너 카드 - 영문명"
          className={[
            "text-black font-semibold tracking-[-4%]",
            "text-[16px]",
            "min-[744px]:text-[20px]",
            "min-[1025px]:text-[24px]",
          ].join(" ")}
        >
          {nameEn}
        </p>
        {nameKo && (
          /* 한글명 */
          <p
            id="디자이너 카드 - 한글명"
            className={[
              "text-[#A8A8A8] font-regular tracking-[-4%]",
              "text-[14px]",
              "min-[744px]:text-[18px]",
              "min-[1025px]:text-[20px]",
            ].join(" ")}
          >
            {nameKo}
          </p>
        )}
      </div>
    </Link>
  );
}



import Image from "next/image";
import Link from "next/link";

interface DesignerCardProps {
  slug: string;
  nameEn: string;
  nameKo?: string;
  roleOrDept?: string;
  profileImage: string; // public 경로 e.g. "/images/designers/profile/이건홍.jpg"
}

export default function DesignerCard({
  slug,
  nameEn,
  nameKo,
  roleOrDept,
  profileImage,
}: DesignerCardProps) {
  return (
    <Link
      href={`/designer/${slug}`}
      className={[
        "group",
        "block w-full",
      ].join(" ")}
      aria-label={`${nameEn} 상세 페이지로 이동`}
    >
      <div
        className={[
          "w-full",
          "bg-[#efefef]",
          "overflow-hidden",
          "rounded-none",
          // 이미지 프레임은 정사각형을 기본으로
          "aspect-square",
        ].join(" ")}
      >
        <Image
          src={profileImage}
          alt={nameEn}
          width={354}
          height={354}
          className={[
            "w-full h-full object-cover",
            "transition-transform duration-300",
            "group-hover:scale-[1.03]",
          ].join(" ")}
          priority={false}
        />
      </div>

      <div
        className={[
          "mt-3",
          "flex flex-col",
          "gap-[2px]",
          "min-[1025px]:mt-4",
        ].join(" ")}
      >
        <p
          className={[
            "text-black font-semibold tracking-[-4%]",
            "text-[16px]",
            "min-[744px]:text-[20px]",
            "min-[1025px]:text-[24px]",
          ].join(" ")}
        >
          {nameEn}
        </p>
        {(nameKo || roleOrDept) && (
          <p
            className={[
              "text-[#858585] tracking-[-4%]",
              "text-[14px]",
              "min-[744px]:text-[16px]",
              "min-[1025px]:text-[20px]",
            ].join(" ")}
          >
            {nameKo || roleOrDept}
          </p>
        )}
      </div>
    </Link>
  );
}



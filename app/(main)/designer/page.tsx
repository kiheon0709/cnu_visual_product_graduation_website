import DesignerCard from "@/components/designer/DesignerCard";
import { designers } from "@/lib/data/designers";

export default function DesignerPage() {
  return (
    <div id="designer-page" className="w-full min-h-screen flex flex-col">
      <section
        id="디자이너 페이지 헤더 포스터"
        className={[
          "hidden min-[1025px]:block",
          "min-[1025px]:h-[337px]",
          "w-full overflow-hidden bg-background-gray",
        ].join(" ")}
      />
      <section
        id="디자이너 페이지 본문"
        className={[
          "w-full min-h-full flex flex-col",
          "px-5 px-[20px] py-[61px]",
          "min-[744px]:px-[22px] min-[744px]:pt-[57px] min-[744px]:pb-[100px]",
          "min-[1025px]:gap-[12px] min-[1025px]:px-[22px] min-[1025px]:pt-[52px] min-[1025px]:pb-[264px]",
        ].join(" ")}
      >
        <h1 className="hidden min-[1025px]:block text-[40px] font-semibold tracking-[-4%]">
          Designer
        </h1>
        <div
          id="디자이너 카드 그리드 컨테이너"
          className={[
            "w-full",
            "grid",
            // 모바일 2열
            "grid-cols-2",
            // 태블릿 3열
            "min-[744px]:grid-cols-3",
            // PC 기본 3열, 충분히 넓어지면 4열
            "min-[1025px]:grid-cols-3",
            "min-[1280px]:grid-cols-4",
            // 카드 간격
            "gap-[8px]",
            "min-[744px]:gap-[14px]",
            "min-[1025px]:gap-[16px]",
          ].join(" ")}
        >
          {designers.map((d, index) => (
            <DesignerCard
              key={d.id}
              slug={d.slug}
              nameEn={d.nameEn}
              nameKo={d.nameKo}
              roleOrDept={d.role || undefined}
              profileImage={d.profileImage}
              priority={index < 4}
            />
          ))}
        </div>
      </section>
    </div>
  );
}



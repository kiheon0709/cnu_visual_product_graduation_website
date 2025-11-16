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
            "w-full flex flex-col",
            "gap-[8px]",
            "min-[744px]:gap-[24px]",
            "min-[1025px]:gap-[52px]",
          ].join(" ")}
        >
          {/* TODO: 디자이너 그리드 구성 예정 */}
        </div>
      </section>
    </div>
  );
}



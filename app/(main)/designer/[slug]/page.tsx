interface DesignerDetailPageProps {
  params: {
    slug: string;
  };
}

export default function DesignerDetailPage({ params }: DesignerDetailPageProps) {
  const { slug } = params;

  return (
    <div id="designer-detail-page" className="w-full min-h-screen flex flex-col">
      <section
        id="디자이너 디테일 페이지 헤더 포스터"
        className={[
          "hidden min-[1025px]:block",
          "min-[1025px]:h-[337px]",
          "w-full overflow-hidden bg-background-gray",
        ].join(" ")}
      />
      <section
        id="디자이너 디테일 페이지 본문"
        className={[
          "w-full min-h-full flex flex-col",
          "gap-2 px-5 pt-[23px] pb-[120px]",
          "min-[744px]:gap-10 min-[744px]:px-[22px]",
          "min-[744px]:pt-[57px] min-[744px]:pb-[80px]",
          "min-[1025px]:gap-3 min-[1025px]:px-[22px]",
          "min-[1025px]:pt-[52px] min-[1025px]:pb-[264px]",
        ].join(" ")}
      >
        <h1 className="text-[24px] min-[744px]:text-[32px] min-[1025px]:text-[40px] font-semibold tracking-[-4%]">
          Designer Detail
        </h1>
        <p className="text-[#888]">slug: {slug}</p>
        <div
          id="디자이너 프로필 및 프로젝트 리스트 컨테이너"
          className={[
            "w-full",
            "flex flex-col",
            "gap-6",
            "min-[744px]:gap-[18px]",
            "min-[1025px]:gap-[44px]",
          ].join(" ")}
        >
          {/* TODO: 프로필 영역 및 프로젝트 리스트 구성 예정 */}
        </div>
      </section>
    </div>
  );
}



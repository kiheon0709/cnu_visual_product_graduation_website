import Image from "next/image";
import ProjectCard from "@/components/project/ProjectCard";
import { getDesignerWithProjects } from "@/lib/utils/designers";
import { getSupabaseUrl } from "@/lib/utils/supabase";

interface DesignerDetailPageProps {
  params: {
    slug: string;
  };
}

export default function DesignerDetailPage({ params }: DesignerDetailPageProps) {
  const { slug } = params;
  const designerData = getDesignerWithProjects(slug);
  const designer = designerData;
  const projects = designerData?.projects || [];

  const projectPairs: typeof projects[] = [];
  for (let i = 0; i < projects.length; i += 2) {
    projectPairs.push(projects.slice(i, i + 2));
  }

  return (
    <div id="designer-detail-page" className="w-full min-h-screen flex flex-col">
      <section
        id="디자이너 디테일 페이지 헤더 포스터"
        className={[
          "hidden min-[744px]:block",
          "min-[744px]:h-[130px]",
          "min-[1025px]:h-[337px]",
          "w-full overflow-hidden bg-background-gray",
          "relative",
        ].join(" ")}
      >
        {designer?.headerImageUrl && (
          <Image
            src={designer.headerImageUrl}
            alt={`${designer.nameEn} header image`}
            fill
            className="object-cover"
            priority
          />
        )}
      </section>
      <section
        id="디자이너 상세 페이지 본문"
        className={[
          "w-full h-full flex flex-col",
          "gap-[56px] px-[20px] pt-[61px] pb-[120px]",
          "min-[744px]:gap-[72px] min-[744px]:px-[22px] min-[744px]:pt-[57px] min-[744px]:pb-[150px]",
          "min-[1025px]:gap-[62px] min-[1025px]:px-[22px] min-[1025px]:pt-[124px] min-[1025px]:pb-[220px]",
        ].join(" ")}
      >
        <div
          id="디자이너 프로필 컨테이너"
          className={[
            "w-full h-fit",
            "flex flex-row",
            "gap-[16px]",
            "min-[744px]:gap-[20px]",
            "min-[1025px]:gap-[44px]",
          ].join(" ")}
        >
          <div
            id="디자이너 프로필 이미지 컨테이너"
              className={[
                "flex-shrink-0",
                "aspect-square",
                "max-w-[170px]",
                "min-[744px]:aspect-auto min-[744px]:self-stretch min-[744px]:max-w-[200px]",
                "min-[1025px]:max-w-[230px]",
              ].join(" ")}
          >
            {designer && (
              <img
                src={designer.profileImage}
                alt={designer.nameEn}
                className="h-full w-full object-cover min-[744px]:w-auto min-[744px]:object-contain min-[744px]:object-center"
                style={{
                  objectPosition: '50% -10px'
                }}
              />
            )}
          </div>
          <div id="디자이너 정보 컨테이너" className={[
            "w-full",
            "h-fit",
            "flex flex-col",
            "gap-[27px] py-[10px]",
            "min-[744px]:gap-[12px] min-[744px]:py-[0px]",
            "min-[1025px]:gap-[48px] min-[1025px]:py-[0px]",
          ].join(" ")}>
            {/* 디자이너 정보 - 이름, 역할, 소개글 */}
            <div id="디자이너 정보 - 이름, 역할, 소개글" className={[
              "w-full h-fit",
              "flex flex-col",
              "gap-[4px]",
              "min-[744px]:gap-[12px]",
              "min-[1025px]:gap-[18px]",
            ].join(" ")}>
              {/* 1. 영문이름 + 역할 */}
              <div id="디자이너 정보 - 이름 및 역할" className={[
                "gap-[4px]",
                "min-[744px]:gap-[0px]",
                "min-[1025px]:gap-[0px]",
                "w-full h-fit",
                "flex flex-col",
              ].join(" ")}>
              {designer && (
                <>
                  <h2
                    id="디자이너 영어이름"
                    className={[
                      "w-fit font-bold text-black tracking-[-4%]",
                      "text-[16px]",
                      "min-[744px]:text-[26px]",
                      "min-[1025px]:text-[32px]",
                    ].join(" ")}
                  >
                    {designer.nameEn}
                  </h2>
                  <p id="디자이너 역할" 
                     className={[
                      "w-fit font-regular text-[#868686] tracking-[-4%]",
                      "text-[14px]",
                      "min-[744px]:text-[18px]",
                      "min-[1025px]:text-[20px]",
                  ].join(" ")}>
                    {designer.role}
                  </p>
                </>
              )}
              </div>
              {/* 2. 디자이너 소개글 */}
              <div id="디자이너 정보 - 소개글" className={[
                "w-full h-fit",
                "hidden",
                "min-[744px]:flex",
                "flex-col",
                "min-[1025px]:max-w-[800px]",
              ].join(" ")}>
                {designer && (
                  <p className={[
                    "w-fit text-[#858585] tracking-[-4%]",
                    "text-[14px]",
                    "min-[744px]:text-[18px]",
                    "min-[1025px]:text-[20px]",
                  ].join(" ")}>
                    {designer.introduction}
                  </p>
                )}
              </div>
            </div>
          {/* 3. 컨택주소 */}
          <div
            id="디자이너 정보 - 컨택주소"
            className={[
              "w-full h-fit",
              "flex flex-col",
              "gap-[10px]",
              "min-[744px]:gap-[4px]",
              "min-[1025px]:flex-row min-[1025px]:gap-[24px]",
            ].join(" ")}
          >
            {designer?.contact.email && (
              <div className="w-fit h-fit flex flex-row items-center flex-shrink-0 gap-[8px] min-[744px]:gap-[16px] min-[1025px]:gap-[16px]">
                <Image
                  src={getSupabaseUrl("logo/Email.svg")}
                  alt="email"
                  width={24}
                  height={24}
                  className={[
                    "w-[16px] h-[12px]",
                    "min-[744px]:w-[20px] min-[744px]:h-[20px]",
                    "min-[1025px]:w-[24px] min-[1025px]:h-[24px]",
                  ].join(" ")}
                />
                <p className="w-fit text-[#868686] font-regular tracking-[-4%] text-[12px] min-[744px]:text-[16px] min-[1025px]:text-[20px]">
                  {designer.contact.email}
                </p>
              </div>
            )}

            {designer?.contact.behance && (
              <a
                href={designer.contact.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit h-fit"
              >
                <div className="w-fit h-fit flex flex-row items-center flex-shrink-0 gap-[8px] min-[744px]:gap-[16px] min-[1025px]:gap-[16px]">
                  <Image
                    src={getSupabaseUrl("logo/Behance.svg")}
                    alt="behance"
                    width={24}
                    height={24}
                    className={[
                      "w-[16px] h-[16px]",
                      "min-[744px]:w-[20px] min-[744px]:h-[20px]",
                      "min-[1025px]:w-[24px] min-[1025px]:h-[24px]",
                    ].join(" ")}
                  />
                  <p className="w-fit text-[#868686] font-regular tracking-[-4%] text-[12px] min-[744px]:text-[16px] min-[1025px]:text-[20px] break-words">
                    {designer.contact.behance}
                  </p>
                </div>
              </a>
            )}

            {designer?.contact.instagram && (
              <a
                href={`https://www.instagram.com/${designer.contact.instagram
                  .replace(/^@/, "")
                  .trim()}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit h-fit"
              >
                <div className="w-fit h-fit flex flex-row items-center flex-shrink-0 gap-[8px] min-[744px]:gap-[16px] min-[1025px]:gap-[16px]">
                  <Image
                    src={getSupabaseUrl("logo/Instagram.svg")}
                    alt="instagram"
                    width={24}
                    height={24}
                    className={[
                      "w-[16px] h-[16px]",
                      "min-[744px]:w-[20px] min-[744px]:h-[20px]",
                      "min-[1025px]:w-[24px] min-[1025px]:h-[24px]",
                    ].join(" ")}
                  />
                  <p className="w-fit text-[#868686] font-regular tracking-[-4%] text-[12px] min-[744px]:text-[16px] min-[1025px]:text-[20px] break-words">
                    {designer.contact.instagram}
                  </p>
                </div>
              </a>
            )}
          </div>
          </div>
        </div>
        <div
          id="디자이너 프로젝트 리스트 컨테이너 1"
          className={[
            "w-full",
            "flex flex-col",
            "gap-[8px]",
            "min-[744px]:gap-[0px]",
            "min-[1025px]:gap-[0px]",
          ].join(" ")}
        >
          <h3
            id="디자이너 프로젝트 리스트 제목"
            className={[
              "block min-[744px]:hidden",
              "font-semibold text-black tracking-[-4%]",
              "text-[24px]",
            ].join(" ")}
          >
            Project
          </h3>
          <div
            id="디자이너 프로젝트 리스트 컨테이너 2"
            className={[
              "w-full",
              "flex flex-col",
              "gap-[24px]",
              "min-[744px]:gap-[28px]",
              "min-[1025px]:gap-[56px]",
            ].join(" ")}>
              {/* 모바일: 1열 1개 */}
              <div className="flex flex-col gap-[24px] min-[744px]:hidden">
                {projects.map((p) => (
                  <ProjectCard
                    key={p.id}
                    slug={p.slug}
                    title={p.title}
                    category={p.category}
                    projectType={p.projectType}
                    designerName={designer?.nameKo || designer?.nameEn || ""}
                    imageUrl={p.images.thumbnail}
                    description={p.description}
                    keywords={p.keywords}
                    variant="full"
                  />
                ))}
              </div>
              {/* 태블릿/PC: 1열에 2개씩 묶음 컨테이너 */}
              {projectPairs.map((pair, idx) => (
                <div
                  key={idx}
                  className={[
                    "hidden min-[744px]:flex min-[744px]:gap-[20px]",
                    "w-full h-fit",
                    "justify-start",
                    "min-[1025px]:gap-[12px]",
                  ].join(" ")}
                >
                  {pair.map((p) => (
                    <div 
                      key={p.id} 
                      className={[
                        "flex-1",
                        pair.length === 1 ? "max-w-[calc((100%-20px)/2)]" : "",
                        pair.length === 1 ? "min-[1025px]:max-w-[calc((100%-12px)/2)]" : "",
                      ].join(" ")}
                    >
                      <ProjectCard
                        slug={p.slug}
                        title={p.title}
                        category={p.category}
                        projectType={p.projectType}
                        designerName={designer?.nameEn || ""}
                        imageUrl={p.images.thumbnail}
                        description={p.description}
                        keywords={p.keywords}
                        variant="full"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
        </div>
      </section>
    </div>
  );
}



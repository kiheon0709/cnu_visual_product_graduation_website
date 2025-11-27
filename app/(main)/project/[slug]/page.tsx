"use client";

import Image from "next/image";
import { getProjectWithDesigner } from "@/lib/utils/projects";
import Link from "next/link";
import { getSupabaseUrl } from "@/lib/utils/supabase";
import { useMemo } from "react";

interface ProjectDetailPageProps {
  params: { slug: string };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = params;
  const projectData = getProjectWithDesigner(slug);

  // 유튜브 URL을 embed 형식으로 변환하는 함수
  const getYoutubeEmbedUrl = (url: string): string => {
    // https://www.youtube.com/watch?v=VIDEO_ID 형식을 embed 형식으로 변환
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    const videoId = match && match[2].length === 11 ? match[2] : null;
    
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    // 만약 이미 embed 형식이거나 변환 실패시 원본 URL 반환
    return url;
  };

  // layoutOrder에 따라 컨텐츠 배열 생성 (Hooks는 항상 최상위에서 호출되어야 함)
  const contentItems = useMemo(() => {
    if (!projectData) return [];
    
    const { designer, ...project } = projectData;
    let posterIndex = 0;
    let youtubeIndex = 0;
    
    return project.layoutOrder.map((item, index) => {
      if (item === "poster") {
        const posterUrl = project.images.project_detail_poster[posterIndex];
        const currentPosterIndex = posterIndex;
        posterIndex++;
        
        return {
          type: "poster" as const,
          key: `poster-${index}`,
          posterUrl,
          posterIndex: currentPosterIndex,
        };
      } else if (item === "youtube") {
        const youtubeUrl = project.youtubeUrls?.[youtubeIndex];
        const currentYoutubeIndex = youtubeIndex;
        youtubeIndex++;
        
        return {
          type: "youtube" as const,
          key: `youtube-${index}`,
          youtubeUrl,
          youtubeIndex: currentYoutubeIndex,
        };
      }
      return null;
    }).filter((item): item is NonNullable<typeof item> => item !== null);
  }, [projectData]);

  // 프로젝트가 없으면 404
  if (!projectData || !projectData.designer) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">프로젝트를 찾을 수 없습니다</h1>
          <Link href="/project" className="text-blue-500 hover:underline">
            프로젝트 목록으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  const { designer, ...project } = projectData;

  return (
    <div id="project-detail-page" className="w-full min-h-screen flex flex-col">
      {/* 상단 헤더 이미지 */}
      <section
        id="작품 상세 페이지 헤더 포스터"
        className={[
          "hidden min-[744px]:block",
          "min-[744px]:h-[130px]",
          "min-[1025px]:h-[337px]",
          "w-full overflow-hidden bg-background-gray",
          "relative",
        ].join(" ")}
      >
        {project.images?.header && (
          <Image
            src={project.images.header}
            alt={`${project.title} 헤더 이미지`}
            fill
            className="object-cover"
            priority
          />
        )}
      </section>

      {/* 작품 본문 영역 */}
      <section
        id="작품 본문 영역"
        className={[
          "w-full h-fit flex flex-col",
          "gap-[42px]",
          "px-[20px] pt-[43px] pb-[120px]",
          "min-[744px]:pt-[57px] min-[744px]:pb-[80px] min-[744px]:px-[0px] min-[744px]:gap-[72px]",
          "min-[1025px]:pt-[125px] min-[1025px]:pb-[63px] min-[1025px]:px-[0px] min-[1025px]:gap-[100px]",
        ].join(" ")}
      >
        {/* 작품 정보 영역 */}
        <div
          id="작품 정보 영역"
          className={[
            "w-full h-fit flex flex-col-reverse",
            "gap-[23px]",
            "min-[744px]:flex-col min-[744px]:items-stretch min-[744px]:px-[22px] min-[744px]:gap-[24px]",
            "min-[1540px]:flex-row min-[1540px]:items-stretch min-[1540px]:px-[22px] min-[1540px]:gap-[48px]",
          ].join(" ")}
        >
          {/*작품 정보 좌측*/}
          <div
            className={[
              "w-full h-fit flex flex-col",
              "gap-[12px]",
              "min-[744px]:gap-[16px]",
              "min-[1540px]:flex-1 min-[1540px]:min-w-0 min-[1540px]:gap-[36px]",
            ].join(" ")}
          >
            {/* 작품 제목 */}
            <h1
              className={[
                "font-bold text-black tracking-[-4%]",
                "text-[16px]",
                "min-[744px]:text-[26px] min-[744px]:leading-[52px]",
                "min-[1025px]:text-[36px] min-[1025px]:leading-[52px]",
              ].join(" ")}
            >
              {project.title}
            </h1>
            {/* 작품 설명 */}
            <div
              className={[
                "flex flex-col",
                // 1539px 이하 구간에서 설명 텍스트 박스를 전체 너비의 80%로 제한
                "max-[1539px]:w-[80%] max-[1539px]:max-w-full",
              ].join(" ")}
            >
              {project.description
                .split(/\n\n+/)
                .filter((para) => para.trim())
                .flatMap((paragraph, index) => {
                  const paragraphElement = (
                    <p
                      key={`para-${index}`}
                      className={[
                        "font-medium text-[#858585] tracking-[-4%]",
                        "text-[12px]",
                        "min-[744px]:text-[14px] min-[744px]:leading-[170%]",
                        "min-[1025px]:text-[20px] min-[1025px]:leading-[170%]",
                        // description 내 \n 을 실제 줄바꿈으로 표시
                        "whitespace-pre-line",
                      ].join(" ")}
                    >
                      {paragraph.trim()}
                    </p>
                  );

                  // 문단 사이에 빈 줄 추가 (행간 60%, 모바일 제외)
                  if (index > 0) {
                    return [
                      <div
                        key={`spacer-${index}`}
                        className={[
                          "hidden min-[744px]:block",
                          "min-[744px]:text-[14px] min-[744px]:leading-[60%]",
                          "min-[1025px]:text-[20px] min-[1025px]:leading-[60%]",
                        ].join(" ")}
                        aria-hidden="true"
                      >
                        <br />
                      </div>,
                      paragraphElement,
                    ];
                  }
                  return [paragraphElement];
                })}
            </div>
            {/*키워드 영역*/}
            <div
              className={[
                "w-full h-fit flex flex-wrap",
                "gap-[10px]",
                "min-[744px]:gap-[29px]",
                "min-[1025px]:gap-[29px]",
              ].join(" ")}
            >
              {project.keywords.map((keyword) => (
                <span key={keyword} className="text-black font-medium tracking-[-4%]
                text-[12px]
                min-[744px]:text-[16px]
                min-[1025px]:text-[20px]">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
          {/* 구분선 */}
          <div
            className={[
              "hidden",
              "min-[744px]:block min-[744px]:w-full min-[744px]:h-[3px] min-[744px]:bg-[#d9d9d9] min-[744px]:rounded-[4px]",
              "min-[1540px]:block min-[1540px]:w-[3px] min-[1540px]:h-auto min-[1540px]:bg-[#d9d9d9] min-[1540px]:rounded-[4px] min-[1540px]:self-stretch min-[1540px]:flex-shrink-0",
            ].join(" ")}
          />
          {/*작품 정보 우측*/}
          <div
            id="작품 정보 우측"
            className={[
              "w-full h-fit flex flex-row",
              "gap-[16px]",
              "min-[744px]:gap-[20px]",
              "min-[1540px]:w-fit min-[1540px]:flex-shrink-0 min-[1540px]:gap-[24px] min-[1540px]:pt-[4px]",
            ].join(" ")}
          >
          {/* 디자이너 프로필 이미지*/}
            <div
              id="디자이너 프로필 이미지"
              className={[
              "flex-shrink-0",
              // 정사각형 프로필 박스
              "w-[160px] h-[160px]",
              "min-[744px]:w-[135px] min-[744px]:h-[135px]",
              "min-[1025px]:w-[210px] min-[1025px]:h-[210px]",
              ].join(" ")}
            >
            <img
              src={designer.profileImage}
              alt={designer.nameEn}
              // 위에서 아주 살짝만 잘리고, 전체적으로는 위쪽이 더 많이 보이도록 위치 조정
              className="w-full h-full object-cover"
              style={{ objectPosition: "50% 20%" }}
            />
            </div>
            {/* 디자이너 정보 영역*/}
            <div id = "디자이너 정보 영역" className={[
              "w-fit h-fit flex flex-col",
              "gap-[27px] py-[10px]",
              "min-[744px]:gap-[16px] min-[744px]:py-0",
              "min-[1025px]:gap-[31px]",
            ].join(" ")}>
              {/* 디자이너 이름과 소개글 영역*/}
              <div
                id = "디자이너 이름과 소개글 영역" className={[
                  "w-fit h-fit flex flex-col",
                  "gap-[4px]",
                  "min-[744px]:flex-row min-[744px]:gap-[16px]",
                  "min-[1025px]:flex-col min-[1025px]:gap-[4px]",
                ].join(" ")}
              >
                {/* 디자이너 이름*/}
                <h2
                  id = "디자이너 이름" className={[
                    "font-semibold text-black tracking-[-4%]",
                    "text-[16px]",
                    "min-[744px]:text-[20px] min-[744px]:font-bold",
                    "min-[1025px]:text-[24px] min-[1025px]:font-bold",
                  ].join(" ")}
                >
                  {designer.nameEn}
                </h2>
                {/* 디자이너 소개글(role)*/}
                <p
                  id = "디자이너 소개글(role)" className={[
                    "font-regular text-[#858585] tracking-[-4%]",
                    "text-[14px]",
                    "min-[744px]:text-[16px]",
                    "min-[1025px]:text-[20px]",
                  ].join(" ")}
                >
                  {designer.role}
                </p>
              </div>
              {/* 디자이너 연락처 정보 영역*/}
              <div id = "디자이너 연락처 정보 영역" className={[
                "w-fit h-fit flex flex-col",
                "gap-[10px]",
                "min-[744px]:gap-[8px]",
                "min-[1025px]:gap-[8px]",
                ].join(" ")}>
                {/* 디자이너 이메일 정보 영역*/}
                {designer.contact.email && (
                  <div id = "디자이너 이메일 정보 영역" className={[
                    "w-fit h-fit flex flex-row items-center",
                    "gap-[8px]",
                    "min-[744px]:gap-[14px]",
                    "min-[1025px]:gap-[16px]",
                  ].join(" ")}>
                    <Image 
                      src={getSupabaseUrl("logo/Email.svg")} 
                      alt="email" 
                      width={24} 
                      height={24}
                      className={[
                        "w-[16px] h-[12px]",
                        "min-[744px]:w-[18px] min-[744px]:h-[18px]",
                        "min-[1025px]:w-[24px] min-[1025px]:h-[24px]",
                      ].join(" ")}
                    />
                    <p className="text-[#858585] text-[12px] min-[744px]:text-[16px] min-[1025px]:text-[20px]">
                      {designer.contact.email}
                    </p>
                  </div>
                )}
                {/* 디자이너 비핸스 정보 영역*/}
                {designer.contact.behance && (
                  <a
                    id="디자이너 비핸스 정보 영역"
                    href={designer.contact.behance}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit h-fit"
                  >
                    <div
                      className={[
                        "w-fit h-fit flex flex-row items-center",
                        "max-w-full",
                        "gap-[8px]",
                        "min-[744px]:gap-[14px]",
                        "min-[1025px]:gap-[16px]",
                      ].join(" ")}
                    >
                      <Image
                        src={getSupabaseUrl("logo/Behance.svg")}
                        alt="behance"
                        width={24}
                        height={24}
                        className={[
                          "w-[16px] h-[12px]",
                          "min-[744px]:w-[18px] min-[744px]:h-[18px]",
                          "min-[1025px]:w-[24px] min-[1025px]:h-[24px]",
                        ].join(" ")}
                      />
                      <p className="text-[#858585] text-[12px] min-[744px]:text-[16px] min-[1025px]:text-[20px] break-words">
                        {designer.contact.behance}
                      </p>
                    </div>
                  </a>
                )}
                {/* 디자이너 인스타그램 정보 영역*/}
                {designer.contact.instagram && (
                  <a
                    href={`https://www.instagram.com/${designer.contact.instagram
                      .replace(/^@/, "")
                      .trim()}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit h-fit"
                  >
                    <div
                      className={[
                        "w-fit h-fit flex flex-row items-center",
                        "max-w-full",
                        "gap-[8px]",
                      ].join(" ")}
                    >
                      <Image
                        src={getSupabaseUrl("logo/Instagram.svg")}
                        alt="instagram"
                        width={24}
                        height={24}
                        className={[
                          "w-[16px] h-[12px]",
                          "min-[744px]:w-[18px] min-[744px]:h-[18px]",
                          "min-[1025px]:w-[24px] min-[1025px]:h-[24px]",
                        ].join(" ")}
                      />
                      <p className="text-[#858585] text-[12px] min-[744px]:text-[16px] min-[1025px]:text-[20px] break-words">
                        {designer.contact.instagram}
                      </p>
                    </div>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* 작품 사진 영역 */}
        <div
          id="작품 사진 영역"
          className={["w-full flex flex-col"].join(" ")}
          style={{ backgroundColor: project.descriptionBackgroundColor || "#ffffff" }}
        >
          {contentItems.map((item) => {
            const backgroundColor = project.descriptionBackgroundColor || "#ffffff";
            
            if (item.type === "poster") {
              return (
                <div
                  key={item.key}
                  className={["w-full flex flex-col"].join(" ")}
                  style={{ backgroundColor }}
                >
                  {item.posterUrl && (
                    <Image
                      src={item.posterUrl}
                      alt={`${project.title} 포스터 ${item.posterIndex + 1}`}
                      width={1920}
                      height={1080}
                      sizes="100vw"
                      className="w-full h-auto object-contain"
                    />
                  )}
                </div>
              );
            } else if (item.type === "youtube") {
              return (
                <div
                  key={item.key}
                  className={["w-full aspect-video px-[40px] py-[22px] flex"].join(" ")}
                  style={{ backgroundColor }}
                >
                  {item.youtubeUrl && (
                    <iframe
                      src={getYoutubeEmbedUrl(item.youtubeUrl)}
                      title={`${project.title} 유튜브 영상 ${item.youtubeIndex + 1}`}
                      className="w-full flex-1"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}
                </div>
              );
            }
            return null;
          })}
        </div>
      </section>
    </div>
  );
}


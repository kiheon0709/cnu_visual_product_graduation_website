"use client";

import Image from "next/image";
import { getProjectWithDesigner } from "@/lib/utils/projects";
import Link from "next/link";

interface ProjectDetailPageProps {
  params: { slug: string };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = params;
  const projectData = getProjectWithDesigner(slug);

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
          "hidden min-[1025px]:block",
          "min-[1025px]:h-[337px]",
          "w-full overflow-hidden bg-background-gray",
        ].join(" ")}
      />

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
            "min-[744px]:flex-col min-[744px]:px-[22px] min-[744px]:gap-[24px]",
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
                "min-[744px]:text-[28px] min-[744px]:leading-[52px]",
                "min-[1025px]:text-[40px] min-[1025px]:leading-[52px]",
              ].join(" ")}
            >
              {project.title}
            </h1>
            {/* 작품 설명 */}
            <p
              className={[
                "font-medium text-[#858585] tracking-[-4%]",
                "text-[12px]",
                "min-[744px]:text-[16px]",
                "min-[1025px]:text-[20px]",
                // 1539px 이하 구간에서 설명 텍스트 박스 고정 너비(1540 시점 기준 폭에 준하는 값)
                "max-[1539px]:w-[960px] max-[1539px]:max-w-full",
              ].join(" ")}
            >
              {project.description}
            </p>
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
            className={[
              "w-full h-fit flex flex-row",
              "gap-[16px]",
              "min-[744px]:gap-[20px]",
              "min-[1540px]:w-fit min-[1540px]:flex-shrink-0 min-[1540px]:gap-[24px]",
            ].join(" ")}
          >
            {/* 디자이너 프로필 이미지*/}
            <div className="w-fit h-fit flex flex-col">
              <Image 
                src={designer.profileImage} 
                alt={designer.nameEn} 
                width={160} 
                height={160}
                className={[
                  "w-[170px] h-auto",
                  "min-[744px]:w-[120px] min-[744px]:h-auto",
                  "min-[1025px]:w-[160px] min-[1025px]:h-auto",
                ].join(" ")}
              />
            </div>
            {/* 디자이너 정보 영역*/}
            <div className={[
              "w-fit h-fit flex flex-col",
              "gap-[27px] py-[10px]",
              "min-[744px]:gap-[16px] min-[744px]:py-0",
              "min-[1025px]:gap-[31px]",
            ].join(" ")}>
              {/* 디자이너 이름과 소개글 영역*/}
              <div
                className={[
                  "w-fit h-fit flex flex-col",
                  "gap-[27px]",
                  "min-[744px]:flex-row min-[744px]:gap-[16px]",
                  "min-[1025px]:flex-col min-[1025px]:gap-[4px]",
                ].join(" ")}
              >
                {/* 디자이너 이름*/}
                <h2
                  className={[
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
                  className={[
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
              <div className={[
                "w-fit h-fit flex flex-col",
                "gap-[10px]",
                "min-[744px]:gap-[8px]",
                "min-[1025px]:gap-[8px]",
                ].join(" ")}>
                {/* 디자이너 이메일 정보 영역*/}
                {designer.contact.email && (
                  <div className={[
                    "w-fit h-fit flex flex-row items-center",
                    "gap-[8px]",
                    "min-[744px]:gap-[14px]",
                    "min-[1025px]:gap-[16px]",
                  ].join(" ")}>
                    <Image 
                      src="/images/logo/Email.svg" 
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
                  <div className={[
                    "w-fit h-fit flex flex-row items-center",
                    "max-w-full",
                    "gap-[8px]",
                    "min-[744px]:gap-[14px]",
                    "min-[1025px]:gap-[16px]",
                  ].join(" ")}>
                    <Image 
                      src="/images/logo/Behance.svg" 
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
                )}
                {/* 디자이너 인스타그램 정보 영역*/}
                {designer.contact.instagram && (
                  <div
                    className={[
                      "w-fit h-fit flex flex-row items-center",
                      "max-w-full",
                      "gap-[8px]",
                    ].join(" ")}
                  >
                    <Image 
                      src="/images/logo/Instagram.svg" 
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
                )}
              </div>
            </div>
          </div>
        </div>
        {/* 작품 사진 영역 */}
        <div
          id="작품 사진 영역"
          className={[
            "w-full flex flex-col",
          ].join(" ")}
        >
          <Image 
              src="/images/projects/gallery/작품설명사진.png"
              alt={project.title} 
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
        </div>
      </section>
    </div>
  );
}


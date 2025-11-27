import { Project } from "@/types";
import { getSupabaseUrl } from "@/lib/utils/supabase";

export const projects: Project[] = [
  {
    id: "project-1",
    slug: "project-1",
    title: "Echo.X",
    titleEn: "Echo.X",
    category: "Capstone",
    projectType: "NULL",
    description:
      "Echo.X는 미지의 디지털 차원에서 탄생한 가상 아티스트로, 시각의 퇴화와 청각의 발달이라는 역진화적 특성을 지닌 존재이다. " +
      "그는 현실 세계의 인간과 교감하기 위해 MR 디바이스를 착용하고 청각을 매개로 감각적 언어를 생성한다. " +
      "관객은 MR 고글과 인터랙티브 컨트롤러를 통해 공연에 참여함으로써 물리적 감각과 디지털 인식이 교차하는 새로운 공연 문화를 경험할 수 있다.\n\n" +
      "본 프로젝트는 디자인 산업 내에서의 AI 활용 가능성과 감각 경험의 확장을 탐구하며 인간과 기계의 관계 재정의를 목표로 한다. " +
      "이는 음악·공연·AI가 융합된 새로운 예술적 형태를 제시하며, 기술이 예술의 표현 영역을 확장시킬 수 있음을 보여준다.",
    keywords: ["#Virtual Artist", "#AI", "#Experience"],
    designerId: "designer-4", //배유진
    images: {
      thumbnail: getSupabaseUrl("project/project-1/thumbnail.png"),
      header: getSupabaseUrl("project/project-1/work_header.png"),
      // 작품 상세 설명 포스터 이미지 배열
      project_detail_poster: [
        getSupabaseUrl("project/project-1/work_detail_1.png"),
        getSupabaseUrl("project/project-1/work_detail_2.png"),
      ],
    },
    // 유튜브 링크 (여러개일 수 있음)
    youtubeUrls: ["https://youtu.be/iD6eA7ShjsA?si=UlZeByGh6WB3YNdz"],

    // 배치 순서
    layoutOrder: ["poster", "youtube", "poster"],
    // 예시: 포스터-유튜브영상-포스터
    // layoutOrder: ["poster", "youtube", "poster"],
    // youtubeUrls: ["https://www.youtube.com/watch?v=example"],
    // 예시: 포스터-포스터-영상
    // layoutOrder: ["poster", "poster", "youtube"],
    // youtubeUrls: ["https://www.youtube.com/watch?v=example"],

    // 작품 설명 영역 배경색 (선택사항)
    descriptionBackgroundColor: "#000000", 
  },
  {
    id: "project-2",
    slug: "project-2",
    title: "TXT Album Redesign",
    titleEn: "TXT Album Redesign",
    category: "Personal",
    projectType: "Visual Design",
    description:
      "TOMORROW X TOGETHER(투모로우바이투게더)의 정규 4집 『The Star Chapter: TOGETHER』는 네가 건넨 힘으로 다시 너에게 닿으려는 여정, 그리고 서로의 이름을 부르며 완성되는 '함께' 의 의미를 담은 앨범이다.\n\n" +
      "본 프로젝트는 이 앨범을 바탕으로 빛의 신호로 이어지는 관계를 시각적으로 재해석한 앨범 리디자인 작업이다. " +
      "흩어진 별의 파편이 다시 모여 하나의 별을 이루는 모습을 통해, 서로의 부름이 닿는 순간과 불완전한 빛들이 완전한 연결로 나아가는 여정을 표현하고자 하였다.",
    keywords: ["#Album Redesign", "#Visual Design", "#Illustration"],
    designerId: "designer-1", //김도이
    images: {
      thumbnail: getSupabaseUrl("project/project-2/thumbnail.jpg"),
      header: getSupabaseUrl("project/project-2/work_header.jpg"),
      project_detail_poster: [
        getSupabaseUrl("project/project-2/work_detail_1.jpg"),
      ],
    },
    layoutOrder: ["poster", "youtube"],
    youtubeUrls: ["https://youtu.be/iD6eA7ShjsA?si=UlZeByGh6WB3YNdz"],
    descriptionBackgroundColor: "#ffffff", 
  },
  {
    id: "project-3",
    slug: "project-3",
    title: "MILDANG",
    titleEn: "MILDANG",
    category: "Capstone",
    projectType: "Brand Design",
    description:
      "빵으로 만든 따뜻한 감성을 전합니다. " +
      "밀당(MILDANG)은 빵의 도시 대전에서 탄생한 감각적 코스메틱 브랜드이다.\n\n" +
      "밀가루, 버터, 반죽 같은 빵의 재료가 가진 부드러움과 따뜻한 질감을 시각적으로 번역해, 일상의 스킨케어 속에 베이커리의 온기를 담았다.\n\n" +
      "굽는 대신 바르고, 향 대신 감각으로 경험하는 브랜드. " +
      "밀당은 대전의 따뜻한 정서를 피부로 느낄 수 있는 작은 여백 같은 존재이다.",
    keywords: ["#Daejeon", " #Cosmetic", "#LocalIdentity"],
    designerId: "designer-1", //김도이
    images: {
      thumbnail: getSupabaseUrl("project/project-3/thumbnail.jpg"),
      header: getSupabaseUrl("project/project-3/work_header.jpg"),
      project_detail_poster: [
        getSupabaseUrl("project/project-3/work_detail_1.jpg"),
      ],
    },
    layoutOrder: ["poster"],
  },
  {
    id: "project-4",
    slug: "project-4",
    title: "Chrysa",
    titleEn: "Chrysa",
    category: "Capstone",
    projectType: "Product Design",
    description:
      "본 프로젝트는 국립대전현충원 묘역에서 반복적으로 발생하는 일회성 조화 문제와 기존 화병 구조의 한계를 개선하기 위한 목적으로 기획된 디자인이다. " +
      "국화 모티브를 적용한 세라믹 오브제 화병을 제안함으로써, 장식 요소를 최소화하고 현충원의 환경에 적합한 간결하고 지속 가능한 추모 방식을 구현하고자 한다.",
    keywords: ["#goods #product #FloralTributeObject"],
    designerId: "designer-6", //이준하
    images: {
      thumbnail: getSupabaseUrl("project/project-4/thumbnail.jpeg"),
      header: getSupabaseUrl("project/project-4/work_header.png"),
      project_detail_poster: [
        getSupabaseUrl("project/project-4/work_detail_1.jpg"),
      ],
    },
    layoutOrder: ["poster", "youtube"],
    youtubeUrls: ["https://youtu.be/iD6eA7ShjsA?si=UlZeByGh6WB3YNdz"],
    descriptionBackgroundColor: "#ffffff", 
  },
  {
    id: "project-5",
    slug: "project-5",
    title: "TBT",
    titleEn: "TBT",
    category: "Personal",
    projectType: "Brand & Identity Design",
    description:
      "TBT는 유러피안 헤리티지의 구조적 미학과 시각 언어를 기반으로 한 반려동물 동반 호스피탈리티 브랜드입니다.\n\n" +
      "사람과 반려동물이 함께 머무는 순간을 단순한 숙박이 아닌 공유되는 경험으로 확장하며, 공간 안에서의 신뢰(Trust), 유대(Bond), 시간(Time)의 가치를 디자인적으로 표현한 브랜드입니다.",
    keywords: ["#hospitality #brand #pet"],
    designerId: "designer-6", //이준하
    images: {
      thumbnail: getSupabaseUrl("project/project-5/thumbnail.jpg"),
      header: getSupabaseUrl("project/project-5/work_header.png"),
      project_detail_poster: [
        getSupabaseUrl("project/project-5/work_detail_1.jpg"),
        getSupabaseUrl("project/project-5/work_detail_2.jpg"),
      ],
    },
    layoutOrder: ["youtube", "poster","poster"],
    youtubeUrls: ["https://youtu.be/iD6eA7ShjsA?si=UlZeByGh6WB3YNdz"],
    descriptionBackgroundColor: "#ffffff", 
  },
];
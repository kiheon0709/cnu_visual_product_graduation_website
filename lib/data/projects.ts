import { Project } from "@/types";
import { getSupabaseUrl } from "@/lib/utils/supabase";

export const projects: Project[] = [
  {
    id: "project-1",
    slug: "project-1",
    title: "Echo.X (에코엑스)",
    titleEn: "Echo.X",
    category: "Capstone",
    description: "Echo.X는 미지의 디지털 차원에서 탄생한 가상 아티스트로, 시각의 퇴화와 청각의 발달이라는 역진화적 특성을 지닌 존재이다. 그는 현실 세계의 인간과 교감하기 위해 MR 디바이스를 착용하고 청각을 매개로 감각적 언어를 생성한다. 관객은 MR 고글과 인터랙티브 컨트롤러를 통해 공연에 참여함으로써 물리적 감각과 디지털 인식이 교차하는 새로운 공연 문화를 경험할 수 있다. 본 프로젝트는 디자인 산업 내에서의 AI 활용 가능성과 감각 경험의 확장을 탐구하며 인간과 기계의 관계 재정의를 목표로 한다. 이는 음악·공연·AI가 융합된 새로운 예술적 형태를 제시하며, 기술이 예술의 표현 영역을 확장시킬 수 있음을 보여준다.",
    keywords: ["#Virtual Artist", "#AI", "#Experience"],
    designerId: "designer-4", //배유진
    images: {
      thumbnail: getSupabaseUrl("project/project-1/thumbnail.png"),
      header: getSupabaseUrl("project/project-1/work_header.png"),
      gallery: getSupabaseUrl("project/project-1/work_detail_1.png"),
    },
  },
];


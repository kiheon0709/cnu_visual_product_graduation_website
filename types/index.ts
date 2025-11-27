export interface Project {
  id: string;
  slug: string;
  title: string;
  titleEn?: string;
  category: "Capstone" | "Suhyup" | "Personal";
  description: string;
  keywords: string[];
  designerId: string;
  images: {
    thumbnail: string;
    header?: string;
    project_detail_poster: string[]; // 작품 상세 설명 포스터 이미지 배열
  };
  // 유튜브 링크 배열 (여러개일 수 있음)
  youtubeUrls?: string[];
  // 배치 순서 (예: ["poster", "youtube", "poster"])
  layoutOrder: ("poster" | "youtube")[];
  // 작품 설명 영역 배경색 (예: "#ffffff", "#000000")
  descriptionBackgroundColor?: string;
}

export interface Designer {
  id: string;
  slug: string;
  nameEn: string;
  nameKo?: string;
  role: string;
  profileImage: string;
  headerImageUrl?: string;
  introduction: string;
  contact: {
    email: string | null;
    behance: string | null;
    instagram: string | null;
  };
  projectIds: string[];
}

export interface Archive {
  id: string;
  year: number;
  title: string;
  posterImage: string;
  link?: string;
}


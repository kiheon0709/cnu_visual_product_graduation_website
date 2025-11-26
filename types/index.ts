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
    gallery: string;
  };
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


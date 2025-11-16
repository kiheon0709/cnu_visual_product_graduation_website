export interface Project {
  id: string;
  slug: string;
  title: string;
  titleEn?: string;
  category: "Capstone" | "Suhyup" | "Goods";
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
  introduction: string;
  contact: {
    email: string;
    behance?: string;
    instagram?: string;
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


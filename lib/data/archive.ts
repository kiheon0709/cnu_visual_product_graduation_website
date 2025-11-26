import { Archive } from "@/types";
import { getSupabaseUrl } from "@/lib/utils/supabase";

export const archives: Archive[] = [
  {
    id: "archive-2023",
    year: 2023,
    title: "2023 졸업전시 '최소단위:1px'",
    posterImage: getSupabaseUrl("archive/Archive2023.png"),
    link: "https://www.instagram.com/2023_cnud/?hl=de",
  },
  {
    id: "archive-2024",
    year: 2024,
    title: "2024 졸업전시 'ZZZ'",
    posterImage: getSupabaseUrl("archive/Archive2024.png"),
    link: "https://www.instagram.com/2024_cnud/",
  },
];


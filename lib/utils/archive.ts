import { Archive } from "@/types";
import { archives } from "@/lib/data/archive";

/**
 * 모든 아카이브를 가져옵니다.
 */
export function getAllArchives(): Archive[] {
  return archives;
}

/**
 * ID로 아카이브를 찾습니다.
 */
export function getArchiveById(id: string): Archive | undefined {
  return archives.find((archive) => archive.id === id);
}

/**
 * 연도로 아카이브를 찾습니다.
 */
export function getArchiveByYear(year: number): Archive | undefined {
  return archives.find((archive) => archive.year === year);
}

/**
 * 연도순으로 정렬된 아카이브를 가져옵니다.
 * @param order 'asc' | 'desc' - 오름차순 또는 내림차순 (기본값: 'desc')
 */
export function getArchivesSortedByYear(
  order: "asc" | "desc" = "desc"
): Archive[] {
  const sorted = [...archives].sort((a, b) => a.year - b.year);
  return order === "desc" ? sorted.reverse() : sorted;
}


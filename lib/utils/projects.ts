import { Project } from "@/types";
import { projects } from "@/lib/data/projects";
import { getDesignerById } from "./designers";

/**
 * 모든 프로젝트를 가져옵니다.
 */
export function getAllProjects(): Project[] {
  return projects;
}

/**
 * slug로 프로젝트를 찾습니다.
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/**
 * 카테고리로 프로젝트를 필터링합니다.
 */
export function getProjectsByCategory(
  category: "all" | "Capstone" | "Suhyup" | "Goods"
): Project[] {
  if (category === "all") {
    return projects;
  }
  return projects.filter((project) => project.category === category);
}

/**
 * 디자이너 ID로 프로젝트를 찾습니다.
 */
export function getProjectsByDesigner(designerId: string): Project[] {
  return projects.filter((project) => project.designerId === designerId);
}

/**
 * 프로젝트와 디자이너 정보를 함께 가져옵니다.
 */
export function getProjectWithDesigner(slug: string) {
  const project = getProjectBySlug(slug);
  if (!project) return undefined;

  const designer = getDesignerById(project.designerId);
  return {
    ...project,
    designer,
  };
}

/**
 * 카테고리로 필터링하고 디자이너 정보도 함께 가져옵니다.
 */
export function getProjectsByCategoryWithDesigners(
  category: "all" | "Capstone" | "Suhyup" | "Goods"
) {
  const filteredProjects = getProjectsByCategory(category);
  return filteredProjects.map((project) => ({
    ...project,
    designer: getDesignerById(project.designerId),
  }));
}


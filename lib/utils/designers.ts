import { Designer } from "@/types";
import { designers } from "@/lib/data/designers";
import { getProjectBySlug, getProjectsByDesigner, getAllProjects } from "./projects";

/**
 * 모든 디자이너를 가져옵니다.
 */
export function getAllDesigners(): Designer[] {
  return designers;
}

/**
 * ID로 디자이너를 찾습니다.
 */
export function getDesignerById(id: string): Designer | undefined {
  return designers.find((designer) => designer.id === id);
}

/**
 * slug로 디자이너를 찾습니다.
 */
export function getDesignerBySlug(slug: string): Designer | undefined {
  return designers.find((designer) => designer.slug === slug);
}

/**
 * 프로젝트 ID로 디자이너를 찾습니다.
 * 프로젝트의 designerId를 사용하여 더 정확하게 찾습니다.
 */
export function getDesignerByProjectId(projectId: string): Designer | undefined {
  // 프로젝트를 먼저 찾고, 그 designerId로 디자이너를 찾습니다
  const project = getProjectBySlug(projectId);
  if (!project) {
    // slug가 아닌 id로도 시도
    const projectById = getAllProjects().find((p) => p.id === projectId);
    if (!projectById) return undefined;
    return getDesignerById(projectById.designerId);
  }
  return getDesignerById(project.designerId);
}

/**
 * 디자이너와 프로젝트들을 함께 가져옵니다.
 */
export function getDesignerWithProjects(slug: string) {
  const designer = getDesignerBySlug(slug);
  if (!designer) return undefined;

  const projects = getProjectsByDesigner(designer.id);
  return {
    ...designer,
    projects,
  };
}


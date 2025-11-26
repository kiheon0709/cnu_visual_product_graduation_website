/**
 * Supabase Storage 경로를 전체 URL로 변환하는 헬퍼 함수
 * @param path - Supabase Storage 경로 (예: 'images/archive/Archive2023.png')
 *               또는 이미 전체 URL인 경우 그대로 반환
 * @returns 전체 Supabase Storage URL
 */
export function getSupabaseUrl(path: string): string {
  // 이미 전체 URL인 경우 그대로 반환
  if (path.startsWith('https://')) {
    return path;
  }
  
  // 환경 변수에서 base URL 가져오기
  // .env.local에 추가: NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
  // .env.local에 추가: NEXT_PUBLIC_SUPABASE_BUCKET=your-bucket-name (기본값: 'images')
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const bucket = process.env.NEXT_PUBLIC_SUPABASE_BUCKET || 'Images';
  
  if (!supabaseUrl) {
    console.warn('NEXT_PUBLIC_SUPABASE_URL이 설정되지 않았습니다.');
    return path;
  }
  
  // 경로 앞의 슬래시 제거 (중복 방지)
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Supabase Storage URL 형식: https://{project-ref}.supabase.co/storage/v1/object/public/{bucket}/{path}
  return `${supabaseUrl}/storage/v1/object/public/${bucket}/${cleanPath}`;
  // https://gzpaimnagpakgeehyabz.supabase.co/storage/v1/object/public/Images/archive/Archive2024.png
}


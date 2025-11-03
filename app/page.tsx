import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full bg-background-gray">
      {/* 메인 포스터 이미지 영역 (비율 유지) */}
      <div className="relative w-full aspect-[1520/1081]">
        {/* 임시 플레이스홀더 - 실제 이미지로 교체 예정 */}
        <div className="absolute inset-0 flex items-center justify-center bg-background-gray">
          {/* 실제 이미지 사용 시 아래 주석 해제 */}
          {/* 
          <Image
            src="/images/main-poster.jpg"
            alt="졸업전시 메인 포스터"
            fill
            className="object-cover"
            priority
          />
          */}
          <div className="text-center">
            <p className="text-primary text-4xl font-semibold mb-2">
              메인 포스터 이미지 영역
            </p>
            <p className="text-xl text-secondary">1520px × 1081px</p>
            <p className="text-sm text-inactive mt-4">
              실제 이미지를 /public/images/main-poster.jpg 에 추가하세요
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full h-full min-h-screen bg-background-gray overflow-hidden">
      {/* 메인 포스터 이미지 영역 - 화면을 꽉 채우고 필요시 화면 밖까지 확장 */}
      <div className="relative w-full h-full min-h-screen">
        <Image
          src="/images/main/메인포스터.png"
          alt="졸업전시 메인 포스터"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
    </div>
  );
}


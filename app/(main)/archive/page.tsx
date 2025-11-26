import ArchiveCard from "@/components/archive/ArchiveCard";
import { getAllArchives } from "@/lib/utils/archive";
import Image from "next/image";
import { getSupabaseUrl } from "@/lib/utils/supabase";

export default function ArchivePage() {
  const archives = getAllArchives();

  return (
    <div id="archive-page" className="w-full min-h-screen flex flex-col">
      <section
        id="아카이브 페이지 헤더 포스터"
        className={[
          "hidden min-[744px]:block",
          "min-[744px]:h-[260px] min-[1025px]:h-[337px]",
          "w-full overflow-hidden bg-background-gray",
          "relative",
        ].join(" ")}
      >
        <Image
          src={getSupabaseUrl("archive/archive_page_header.png")}
          alt="Archive Header"
          fill
          className="object-cover"
          priority
        />
      </section>
      <section
        id="아카이브 페이지 본문"
        className={[
          "w-full min-h-full flex flex-col",
          "gap-[24px] px-[20px] py-[61px]",
          "min-[744px]:gap-[22px] min-[744px]:px-[22px] min-[744px]:pt-[57px] min-[744px]:pb-[80px]",
          "min-[1025px]:flex-row min-[1025px]:gap-[12px] min-[1025px]:px-[22px] min-[1025px]:pt-[124px] min-[1025px]:pb-[200px]",
        ].join(" ")}
      >
        {archives.map((archive, index) => (
          <ArchiveCard key={archive.id} archive={archive} priority={index === 0} />
        ))}
      </section>
    </div>
  );
}



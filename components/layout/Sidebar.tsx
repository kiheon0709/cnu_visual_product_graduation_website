"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Project", href: "/project" },
    { name: "Designer", href: "/designer" },
    { name: "Archive", href: "/archive" },
  ];

  const isActive = (href: string) => {
    if (href === "/project" || href === "/designer" || href === "/archive") {
      return pathname === href || pathname.startsWith(`${href}/`);
    }
    return pathname === href;
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-[var(--sidebar-w)] bg-white border-r border-black flex flex-col px-[calc(var(--sidebar-w)*0.115)] py-[calc(var(--sidebar-w)*0.1425)]">
      {/* 상단 고정: 로고 + 문구 컨테이너 (클릭 시 홈으로 이동, 새로고침) */}
      <Link href="/" reloadDocument aria-label="홈으로 이동" className="block mb-[50px]">
        <div className="flex items-start cursor-pointer select-none">
          {/* 엠블럼 로고 48x48 */}
          <Image
            src="/images/logo/cnu-logo.png"
            alt="충남대학교 로고"
            width={48}
            height={48}
            className="object-contain flex-shrink-0 w-[min(calc(var(--sidebar-w)*0.12),48px)] h-[min(calc(var(--sidebar-w)*0.12),48px)]"
            priority
          />
          {/* 텍스트 영역 */}
          <div className="ml-[calc(var(--sidebar-w)*0.035)] w-full max-w-[238px] flex flex-col">
            <h1 className="text-left text-[min(calc(var(--sidebar-w)*0.05),20px)] font-semibold leading-[min(calc(var(--sidebar-w)*0.065),26px)] tracking-[-0.8px] text-primary">
              충남대학교 디자인 창의학과
              <br />
              시각제품디자인전공 졸업전시
            </h1>
            <p className="mt-[calc(var(--sidebar-w)*0.01)] text-left text-[min(calc(var(--sidebar-w)*0.03),12px)] font-semibold leading-normal tracking-[-0.48px] text-primary">
              CNUD Graduation Exhibition Archive
            </p>
          </div>
        </div>
      </Link>

      {/* 하단 고정 그룹(컨테이너1): 네비게이션(컨테이너3) + 소셜(컨테이너2) */}
      <div className="mt-auto w-full">
        {/* 컨테이너3: 네비게이션 메뉴 */}
        <nav className="w-full max-w-[min(calc(var(--sidebar-w)*0.5725),229px)]">
          <ul className="space-y-[min(calc(var(--sidebar-w)*0.1275),51px)]">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`text-[min(calc(var(--sidebar-w)*0.135),54px)] leading-[min(calc(var(--sidebar-w)*0.1),40px)] tracking-[-2.16px] transition-colors ${
                      active ? "font-semibold text-primary" : "font-normal text-[#c0c0c0]"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* 컨테이너2: 소셜 아이콘 */}
        <div className="mt-[min(calc(var(--sidebar-w)*0.1825),73px)] w-full h-[min(calc(var(--sidebar-w)*0.155),62px)]">
          <div className="flex items-center gap-[min(calc(var(--sidebar-w)*0.0275),11px)]">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/cnud_project/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[min(calc(var(--sidebar-w)*0.155),62px)] h-[min(calc(var(--sidebar-w)*0.155),62px)] border border-black rounded-full flex items-center justify-center hover:bg-background-gray transition-colors"
            aria-label="Instagram"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[min(calc(var(--sidebar-w)*0.08),32px)] h-[min(calc(var(--sidebar-w)*0.08),32px)]"
            >
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                fill="currentColor"
              />
            </svg>
          </a>

          {/* 충남대학교 */}
          <a
            href="https://design.cnu.ac.kr/design/community/portfolio.do"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[min(calc(var(--sidebar-w)*0.155),62px)] h-[min(calc(var(--sidebar-w)*0.155),62px)] border border-black rounded-full flex items-center justify-center hover:bg-background-gray transition-colors"
            aria-label="충남대학교 디자인창의학과"
          >
            <Image
              src="/images/logo/cnu-logo.png"
              alt="충남대학교 로고"
              width={36}
              height={36}
              className="object-contain w-[min(calc(var(--sidebar-w)*0.09),36px)] h-[min(calc(var(--sidebar-w)*0.09),36px)]"
            />
          </a>
          </div>
        </div>
      </div>
    </aside>
  );
}


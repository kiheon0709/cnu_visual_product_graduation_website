"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

type Breakpoint = "mobile" | "tablet-home" | "tablet-detail" | "pc";

interface MetricsConfig {
  baseViewport: number;
  sidebarWidth: number;
  paddingX: number;
  paddingY: number;
  logoSize: number;
  logoTextGap: number;
  titleFont: number;
  titleLineHeight: number;
  menuFont: number;
  menuLineHeight: number;
  menuGap: number;
  menuSocialGap: number;
  socialSize: number;
  socialGap: number;
  contentGap: number;
}

interface ComputedMetrics {
  breakpoint: Breakpoint;
  sidebarWidth: number;
  paddingX: number;
  paddingY: number;
  logoSize: number;
  logoTextGap: number;
  titleFont: number;
  titleLineHeight: number;
  menuFont: number;
  menuLineHeight: number;
  menuGap: number;
  menuSocialGap: number;
  socialSize: number;
  socialGap: number;
  contentGap: number;
}

const TABLET_DETAIL_PREFIXES = ["/project", "/designer", "/archive"];
const TABLET_FROZEN_VIEWPORT = 1025;

const BASE_METRICS: Record<Breakpoint, MetricsConfig> = {
  pc: {
    baseViewport: 1920,
    sidebarWidth: 400,
    paddingX: 46,
    paddingY: 57,
    logoSize: 48,
    logoTextGap: 14,
    titleFont: 20,
    titleLineHeight: 26,
    menuFont: 64,
    menuLineHeight: 40,
    menuGap: 51,
    menuSocialGap: 73,
    socialSize: 62,
    socialGap: 11,
    contentGap: 491,
  },
  "tablet-home": {
    baseViewport: 834,
    sidebarWidth: 300,
    paddingX: 28,
    paddingY: 57,
    logoSize: 38,
    logoTextGap: 12,
    titleFont: 16,
    titleLineHeight: 20.8,
    menuFont: 46,
    menuLineHeight: 40,
    menuGap: 32,
    menuSocialGap: 73,
    socialSize: 50,
    socialGap: 11,
    contentGap: 50,
  },
  "tablet-detail": {
    baseViewport: 834,
    sidebarWidth: 248,
    paddingX: 28,
    paddingY: 57,
    logoSize: 36,
    logoTextGap: 8,
    titleFont: 12,
    titleLineHeight: 18,
    menuFont: 46,
    menuLineHeight: 40,
    menuGap: 32,
    menuSocialGap: 73,
    socialSize: 50,
    socialGap: 11,
    contentGap: 50,
  },
  "mobile": {
    baseViewport: 393,
    sidebarWidth: 393,
    paddingX: 20,
    paddingY: 8,
    logoSize: 25,
    logoTextGap: 6,
    titleFont: 12,
    titleLineHeight: 16,
    menuFont: 16,
    menuLineHeight: 18.1,
    menuGap: 20,
    menuSocialGap: 0,
    socialSize: 0,
    socialGap: 0,
    contentGap: 0,
  },
};

const INSTAGRAM_ICON_RATIO = 32 / BASE_METRICS.pc.socialSize;
const UNIVERSITY_ICON_RATIO = 36 / BASE_METRICS.pc.socialSize;

const getBreakpoint = (width: number, pathname: string): Breakpoint => {
  if (width <= 743) {
    return "mobile";
  }

  if (width <= 1024) {
    const isDetail = TABLET_DETAIL_PREFIXES.some(
      (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
    );
    return isDetail ? "tablet-detail" : "tablet-home";
  }

  return "pc";
};

const computeMetrics = (width: number, pathname: string): ComputedMetrics => {
  const breakpoint = getBreakpoint(width, pathname);
  const usePcFrozenMetrics =
    breakpoint === "tablet-home" || breakpoint === "tablet-detail";

  const config = usePcFrozenMetrics ? BASE_METRICS.pc : BASE_METRICS[breakpoint];
  const scale = usePcFrozenMetrics
    ? TABLET_FROZEN_VIEWPORT / BASE_METRICS.pc.baseViewport
    : width / config.baseViewport;
  const scaleValue = (value: number) => Number((value * scale).toFixed(3));

  return {
    breakpoint,
    sidebarWidth: scaleValue(config.sidebarWidth),
    paddingX: Math.max(scaleValue(config.paddingX), 0),
    paddingY: Math.max(scaleValue(config.paddingY), 0),
    logoSize: scaleValue(config.logoSize),
    logoTextGap: scaleValue(config.logoTextGap),
    titleFont: scaleValue(config.titleFont),
    titleLineHeight: scaleValue(config.titleLineHeight),
    menuFont: scaleValue(config.menuFont),
    menuLineHeight: scaleValue(config.menuLineHeight),
    menuGap: scaleValue(config.menuGap),
    menuSocialGap: scaleValue(config.menuSocialGap),
    socialSize: scaleValue(config.socialSize),
    socialGap: scaleValue(config.socialGap),
    contentGap: Math.max(scaleValue(config.contentGap), 50),
  };
};

export default function Sidebar() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollYRef = useRef(0);
  const [metrics, setMetrics] = useState<ComputedMetrics | null>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setMetrics(computeMetrics(window.innerWidth, pathname));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [pathname]);

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

  // 모바일 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const lastScrollY = lastScrollYRef.current;

      // 모바일에서만 스크롤 감지 (743px 이하)
      if (window.innerWidth <= 743) {
        setIsVisible((prev) => {
          if (currentScrollY > lastScrollY && currentScrollY > 50) {
            return false;
          }
          if (currentScrollY < lastScrollY || currentScrollY <= 50) {
            return true;
          }
          return prev;
        });
      } else {
        // 웹 버전에서는 항상 표시
        setIsVisible(true);
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!metrics) return;

    document.documentElement.style.setProperty(
      "--sidebar-w",
      `${metrics.breakpoint === "mobile" ? 0 : metrics.sidebarWidth}px`
    );
  }, [metrics]);

  if (!metrics) {
    return (
      <aside
        className="fixed left-0 top-0 bg-white"
        aria-hidden
        style={{ visibility: "hidden" }}
      />
    );
  }

  const isMobile = metrics.breakpoint === "mobile";
  const formattedValue = (value: number) => `${value}px`;

  return (
    <aside className={`fixed left-0 top-0 bg-white transition-transform duration-300 ease-in-out
      max-[743px]:w-full max-[743px]:h-[min(calc(116px*100vw/393px),116px)] max-[743px]:border-0 max-[743px]:z-50 max-[743px]:flex max-[743px]:flex-col max-[743px]:justify-between max-[743px]:px-0 max-[743px]:pt-0 max-[743px]:pb-[min(calc(8px*100vw/393px),8px)]
      ${isVisible ? 'max-[743px]:translate-y-0 max-[743px]:shadow-[0_4px_8px_0_rgba(0,0,0,0.15)]' : 'max-[743px]:-translate-y-full max-[743px]:shadow-none'}
      min-[744px]:h-screen min-[744px]:border-0 min-[744px]:shadow-[0_-3px_8px_0_rgba(0,0,0,0.25)] min-[744px]:z-50 min-[744px]:flex min-[744px]:flex-col min-[744px]:justify-between`}
      style={
        isMobile
          ? undefined
          : {
              width: metrics.sidebarWidth,
              paddingLeft: metrics.paddingX,
              paddingRight: metrics.paddingX,
              paddingTop: metrics.paddingY,
              paddingBottom: metrics.paddingY,
            }
      }
    >
      <div className="max-[743px]:flex max-[743px]:flex-row max-[743px]:items-center max-[743px]:justify-center max-[743px]:w-full max-[743px]:flex-1 min-[744px]:hidden">
        {/* 모바일: 상단 컨테이너 - 로고 + 문구 */}
        <Link href="/" aria-label="홈으로 이동" className="max-[743px]:flex max-[743px]:items-center max-[743px]:justify-center max-[743px]:w-full cursor-pointer select-none">
          <Image
            src="/images/logo/cnu-logo.png"
            alt="충남대학교 로고"
            width={48}
            height={48}
            className="object-contain flex-shrink-0 w-[calc(25px*100vw/393px)] h-[calc(25px*100vw/393px)]"
            priority
          />
          {/* 엠블럼 로고 */}
          <div className="ml-[calc(6px*100vw/393px)] flex flex-col">
            {/* 텍스트 영역 */}
            <div className="flex flex-col">
              <h1 className="text-left font-semibold text-primary text-[min(calc(12px*100vw/393px),12px)] leading-[16px] tracking-[-4%]">
                충남대학교 디자인창의학과 시각제품디자인 졸업전시
              </h1>
            </div>
          </div>
        </Link>
      </div>

      <div className="max-[743px]:flex max-[743px]:flex-row max-[743px]:items-center max-[743px]:justify-center max-[743px]:w-full max-[743px]:px-[min(calc(20px*100vw/393px),20px)] max-[743px]:mt-auto min-[744px]:hidden">
        {/* 모바일: 하단 컨테이너 - 네비게이션 메뉴 */}
        <nav className="w-fit">
          <ul className="flex flex-row items-center gap-[20px]">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.name} className="max-[743px]:w-[calc(96px*100vw/393px)] max-[743px]:py-[4.52px] min-[744px]:w-auto">
                  <Link
                    href={item.href}
                    className={`transition-colors text-[min(calc(16px*100vw/393px),16px)] leading-[18.1px] tracking-[-4%] flex items-center justify-center max-[743px]:w-full ${
                      active ? "font-semibold text-primary" : "font-medium text-[#c0c0c0]"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <Link
        href="/"
        aria-label="홈으로 이동"
        className="hidden min-[744px]:block"
      >
        {/* 웹 버전: 상단 고정 - 로고 + 문구 컨테이너 */}
        <div className="flex items-start cursor-pointer select-none">
          <Image
            src="/images/logo/cnu-logo.png"
            alt="충남대학교 로고"
            width={48}
            height={48}
            className="object-contain flex-shrink-0"
            style={
              isMobile
                ? undefined
                : {
                    width: metrics.logoSize,
                    height: metrics.logoSize,
                  }
            }
            priority
          />
          {/* 엠블럼 로고 */}
          <div
            className="w-full flex flex-col"
            style={
              isMobile
                ? undefined
                : {
                    marginLeft: metrics.logoTextGap,
                    maxWidth: "100%",
                  }
            }
          >
            {/* 텍스트 영역 */}
            <div className="flex flex-col">
              <h1
                className="text-left font-semibold text-primary tracking-[-4%]"
                style={
                  isMobile
                    ? undefined
                    : {
                        fontSize: metrics.titleFont,
                        lineHeight: formattedValue(metrics.titleLineHeight),
                      }
                }
              >
                충남대학교 디자인창의학과<br />시각제품디자인 졸업전시
              </h1>
            </div>
          </div>
        </div>
      </Link>

      <div
        className="hidden min-[744px]:block flex-1"
        aria-hidden
        style={{ minHeight: 50 }}
      />

      <div className="hidden min-[744px]:flex min-[744px]:flex-col min-[744px]:justify-end min-[744px]:w-full">
        {/* 웹 버전: 하단 고정 그룹 - 네비게이션 + 소셜 */}
        <nav className="w-full">
          {/* 컨테이너3: 네비게이션 메뉴 */}
          <ul
            className="flex flex-col"
            style={
              isMobile
                ? undefined
                : {
                    gap: metrics.menuGap,
                  }
            }
          >
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`transition-colors tracking-[-4%] ${active ? "font-semibold text-primary" : "font-normal text-[#c0c0c0]"}`}
                    style={
                      isMobile
                        ? undefined
                        : {
                            fontSize: metrics.menuFont,
                            lineHeight: formattedValue(metrics.menuLineHeight),
                          }
                    }
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div
          className="max-[743px]:hidden min-[744px]:flex min-[744px]:items-center"
          style={
            isMobile
              ? undefined
              : {
                  marginTop: metrics.menuSocialGap,
                  height: metrics.socialSize,
                }
          }
        >
          {/* 컨테이너2: 소셜 아이콘 - 모바일에서 숨김 */}
          <div
            className="flex items-center"
            style={
              isMobile
                ? undefined
                : {
                    gap: metrics.socialGap,
                  }
            }
          >
          <a
            href="https://www.instagram.com/cnud_project/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black rounded-full flex items-center justify-center hover:bg-background-gray transition-colors"
            style={
              isMobile
                ? undefined
                : {
                    width: metrics.socialSize,
                    height: metrics.socialSize,
                  }
            }
            aria-label="Instagram"
          >
            {/* Instagram */}
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={
                isMobile
                  ? undefined
                  : {
                      width: metrics.socialSize * INSTAGRAM_ICON_RATIO,
                      height: metrics.socialSize * INSTAGRAM_ICON_RATIO,
                    }
              }
            >
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                fill="currentColor"
              />
            </svg>
          </a>

          <a
            href="https://design.cnu.ac.kr/design/community/portfolio.do"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black rounded-full flex items-center justify-center hover:bg-background-gray transition-colors"
            style={
              isMobile
                ? undefined
                : {
                    width: metrics.socialSize,
                    height: metrics.socialSize,
                  }
            }
            aria-label="충남대학교 디자인창의학과"
          >
            {/* 충남대학교 */}
            <Image
              src="/images/logo/cnu-logo.png"
              alt="충남대학교 로고"
              width={36}
              height={36}
              className="object-contain"
              style={
                isMobile
                  ? undefined
                  : {
                      width: metrics.socialSize * UNIVERSITY_ICON_RATIO,
                      height: metrics.socialSize * UNIVERSITY_ICON_RATIO,
                    }
              }
            />
          </a>
          </div>
        </div>
      </div>
    </aside>
  );
}

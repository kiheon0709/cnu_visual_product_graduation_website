"use client";

import Image from "next/image";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { getSupabaseUrl } from "@/lib/utils/supabase";

type Breakpoint = "pc" | "tablet" | "mobile";

const FOOTER_CONFIG: Record<
  Breakpoint,
  {
    baseWidth: number;
    paddingX: number;
    paddingY: number;
    layout: "row" | "column";
    justifyContent: "space-between" | "flex-start";
    alignItems: "center" | "flex-start";
    contentGap: number;
    brandBlockWidth: number;
    brandGap: number;
    logoSize: number;
    logoGap: number;
    brandTextMaxWidth: number;
    brandFontSize: number;
    copyrightFontSize: number;
    contactFontSize: number;
    contactColor: string;
    contactAlign: "left" | "right";
    contactMaxWidth: number;
    contactInBrand: boolean;
  }
> = {
  pc: {
    baseWidth: 1440,
    paddingX: 40,
    paddingY: 31,
    layout: "row",
    justifyContent: "space-between",
    alignItems: "center",
    contentGap: 0,
    brandBlockWidth: 333,
    brandGap: 28,
    logoSize: 48,
    logoGap: 12,
    brandTextMaxWidth: 231,
    brandFontSize: 16,
    copyrightFontSize: 16,
    contactFontSize: 16,
    contactColor: "#939393",
    contactAlign: "right",
    contactMaxWidth: 318,
    contactInBrand: false,
  },
  tablet: {
    baseWidth: 516,
    paddingX: 36,
    paddingY: 28,
    layout: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    contentGap: 20,
    brandBlockWidth: 333,
    brandGap: 16,
    logoSize: 38,
    logoGap: 12,
    brandTextMaxWidth: 202,
    brandFontSize: 14,
    copyrightFontSize: 14,
    contactFontSize: 14,
    contactColor: "#939393",
    contactAlign: "left",
    contactMaxWidth: 238,
    contactInBrand: false,
  },
  mobile: {
    baseWidth: 353,
    paddingX: 20,
    paddingY: 31,
    layout: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    contentGap: 0,
    brandBlockWidth: 353,
    brandGap: 12,
    logoSize: 32,
    logoGap: 12,
    brandTextMaxWidth: 173,
    brandFontSize: 12,
    copyrightFontSize: 12,
    contactFontSize: 10,
    contactColor: "#000000",
    contactAlign: "left",
    contactMaxWidth: 199,
    contactInBrand: true,
  },
};

const LETTER_SPACING = "-0.04em";
const CONTACT_TEXT =
  "TEL : 042-821-6981\nEMAIL : shr712@cnu.ac.kr\n(34134) 대전광역시 유성구 대학로 99 충남대학교";
const BRAND_TEXT =
  "chungnam national unversity\ncollege of fine arts & music";

export default function Footer() {
  const [viewportWidth, setViewportWidth] = useState<number>(
    FOOTER_CONFIG.pc.baseWidth,
  );
  const [contentWidth, setContentWidth] = useState<number>(
    FOOTER_CONFIG.pc.baseWidth,
  );
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setViewportWidth(window.innerWidth);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const breakpoint: Breakpoint = useMemo(() => {
    if (viewportWidth <= 743) return "mobile";
    if (viewportWidth <= 1024) return "tablet";
    return "pc";
  }, [viewportWidth]);

  useEffect(() => {
    const updateContentWidth = () => {
      if (contentRef.current) {
        setContentWidth(contentRef.current.clientWidth);
      } else if (typeof window !== "undefined") {
        setContentWidth(window.innerWidth);
      }
    };

    updateContentWidth();

    const observer =
      contentRef.current &&
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver((entries) => {
            for (const entry of entries) {
              setContentWidth(entry.contentRect.width);
            }
          })
        : null;

    if (observer && contentRef.current) {
      observer.observe(contentRef.current);
    }

    window.addEventListener("resize", updateContentWidth, { passive: true });

    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", updateContentWidth);
    };
  }, [breakpoint]);

  const config = FOOTER_CONFIG[breakpoint];
  const safeContentWidth = Math.max(contentWidth, 1);
  const scale = safeContentWidth / config.baseWidth;
  const scaled = (value: number) =>
    Math.round(value * scale * 1000) / 1000;

  const limitedScaled = (value: number) =>
    Math.min(Math.max(scaled(value), 0), safeContentWidth);

  const logoSize = Math.max(1, Math.round(config.logoSize * scale));

  const footerStyle: CSSProperties = {
    backgroundColor: "#d9d9d9",
    width: "100%",
    padding: `${scaled(config.paddingY)}px ${scaled(config.paddingX)}px`,
    boxSizing: "border-box",
  };

  const contentStyle: CSSProperties = {
    width: "100%",
    maxWidth: "100%",
    margin: 0,
    display: "flex",
    flexDirection: config.layout,
    justifyContent: config.justifyContent,
    alignItems: config.alignItems,
    gap: `${scaled(config.contentGap)}px`,
  };

  const brandBlockStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: `${scaled(config.brandGap)}px`,
    width:
      breakpoint === "mobile" ? "100%" : `${limitedScaled(config.brandBlockWidth)}px`,
    maxWidth:
      breakpoint === "mobile"
        ? "100%"
        : `${limitedScaled(config.brandBlockWidth)}px`,
  };

  const logoRowStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: `${scaled(config.logoGap)}px`,
    width: "100%",
  };

  const brandTitleStyle: CSSProperties = {
    fontSize: `${scaled(config.brandFontSize)}px`,
    fontWeight: 600,
    color: "#000000",
    whiteSpace: "pre-line",
    maxWidth:
      breakpoint === "mobile"
        ? "100%"
        : `${limitedScaled(config.brandTextMaxWidth)}px`,
    letterSpacing: LETTER_SPACING,
    lineHeight: "normal",
  };

  const copyrightStyle: CSSProperties = {
    fontSize: `${scaled(config.copyrightFontSize)}px`,
    fontWeight: 400,
    color: "#000000",
    letterSpacing: LETTER_SPACING,
    lineHeight: "normal",
  };

  const contactStyle: CSSProperties = {
    fontSize: `${scaled(config.contactFontSize)}px`,
    fontWeight: 400,
    color: config.contactColor,
    letterSpacing: LETTER_SPACING,
    lineHeight: "normal",
    textAlign: config.contactAlign,
    whiteSpace: "pre-line",
    width: breakpoint === "mobile" ? "100%" : "auto",
    maxWidth:
      breakpoint === "mobile"
        ? "100%"
        : `${limitedScaled(config.contactMaxWidth)}px`,
  };

  const contactElement = (
    <p style={contactStyle}>
      {CONTACT_TEXT}
    </p>
  );

  return (
    <footer style={footerStyle}>
      <div ref={contentRef} style={contentStyle}>
        <div style={brandBlockStyle}>
          <div style={logoRowStyle}>
            <Image
              src={getSupabaseUrl("logo/cnu-logo.png")}
              alt="충남대학교 로고"
              width={logoSize}
              height={logoSize}
              style={{
                width: `${logoSize}px`,
                height: `${logoSize}px`,
                objectFit: "contain",
              }}
            />
            <p style={brandTitleStyle}>{BRAND_TEXT}</p>
          </div>
          <p style={copyrightStyle}>
            2025 CNUD Graduation All rights reserved Ⓒ
          </p>
          {config.contactInBrand ? contactElement : null}
        </div>
        {!config.contactInBrand ? contactElement : null}
      </div>
    </footer>
  );
}


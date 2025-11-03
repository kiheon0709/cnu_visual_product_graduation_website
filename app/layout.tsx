import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "충남대학교 디자인창의학과 시각제품디자인전공 졸업전시",
  description: "CNUD Graduation Exhibition Archive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={poppins.variable}>
      <body>
        <div
          className="flex min-h-screen w-screen"
          style={{
            // 5:19 비율(= 5/24 ≈ 20.833vw)을 기본으로, 최소 240px, 최대 400px로 클램프
            // @ts-ignore - CSS var 사용
            "--sidebar-w": "clamp(240px, 20.833vw, 400px)",
          }}
        >
          <Sidebar />
          <main className="ml-[var(--sidebar-w)] w-[calc(100vw-var(--sidebar-w))] min-h-screen">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}


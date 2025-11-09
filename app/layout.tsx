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
            // @ts-ignore - CSS var 사용
            "--sidebar-w": "400px",
          }}
        >
          <Sidebar />
          <main className="max-[743px]:w-full max-[743px]:ml-0 max-[743px]:pt-[min(calc(116px*100vw/393px),116px)] min-[744px]:ml-[var(--sidebar-w)] min-[744px]:w-[calc(100vw-var(--sidebar-w))] min-h-screen">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}


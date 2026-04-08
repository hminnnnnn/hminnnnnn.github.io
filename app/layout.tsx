import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "김현민 | 교육 · HRD · AX",
  description: "개발자 출신 테크 교육 PM에서, AI로 성장 시스템을 설계하는 사람으로",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-parchment text-near_black antialiased min-h-screen">{children}</body>
    </html>
  );
}

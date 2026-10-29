import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

const TITLE = "정영훈 | Android 시니어 개발자 포트폴리오";
const DESCRIPTION = "Android 시니어 개발자 정영훈의 포트폴리오";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, type: "profile", locale: "ko_KR" },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

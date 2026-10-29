import ProfileHeader from "@/components/shared/ProfileHeader";
import Overview from "@/components/shared/Overview";
import AiMethod from "@/components/shared/AiMethod";
import ResumeIntro from "@/components/sections/resume/ResumeIntro";
import ResumeSkills from "@/components/sections/resume/ResumeSkills";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import { PORTFOLIO_HIGHLIGHTS, PORTFOLIO_TIMELINE } from "@/data/overview";

export default function PortfolioPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 pb-24 pt-24 print:pb-0 print:pt-0">
      <div className="space-y-12">
        <ProfileHeader counterpart="resume" subtitle="Android 시니어 개발자 포트폴리오" />
        <ResumeIntro id="about" />
        <ResumeSkills />
        <Overview id="overview" title="한눈에 보기" timeline={PORTFOLIO_TIMELINE} highlights={PORTFOLIO_HIGHLIGHTS} />
        <AiMethod id="ai" variant="portfolio" />
        <ExperienceSection id="experience" />
        <ProjectsSection id="projects" />
      </div>
    </main>
  );
}

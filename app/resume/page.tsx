import ProfileHeader from "@/components/shared/ProfileHeader";
import Overview from "@/components/shared/Overview";
import AiMethod from "@/components/shared/AiMethod";
import ResumeIntro from "@/components/sections/resume/ResumeIntro";
import ResumeSkills from "@/components/sections/resume/ResumeSkills";
import ResumeCareer from "@/components/sections/resume/ResumeCareer";
import ResumePersonal from "@/components/sections/resume/ResumePersonal";
import ResumeOther from "@/components/sections/resume/ResumeOther";
import { RESUME_HIGHLIGHTS, RESUME_TIMELINE } from "@/data/overview";

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-24 pt-24 print:pb-0 print:pt-0">
      <div className="space-y-10">
        <ProfileHeader counterpart="portfolio" subtitle="Android 시니어 개발자 이력서" />
        <ResumeIntro />
        <Overview title="경력 한눈에" timeline={RESUME_TIMELINE} highlights={RESUME_HIGHLIGHTS} />
        <ResumeSkills />
        <AiMethod variant="resume" />
        <ResumeCareer />
        <ResumePersonal />
        <ResumeOther />
      </div>
    </main>
  );
}

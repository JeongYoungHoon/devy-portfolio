import ResumeHeader from "@/components/sections/resume/ResumeHeader";
import ResumeIntro from "@/components/sections/resume/ResumeIntro";
import ResumeSkills from "@/components/sections/resume/ResumeSkills";
import ResumeCareer from "@/components/sections/resume/ResumeCareer";

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-24 pt-24">
      <div className="space-y-10">
        <ResumeHeader />
        <ResumeIntro />
        <ResumeSkills />
        <ResumeCareer />
      </div>
    </main>
  );
}

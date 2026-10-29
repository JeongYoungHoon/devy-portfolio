"use client";

import Image from "next/image";
import { useState } from "react";
import { RESUME_PROFILE, SITE_URLS } from "@/data/resume";

type Props = {
  // 이력서 ↔ 포트폴리오 서로의 사이트 주소
  counterpart: "resume" | "portfolio";
  subtitle: string;
};

const LINK_CLASS =
  "break-all hover:text-zinc-900 dark:hover:text-zinc-100 underline-offset-2 hover:underline";

function display(url: string) {
  return url.replace(/^https?:\/\//, "");
}

export default function ProfileHeader({ counterpart, subtitle }: Props) {
  const [open, setOpen] = useState(false);
  const counterpartUrl = SITE_URLS[counterpart];

  return (
    <div className="border-b border-zinc-200 pb-8 dark:border-zinc-800">
      <div className="flex flex-col-reverse gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0 flex-1">
          <h1 className="mb-1 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            {RESUME_PROFILE.name}
          </h1>
          <p className="mb-4 font-mono text-sm text-zinc-500 dark:text-zinc-400">{subtitle}</p>
          <div className="mb-4 flex flex-col gap-1 text-sm text-zinc-600 dark:text-zinc-400">
            <span>{RESUME_PROFILE.location} 거주</span>
            <a href={`mailto:${RESUME_PROFILE.email}`} className={LINK_CLASS}>
              {RESUME_PROFILE.email}
            </a>
            <a href={SITE_URLS.github} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
              {display(SITE_URLS.github)}
            </a>
            <a href={counterpartUrl} className={LINK_CLASS}>
              {display(counterpartUrl)}
            </a>
          </div>
          <div className="flex flex-wrap gap-2">
            {RESUME_PROFILE.traits.map((trait) => (
              <span
                key={trait}
                className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-400"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>
        <div className="shrink-0">
          <Image
            src={RESUME_PROFILE.photo}
            alt={RESUME_PROFILE.name}
            width={100}
            height={100}
            className="cursor-zoom-in rounded-2xl object-cover transition-transform hover:scale-105"
            priority
            onClick={() => setOpen(true)}
          />
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <Image
            src={RESUME_PROFILE.photo}
            alt={RESUME_PROFILE.name}
            width={300}
            height={300}
            className="rounded-3xl object-cover shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}

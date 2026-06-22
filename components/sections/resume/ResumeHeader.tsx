"use client";

import Image from "next/image";
import { useState } from "react";
import { RESUME_PROFILE } from "@/data/resume";

export default function ResumeHeader() {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-zinc-200 pb-8 dark:border-zinc-800">
      <div className="flex flex-col-reverse gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex-1">
          <h1 className="mb-1 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            {RESUME_PROFILE.name}
          </h1>
          <p className="mb-4 font-mono text-sm text-zinc-500 dark:text-zinc-400">
            풀-사이클 안드로이드 개발자
          </p>
          <div className="mb-4 flex flex-col gap-1 text-sm text-zinc-600 dark:text-zinc-400">
            {RESUME_PROFILE.emails.map((email) => (
              <a
                key={email}
                href={`mailto:${email}`}
                className="hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                {email}
              </a>
            ))}
            <span>{RESUME_PROFILE.location}</span>
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

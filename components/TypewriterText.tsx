"use client";

import { useEffect, useState } from "react";

const ROLES = [
  "Android 앱을 만드는 개발자",
  "Kotlin을 좋아하는 개발자",
  "AI 기능을 앱에 녹이는 개발자",
];

export default function TypewriterText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const current = ROLES[roleIndex];
  const displayed = current.slice(0, charIndex);

  useEffect(() => {
    if (!deleting && charIndex < current.length) {
      const t = setTimeout(() => setCharIndex((i) => i + 1), 80);
      return () => clearTimeout(t);
    }
    if (!deleting && charIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(t);
    }
    if (deleting && charIndex > 0) {
      const t = setTimeout(() => setCharIndex((i) => i - 1), 40);
      return () => clearTimeout(t);
    }
    if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }
  }, [charIndex, deleting, current.length]);

  return (
    <span>
      {displayed}
      <span className="ml-0.5 inline-block h-[1em] w-0.5 animate-pulse bg-current align-middle" />
    </span>
  );
}

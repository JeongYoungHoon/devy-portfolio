const EMAIL_ICON = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const LINKS = [
  {
    label: "Gmail",
    href: "mailto:devy.jeong@gmail.com",
    description: "devy.jeong@gmail.com",
    icon: EMAIL_ICON,
  },
  {
    label: "Kakao",
    href: "mailto:mobile.dev@kakao.com",
    description: "mobile.dev@kakao.com",
    icon: EMAIL_ICON,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="bg-zinc-50 dark:bg-zinc-900">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <h2 className="mb-3 text-3xl font-bold tracking-tight">Contact</h2>
        <p className="mb-10 text-zinc-600 dark:text-zinc-400">
          프로젝트 협업이나 문의는 아래로 연락주세요.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-5 py-4 text-sm text-zinc-700 transition-all hover:border-zinc-300 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:border-zinc-700"
            >
              <span className="text-zinc-500 dark:text-zinc-400">{link.icon}</span>
              <div>
                <p className="font-medium text-zinc-900 dark:text-zinc-100">{link.label}</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-500">{link.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

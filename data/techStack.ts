export type StackGroup = {
  category: string;
  items: string[];
};

export const STACK: StackGroup[] = [
  {
    category: "Mobile",
    items: ["Kotlin", "Android", "Jetpack Compose", "Room", "Retrofit", "WorkManager"],
  },
  {
    category: "AI / API",
    items: ["Gemini API", "OpenAI API", "Notion API"],
  },
  {
    category: "Tools",
    items: ["Gradle", "Git", "GitHub Actions", "Figma"],
  },
  {
    category: "Web",
    items: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];

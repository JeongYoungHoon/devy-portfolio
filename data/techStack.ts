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
    items: ["Gemini API", "OpenAI API", "OpenRouter", "Notion API", "GitHub API"],
  },
  {
    category: "Cloud / Infra",
    items: ["AWS Lambda", "DynamoDB", "Streamlit"],
  },
  {
    category: "Tools",
    items: ["Gradle", "Git", "GitHub Actions", "Gemini CLI", "Claude Code", "Figma"],
  },
  {
    category: "Web",
    items: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];

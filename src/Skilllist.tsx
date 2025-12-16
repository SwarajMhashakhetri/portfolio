import { Database } from "lucide-react";
import { ReactNode } from "react";

const wrapper = (title: string) => {
  return (
    <div className="flex gap-2 items-center">
      <p>{title}</p>
    </div>
  );
};
export const skillList: string[] = [
  "Javascript",
  "Typescript",
  "Node js",
  "Next js",
  "Mongo db",
  "React",
  "Express",
  "SQL",
  "Gen AI",
  "tailwind css",
  "Docker",
  "Langchain",
];

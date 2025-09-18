"use client";
import Title from "./Title";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiPrisma,
  SiExpress,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
  SiDocker,
  SiVercel,
} from "react-icons/si";
import { TbBrandNextjs, TbBrandNodejs } from "react-icons/tb";

const Skills = () => {
  const frontendSkills = [
    { text: "React", Icon: SiReact },
    { text: "NextJS", Icon: TbBrandNextjs },
    { text: "JavaScript", Icon: SiJavascript },
    { text: "TypeScript", Icon: SiTypescript },
    { text: "HTML5", Icon: SiHtml5 },
    { text: "CSS3", Icon: SiCss3 },
    { text: "Tailwind CSS", Icon: SiTailwindcss },
  ];

  const backendSkills = [
    { text: "NodeJS", Icon: TbBrandNodejs },
    { text: "ExpressJS", Icon: SiExpress },
    { text: "PostgreSQL", Icon: SiPostgresql },
    { text: "Prisma ORM", Icon: SiPrisma },
  ];

  const devopsSkills = [
    { text: "Git", Icon: SiGit },
    { text: "GitHub", Icon: SiGithub },
    { text: "Docker", Icon: SiDocker },
    { text: "Vercel", Icon: SiVercel },
  ];

  return (
    <div className="max-w-6xl mx-auto px-8 space-y-12">
      <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-700/50">
        <Title
          text="Frontend"
          className="flex flex-col items-center justify-center -rotate-2 mb-8"
        />
        <div className="flex flex-wrap gap-6 justify-center">
          {frontendSkills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <skill.Icon className="w-12 h-12 text-white" />
              <span className="text-xs text-gray-400 mt-1">{skill.text}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Backend */}
        <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-700/50">
          <Title
            text="Backend"
            className="flex flex-col items-center justify-center rotate-2 mb-8"
          />
          <div className="flex flex-wrap gap-6 justify-center">
            {backendSkills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                <skill.Icon className="w-12 h-12 text-white" />
                <span className="text-xs text-gray-400 mt-1">{skill.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* DevOps */}
        <div className="bg-gray-900/30 rounded-xl p-8 border border-gray-600/30">
          <Title
            text="DevOps"
            className="flex flex-col items-center justify-center -rotate-1 mb-8"
          />
          <div className="flex flex-wrap gap-6 justify-center">
            {devopsSkills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                <skill.Icon className="w-12 h-12 text-white" />
                <span className="text-xs text-gray-400 mt-1">{skill.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

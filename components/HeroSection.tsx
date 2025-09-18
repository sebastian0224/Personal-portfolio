import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaFilePdf } from "react-icons/fa";
import Image from "next/image";

const socials = [
  {
    link: "https://www.linkedin.com/in/sebastian-osorio-615668252/",
    label: "LinkedIn",
    Icon: SiLinkedin,
  },
  {
    link: "https://github.com/sebastian0224",
    label: "GitHub",
    Icon: SiGithub,
  },
  {
    link: "/cv.pdf", // ⚠️
    label: "Download CV",
    Icon: FaFilePdf,
  },
];

const HeroSection = () => {
  return (
    <div className="min-h-[100vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between animate-move-up">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Sebastian Osorio
          <br />
          <span className="underline underline-offset-8 decoration-green-500">
            {"Full-Stack Developer"}
          </span>
        </h1>
        <p className="md:w-96 text-lg text-gray-300">
          {
            "I’m a Full-Stack Developer from Colombia, combining technical skills with creativity to build modern web apps. Focused on React, Next.js, Node.js, and databases to deliver solutions that improve user experiences."
          }
        </p>

        <div className="flex justify-center lg:justify-start gap-5">
          {socials.map((elem, index) => {
            const Icon = elem.Icon;
            return (
              <Link
                href={elem.link}
                key={index}
                aria-label={elem.label}
                target={elem.link.endsWith(".pdf") ? "_blank" : "_self"}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 hover:bg-gray-700 transition-all"
              >
                <Icon className="w-5 h-5" />
                <span className="hidden sm:inline">{elem.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="relative">
        <div className="w-72 h-72 space-y-5 -rotate-[30deg] relative">
          <div className="flex gap-6 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
            <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
          </div>
          <div className="flex gap-6 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
            <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[30deg]">
            <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl backdrop-blur-sm">
              <Image
                src="/male.png"
                alt="Sebastian Osorio"
                width={256}
                height={256}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

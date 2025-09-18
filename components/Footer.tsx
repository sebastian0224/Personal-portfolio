import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaFilePdf } from "react-icons/fa";

const Footer = () => {
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

  return (
    <footer className="border-t mt-10 py-10 flex flex-col gap-5 items-center animate-move-down">
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
        Sebastian Osorio
      </h1>
      <div className="flex justify-center items-center gap-5">
        {socials.map((elem, index) => {
          const Icon = elem.Icon;
          return (
            <Link
              href={elem.link}
              key={index}
              aria-label={elem.label}
              target={elem.link.endsWith(".pdf") ? "_blank" : "_self"}
            >
              <Icon className="w-6 h-6 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;

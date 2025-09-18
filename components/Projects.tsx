"use client";
import Link from "next/link";
import Title from "./Title";
import { cn } from "@/lib/utils";
import {
  SiTypescript,
  SiPostgresql,
  SiPrisma,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandNextjs, TbBrandNodejs } from "react-icons/tb";
import { ExternalLink, Github } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Kyro",
      subtitle: "Multichain Portfolio Tracker",
      description:
        "A comprehensive portfolio tracking application that monitors cryptocurrency investments across multiple blockchain networks. Features real-time price updates, portfolio analytics, and cross-chain asset management.",
      tech: [
        TbBrandNextjs,
        SiTypescript,
        SiTailwindcss,
        SiPostgresql,
        SiPrisma,
      ],
      liveUrl: "https://kyro-alpha.vercel.app/",
      githubUrl: "https://github.com/sebastian0224/Kyro",
      images: ["/kyro1.png", "/kyro2.png", "/kyro3.png"],
      gradient: "from-blue-500 to-purple-600",
    },
    {
      id: 2,
      title: "JewelryAI",
      subtitle: "AI-Powered Background Replacement",
      description:
        "An innovative platform where users upload jewelry photos and AI automatically replaces backgrounds with stunning, professional-grade alternatives. Perfect for e-commerce and marketing materials.",
      tech: [
        TbBrandNextjs,
        SiTypescript,
        SiTailwindcss,
        TbBrandNodejs,
        SiPrisma,
      ],
      liveUrl: "https://jewelryai.vercel.app/",
      githubUrl: "https://github.com/sebastian0224/jewelryai",
      images: ["/jewelry-ai-1.png", "/jewelry-ai-2.png", "/jewelry-ai-3.png"],
      gradient: "from-emerald-500 to-teal-600",
    },
  ];

  return (
    <div className="py-16 px-5 sm:px-8">
      <Title
        text="Featured Projects 🚀"
        className="flex flex-col items-center justify-center rotate-3 mb-16"
      />

      <div className="max-w-7xl mx-auto space-y-20">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={cn(
              "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center",
              index % 2 === 1 && "lg:grid-flow-dense"
            )}
          >
            {/* Project Images Carousel */}
            <div
              className={cn("relative", index % 2 === 1 && "lg:col-start-2")}
            >
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-20 rounded-2xl blur-xl",
                  project.gradient
                )}
              />
              <Carousel className="w-full relative z-10">
                <CarouselContent>
                  {project.images.map((image, imgIndex) => (
                    <CarouselItem key={imgIndex}>
                      <div className="relative aspect-video rounded-2xl overflow-hidden border border-gray-700/50 bg-gray-900/50">
                        <Image
                          src={image}
                          alt={`${project.title} screenshot ${imgIndex + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </div>

            {/* Project Details */}
            <div
              className={cn("space-y-6", index % 2 === 1 && "lg:col-start-1")}
            >
              {/* Title & Subtitle */}
              <div className="space-y-2">
                <h3 className="text-3xl lg:text-4xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-lg text-gray-300 font-medium">
                  {project.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed text-base lg:text-lg">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((Icon, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex items-center justify-center w-12 h-12 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:scale-110"
                    >
                      <Icon className="w-6 h-6 text-gray-300" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live Demo
                </Link>
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg border border-gray-700 hover:bg-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105"
                >
                  <Github className="w-4 h-4" />
                  View Source Code
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

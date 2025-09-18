"use client";
import Title from "./Title";
import Image from "next/image";
import { Calendar, Building } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "Next.js 15 & React - The Complete Guide",
      issuer: "Udemy",
      date: "2025",
      description:
        "In-depth course covering React, Next.js 15, authentication, APIs, databases, and deployment strategies for building modern full-stack applications.",
      image: "/certificate-1.jpg",
      skills: [
        "React",
        "Next.js 15",
        "TypeScript",
        "API Routes",
        "Authentication",
        "Deployment",
      ],
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      id: 2,
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2024",
      description:
        "Certification focused on building responsive websites with HTML5 and CSS3, including Flexbox, CSS Grid, accessibility, and mobile-first design.",
      image: "/certificate-2.png",
      skills: [
        "HTML5",
        "CSS3",
        "Flexbox",
        "CSS Grid",
        "Responsive Design",
        "Accessibility",
      ],
      gradient: "from-yellow-500 to-orange-600",
    },
    {
      id: 3,
      title: "The Complete Full-Stack Web Development Bootcamp",
      issuer: "Udemy",
      date: "2024",
      description:
        "Comprehensive bootcamp covering frontend (HTML, CSS, JavaScript, React) and backend (Node.js, Express, PostgreSQL), plus Git, APIs, and deployment.",
      image: "/certificate-3.jpg",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Node.js",
        "Express",
        "PostgreSQL",
        "APIs",
        "Git & GitHub",
      ],
      gradient: "from-green-500 to-emerald-600",
    },
  ];

  return (
    <div className="py-16 px-5 sm:px-8">
      <Title
        text="Certificates 🏆"
        className="flex flex-col items-center justify-center -rotate-2 mb-16"
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="group relative bg-gray-900/50 rounded-xl border border-gray-700/50 overflow-hidden hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              {/* Background Gradient Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${certificate.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              {/* Certificate Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-800">
                <Image
                  src={certificate.image}
                  alt={`${certificate.title} Certificate`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>

              {/* Certificate Details */}
              <div className="p-6 space-y-4">
                {/* Header */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white line-clamp-2 group-hover:text-green-400 transition-colors duration-300">
                    {certificate.title}
                  </h3>

                  {/* Issuer and Date */}
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4" />
                      <span>{certificate.issuer}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{certificate.date}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                  {certificate.description}
                </p>

                {/* Skills Tags */}
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    {certificate.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs font-medium bg-gray-800 text-gray-300 rounded-md border border-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="flex items-center justify-center mt-16">
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;

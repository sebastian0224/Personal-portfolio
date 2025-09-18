import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Skills from "@/components/Skills";
import Navbar from "@/components/Navbar";
import { inject } from "@vercel/analytics";

inject();
const page = () => {
  return (
    <div className="min-h-screen bg-black overflow-hidden scroll-smooth">
      <Navbar />

      <section
        id="home"
        className="dark:bg-black bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative"
      >
        <div className="max-w-7xl mx-auto p-5">
          <HeroSection />
        </div>
        <div className="h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bo0 w-full"></div>
      </section>

      <div className="max-w-7xl mx-auto p-5 mt-20 space-y-32">
        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="certificates">
          <Certificates />
        </section>

        <section id="contact">
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default page;

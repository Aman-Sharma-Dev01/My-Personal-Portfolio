import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ContactSection from "@/components/portfolio/ContactSection";
import CustomCursor from "@/components/portfolio/CustomCursor";
import FilmGrain from "@/components/portfolio/FilmGrain";

const Index = () => {
  return (
    <div className="relative">
      <CustomCursor />
      <FilmGrain />
      <Navbar />
      <main role="main" aria-label="Main content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;

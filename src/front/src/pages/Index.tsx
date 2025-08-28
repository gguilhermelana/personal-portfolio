import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSectionNew } from "@/components/ProjectsSectionNew";
import { ContactSectionNew } from "@/components/ContactSectionNew";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter-tight">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Projects Section */}
      <ProjectsSectionNew />

      {/* Contact Section */}
      <ContactSectionNew />
    </div>
  );
};

export default Index;

import { Navigation } from "@/components/Navigation";
import { AboutSection } from "@/components/AboutSection";

const About = () => {
      return (
            <div className="min-h-screen bg-background font-inter-tight">
                  <Navigation />
                  <div className="pt-20">
                        <AboutSection />
                  </div>
            </div>
      );
};

export default About;

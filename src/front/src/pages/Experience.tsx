import { Navigation } from "@/components/Navigation";
import { ExperienceSection } from "@/components/ExperienceSection";

const Experience = () => {
      return (
            <div className="min-h-screen bg-background font-inter-tight">
                  <Navigation />
                  <div className="pt-20">
                        <ExperienceSection />
                  </div>
            </div>
      );
};

export default Experience;

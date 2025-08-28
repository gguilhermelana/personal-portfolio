import { Navigation } from "@/components/Navigation";
import { ProjectsSectionNew } from "@/components/ProjectsSectionNew";

const Projects = () => {
      return (
            <div className="min-h-screen bg-background font-inter-tight">
                  <Navigation />
                  <div className="pt-20">
                        <ProjectsSectionNew />
                  </div>
            </div>
      );
};

export default Projects;

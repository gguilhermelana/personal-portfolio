import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

type Project = {
      year: string;
      title: string;
      description: string;
      technologies: string[];
      link?: string;
};

export function ProjectsSectionNew() {
      const { translations } = useLanguage();
      const [visibleCount, setVisibleCount] = useState(4);

      const projects: Project[] = [
            {
                  year: "2025",
                  title: translations.projects.nutriaApp.title,
                  description: translations.projects.nutriaApp.description,
                  technologies: ["React", "Node.js", "OpenAI API", "PostgreSQL", "AWS", "TypeScript"],
                  link: "https://nutriaapp.com.br"
            },
            {
                  year: "2025",
                  title: translations.projects.zippys.title,
                  description: translations.projects.zippys.description,
                  technologies: ["React Native", "TypeScript", "Zustand", "Push Notifications", "Native Modules"],
                  link: "https://zippys.com"
            },
            {
                  year: "2025",
                  title: translations.projects.tennessee.title,
                  description: translations.projects.tennessee.description,
                  technologies: ["Flutter", "Dart", "Mapbox", "GPS", "Firebase", "Offline Storage"],
                  link: "https://tnstateparks.com"
            },
            {
                  year: "2025",
                  title: translations.projects.highway.title,
                  description: translations.projects.highway.description,
                  technologies: ["React Native", "TypeScript", "Mapbox", "GPS Integration", "Security"],
                  link: "https://highway.com"
            },
            {
                  year: "2024",
                  title: translations.projects.academic.title,
                  description: translations.projects.academic.description,
                  technologies: ["React", "Node.js", "PostgreSQL", "Express.js", "JWT"],
            },
            {
                  year: "2024",
                  title: translations.projects.ecommerce.title,
                  description: translations.projects.ecommerce.description,
                  technologies: ["Flutter", "Dart", "Firebase", "Stripe API", "Provider"],
            }
      ];

      const handleShowMore = () => {
            setVisibleCount(projects.length);
      };

      return (
            <section id="projects" className="py-16 sm:py-20 md:py-24 lg:py-32">
                  <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="space-y-12 sm:space-y-14 md:space-y-16">
                              <div className="text-center">
                                    <h2 className="font-inter-tight text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
                                          {translations.projects.title}
                                    </h2>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                                    {projects.slice(0, visibleCount).map((project, index) => (
                                          <div
                                                key={index}
                                                className="group relative bg-card border border-border rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300"
                                          >
                                                <div className="space-y-4 sm:space-y-6">
                                                      <div className="flex items-start justify-between">
                                                            <div className="space-y-2">
                                                                  <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                                                                        {project.year}
                                                                  </div>
                                                                  <h3 className="font-inter-tight text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                                                        {project.title}
                                                                  </h3>
                                                            </div>
                                                            {project.link && (
                                                                  <a
                                                                        href={project.link}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-full hover:bg-muted"
                                                                  >
                                                                        <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                                                                  </a>
                                                            )}
                                                      </div>

                                                      <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                                                            {project.description}
                                                      </p>

                                                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                                            {project.technologies.map((tech, techIndex) => (
                                                                  <Badge
                                                                        key={techIndex}
                                                                        variant="secondary"
                                                                        className="text-xs sm:text-sm bg-subtle hover:bg-subtle/80 px-2 py-1 sm:px-3 sm:py-1.5"
                                                                  >
                                                                        {tech}
                                                                  </Badge>
                                                            ))}
                                                      </div>

                                                      {project.link && (
                                                            <div className="pt-2">
                                                                  <a
                                                                        href={project.link}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                                                                  >
                                                                        {translations.projects.viewProject}
                                                                        <ExternalLink className="h-3 w-3" />
                                                                  </a>
                                                            </div>
                                                      )}
                                                </div>
                                          </div>
                                    ))}
                              </div>

                              {visibleCount < projects.length && (
                                    <div className="text-center">
                                          <Button
                                                variant="outline"
                                                onClick={handleShowMore}
                                                className="rounded-full px-6 sm:px-8 text-sm sm:text-base"
                                          >
                                                {translations.projects.viewAll}
                                          </Button>
                                    </div>
                              )}
                        </div>
                  </div>
            </section>
      );
}

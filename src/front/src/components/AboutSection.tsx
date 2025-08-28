import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

export function AboutSection() {
      const { translations } = useLanguage();
      const skills = [
            "React Native",
            "Flutter",
            "React",
            "Node.js",
            "TypeScript",
            "JavaScript",
            "Java",
            "PostgreSQL",
            "AWS",
            "OpenAI API",
            "Mapbox",
            "Firebase",
            "Git",
            "REST APIs"
      ];

      return (
            <section id="about" className="pb-12 pt-6 sm:py-16 md:py-20 lg:py-24">
                  <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="space-y-8 sm:space-y-10 md:space-y-12">
                              <div className="text-center">
                                    <h2 className="font-inter-tight text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
                                          {translations.about.title}
                                    </h2>
                              </div>

                              <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
                                    <div className="prose prose-base sm:prose-lg max-w-none">
                                          <p className="text-muted-foreground leading-relaxed text-base sm:text-lg mb-4 sm:mb-6">
                                                {translations.about.description1}
                                          </p>
                                          <p className="text-muted-foreground leading-relaxed text-base sm:text-lg mb-4 sm:mb-6">
                                                {translations.about.description2}
                                          </p>
                                          <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                                                {translations.about.description3}
                                          </p>
                                    </div>

                                    <div className="space-y-4 sm:space-y-6">
                                          <h3 className="font-inter-tight text-lg sm:text-xl font-semibold text-foreground">
                                                {translations.about.skillsTitle}
                                          </h3>
                                          <div className="flex flex-wrap gap-2 sm:gap-3">
                                                {skills.map((skill, index) => (
                                                      <Badge
                                                            key={index}
                                                            variant="secondary"
                                                            className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-full bg-subtle hover:bg-subtle/80 transition-colors"
                                                      >
                                                            {skill}
                                                      </Badge>
                                                ))}
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
      );
}

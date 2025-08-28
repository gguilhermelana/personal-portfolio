import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ExperienceItemProps {
      company: string;
      role: string;
      period: string;
      description: string;
      technologies: string[];
      companyUrl?: string;
      isReversed?: boolean;
}

const ExperienceItem = ({
      company,
      role,
      period,
      description,
      technologies,
      companyUrl,
      isReversed = false,
}: ExperienceItemProps) => (
      <div className={`flex flex-col lg:flex-row gap-6 lg:gap-8 items-start ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
            <div className="flex-1 space-y-3 sm:space-y-4">
                  <div className="space-y-2">
                        <h3 className="font-inter-tight text-lg sm:text-xl font-bold text-foreground">
                              {companyUrl ? (
                                    <a
                                          href={companyUrl}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="hover:text-primary transition-colors inline-flex items-center gap-2"
                                    >
                                          {company}
                                          <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                                    </a>
                              ) : (
                                    company
                              )}
                        </h3>
                        <p className="text-muted-foreground font-medium text-sm sm:text-base">{role}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">{period}</p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                        {description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {technologies.map((tech, techIndex) => (
                              <Badge
                                    key={techIndex}
                                    variant="outline"
                                    className="text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1.5"
                              >
                                    {tech}
                              </Badge>
                        ))}
                  </div>
            </div>
      </div>
);

export function ExperienceSection() {
      const { translations } = useLanguage();

      const experiences = [
            {
                  company: translations.experience.nutriaApp.company,
                  role: translations.experience.nutriaApp.role,
                  period: translations.experience.nutriaApp.period,
                  description: translations.experience.nutriaApp.description,
                  technologies: [
                        "React",
                        "Node.js",
                        "OpenAI API",
                        "PostgreSQL",
                        "AWS",
                        "TypeScript",
                        "Express.js",
                  ],
                  companyUrl: "https://nutriaapp.com.br",
            },
            {
                  company: translations.experience.zippys.company,
                  role: translations.experience.zippys.role,
                  period: translations.experience.zippys.period,
                  description: translations.experience.zippys.description,
                  technologies: [
                        "React Native",
                        "TypeScript",
                        "Zustand",
                        "Native Modules",
                        "Offline Storage",
                        "Push Notifications",
                  ],
                  companyUrl: "https://zippys.com",
            },
            {
                  company: translations.experience.tennessee.company,
                  role: translations.experience.tennessee.role,
                  period: translations.experience.tennessee.period,
                  description: translations.experience.tennessee.description,
                  technologies: [
                        "Flutter",
                        "Dart",
                        "Provider",
                        "Mapbox",
                        "Offline Storage",
                        "GPS",
                        "Firebase",
                  ],
                  companyUrl: "https://tnstateparks.com",
            },
            {
                  company: translations.experience.highway.company,
                  role: translations.experience.highway.role,
                  period: translations.experience.highway.period,
                  description: translations.experience.highway.description,
                  technologies: [
                        "React Native",
                        "TypeScript",
                        "Zustand",
                        "Native Modules",
                        "Mapbox",
                        "GPS Integration",
                        "Offline Storage",
                        "Push Notifications",
                  ],
                  companyUrl: "https://highway.com",
            },
      ];

      return (
            <section id="experience" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-muted/30">
                  <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="space-y-12 sm:space-y-14 md:space-y-16">
                              <div className="text-center">
                                    <h2 className="font-inter-tight text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
                                          {translations.experience.title}
                                    </h2>
                              </div>

                              <div className="space-y-12 sm:space-y-14 md:space-y-16">
                                    {experiences.map((exp, index) => (
                                          <ExperienceItem
                                                key={index}
                                                company={exp.company}
                                                role={exp.role}
                                                period={exp.period}
                                                description={exp.description}
                                                technologies={exp.technologies}
                                                companyUrl={exp.companyUrl}
                                                isReversed={index % 2 === 1}
                                          />
                                    ))}
                              </div>
                        </div>
                  </div>
            </section>
      );
}

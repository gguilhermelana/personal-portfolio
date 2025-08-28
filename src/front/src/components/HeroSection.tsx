import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEmailModal } from '@/contexts/EmailModalContext';

const technologies = [
  "REACT NATIVE",
  "FLUTTER",
  "REACT",
  "NODE.JS"
];

export function HeroSection() {
  const { translations } = useLanguage();
  const { open } = useEmailModal();

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const headerOffset = window.innerWidth < 640 ? 60 : window.innerWidth < 768 ? 70 : 80;
      const elementPosition = aboutSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Main content */}
          <div className="lg:col-span-8 space-y-6 md:space-y-8">
            <div className="space-y-4 md:space-y-6">
              <div className="space-y-3 md:space-y-4">
                <Badge variant="secondary" className="w-fit px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-full bg-primary/10 text-primary">
                  {translations.hero.badge}
                </Badge>
                <h1 className="font-inter-tight text-3xl sm:text-4xl md:text-5xl lg:text-hero font-bold text-foreground tracking-tight leading-tight pt-2">
                  {translations.hero.title}{" "}
                  <span className="text-muted-foreground">{translations.hero.subtitle}</span>
                </h1>
                <p className="text-base sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  {translations.hero.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto rounded-full px-6 md:px-8 text-sm sm:text-base"
                  onClick={open}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  {translations.hero.contactButton}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={scrollToAbout}
                  className="w-full sm:w-auto rounded-full px-6 md:px-8 text-sm sm:text-base"
                >
                  <ChevronDown className="mr-2 h-4 w-4" />
                  {translations.hero.learnMore}
                </Button>
              </div>

              <div className="flex items-center justify-center sm:justify-start gap-4 pt-2 md:pt-4">
                <a
                  href="https://github.com/gguilhermelana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-muted transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/guilhermelana?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-muted transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>

              {/* Stats */}
              <div className="flex flex-row items-center justify-center sm:justify-start gap-6 sm:gap-8 pt-6 md:pt-8 border-t border-border/50">
                <div className="text-center sm:text-left">
                  <div className="text-xl md:text-2xl font-bold text-foreground">3+</div>
                  <div className="text-xs md:text-sm text-muted-foreground">{translations.hero.stats.internationalProjects}</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-xl md:text-2xl font-bold text-foreground">2</div>
                  <div className="text-xs md:text-sm text-muted-foreground">{translations.hero.stats.experience}</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-xl md:text-2xl font-bold text-foreground">8+</div>
                  <div className="text-xs md:text-sm text-muted-foreground">{translations.hero.stats.technologies}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Technologies sidebar */}
          <div className="lg:col-span-4 lg:pt-12 mt-8 lg:mt-0">
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <h3 className="text-center lg:text-right text-base sm:text-lg md:text-xl font-semibold text-foreground tracking-normal">
                {translations.hero.mainTechnologies}
              </h3>
              {technologies.map((tech, index) => (
                <div key={index} className="text-center lg:text-right">
                  <span className="text-xs sm:text-sm md:text-base font-medium text-muted-foreground tracking-wider">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
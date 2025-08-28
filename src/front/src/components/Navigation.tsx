import { Menu, User, Briefcase, Mail, Home, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEmailModal } from '@/contexts/EmailModalContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function Navigation() {
  const { translations, language, toggleLanguage } = useLanguage();
  const { open } = useEmailModal();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = window.innerWidth < 640 ? 60 : window.innerWidth < 768 ? 70 : 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={scrollToTop}
              className="font-inter-tight text-base sm:text-lg md:text-xl font-bold text-foreground hover:text-primary transition-colors"
            >
              Guilherme Lana
            </button>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-1 sm:gap-2 md:gap-4">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="hidden sm:flex items-center gap-2 rounded-full px-2 sm:px-3 py-1.5 sm:py-2"
            >
              <Globe className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="text-xs sm:text-sm font-medium">{language.toUpperCase()}</span>
            </Button>

            <Button
              variant="outline"
              className="hidden md:inline-flex rounded-full px-3 md:px-4 lg:px-6 border-border hover:bg-subtle text-xs md:text-sm"
              onClick={open}
            >
              {translations.navigation.letsTalk}
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full p-1.5 sm:p-2"
                >
                  <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 sm:w-56">
                <DropdownMenuItem onClick={scrollToTop}>
                  <Home className="mr-2 h-4 w-4" />
                  <span>{translations.navigation.home}</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection('about')}>
                  <User className="mr-2 h-4 w-4" />
                  <span>{translations.navigation.about}</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection('experience')}>
                  <Briefcase className="mr-2 h-4 w-4" />
                  <span>{translations.navigation.experience}</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection('projects')}>
                  <Briefcase className="mr-2 h-4 w-4" />
                  <span>{translations.navigation.projects}</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => scrollToSection('contact')}>
                  <Mail className="mr-2 h-4 w-4" />
                  <span>{translations.navigation.contact}</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={toggleLanguage} className="sm:hidden">
                  <Globe className="mr-2 h-4 w-4" />
                  <span>{language === 'pt' ? 'English' : 'Português'}</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}
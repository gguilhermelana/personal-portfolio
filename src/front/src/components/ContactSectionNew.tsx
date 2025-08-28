import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';
import { EmailModal } from './EmailModal';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEmailModal } from '@/contexts/EmailModalContext';

export function ContactSectionNew() {
      const { translations } = useLanguage();
      const { isOpen, open, close } = useEmailModal();

      const contactInfo = [
            {
                  icon: <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />,
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/guilhermelana?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
                  external: true
            },
            {
                  icon: <Github className="h-5 w-5 sm:h-6 sm:w-6" />,
                  label: "GitHub",
                  href: "https://github.com/gguilhermelana",
                  external: true
            },
            {
                  icon: <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />,
                  label: "Instagram",
                  href: "https://www.instagram.com/gguilhermelana/",
                  external: true
            }
      ];

      return (
            <>
                  <section id="contact" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-muted/30">
                        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                              <div className="space-y-12 sm:space-y-14 md:space-y-16">
                                    <div className="text-center">
                                          <h2 className="font-inter-tight text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
                                                {translations.contact.title}
                                          </h2>
                                          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                                                {translations.contact.subtitle}
                                          </p>
                                    </div>

                                    <div className="flex flex-col items-center space-y-6 sm:space-y-8">
                                          <Button
                                                onClick={open}
                                                size="lg"
                                                className="rounded-full px-6 py-3 sm:px-8 sm:py-6 text-base sm:text-lg font-medium"
                                          >
                                                <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                                                {translations.contact.sendEmail}
                                          </Button>

                                          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                                                {contactInfo.map((contact, index) => (
                                                      <a
                                                            key={index}
                                                            href={contact.href}
                                                            target={contact.external ? "_blank" : "_self"}
                                                            rel={contact.external ? "noreferrer" : ""}
                                                            className="group flex flex-col items-center space-y-2 p-3 sm:p-4 rounded-2xl hover:bg-background transition-colors"
                                                      >
                                                            <div className="p-2.5 sm:p-3 rounded-full bg-muted group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                                                  {contact.icon}
                                                            </div>
                                                            <span className="text-xs sm:text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                                                                  {contact.label}
                                                            </span>
                                                      </a>
                                                ))}
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>

                  <EmailModal
                        isOpen={isOpen}
                        onClose={close}
                  />
            </>
      );
}

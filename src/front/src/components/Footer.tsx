import { Instagram, Dribbble, Twitter } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Dribbble, href: '#', label: 'Dribbble' },
  ];

  return (
    <footer className="py-12 border-t border-border">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-caption text-muted-foreground">
            © 2023. Designed by Pixeflow – Powered by Webflow.
          </p>
          
          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full transition-colors duration-200 hover:bg-subtle"
              >
                <social.icon className="w-5 h-5 text-muted-foreground hover:text-foreground" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
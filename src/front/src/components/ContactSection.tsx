export function ContactSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-inter-tight text-display font-bold text-foreground mb-8 tracking-tight">
          HAVE A NICE WORKS?<br />
          LET'S TALK WITH ME
        </h2>
        
        <a 
          href="mailto:hello@kazarov.com"
          className="inline-block text-heading font-medium text-foreground hover:text-muted-foreground transition-colors duration-200 underline underline-offset-4"
        >
          hello@kazarov.com
        </a>
      </div>
    </section>
  );
}
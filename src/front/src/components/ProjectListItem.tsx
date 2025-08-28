import { cn } from "@/lib/utils";

interface ProjectListItemProps {
  title: string;
  date: string;
  description: string;
  categories: string[];
  className?: string;
  onClick?: () => void;
}

export function ProjectListItem({
  title,
  date,
  description,
  categories,
  className,
  onClick
}: ProjectListItemProps) {
  return (
    <div 
      className={cn(
        "group cursor-pointer transition-all duration-200 py-8 border-b border-border last:border-b-0",
        "hover:bg-subtle/30",
        className
      )}
      onClick={onClick}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start">
        {/* Project Info */}
        <div className="lg:col-span-3">
          <h3 className="font-inter-tight text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-small text-muted-foreground">
            {date}
          </p>
        </div>
        
        {/* Description */}
        <div className="lg:col-span-6">
          <p className="text-body text-foreground leading-relaxed">
            {description}
          </p>
        </div>
        
        {/* Categories */}
        <div className="lg:col-span-3 lg:text-right">
          <div className="flex flex-wrap lg:justify-end gap-2">
            {categories.map((category, index) => (
              <span
                key={index}
                className="px-3 py-1 text-small border border-border rounded-full text-foreground group-hover:border-primary/30 transition-colors"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
import { X } from 'lucide-react';
import { cn } from "@/lib/utils";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    image: string;
    title: string;
    date: string;
    description: string;
    categories: string[];
  };
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-6xl mx-4 bg-background border border-border rounded-lg shadow-2xl max-h-[90vh] overflow-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-subtle transition-colors"
        >
          <X className="w-5 h-5 text-foreground" />
        </button>
        
        {/* Modal Body */}
        <div className="p-8 md:p-12">
          {/* Project Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-12">
            {/* Project Info */}
            <div className="lg:col-span-4 space-y-4">
              <div>
                <h2 className="font-inter-tight text-display font-bold text-foreground mb-2">
                  {project.title}
                </h2>
                <p className="text-body text-muted-foreground">
                  {project.date}
                </p>
              </div>
            </div>
            
            {/* Project Description */}
            <div className="lg:col-span-5 space-y-4">
              <p className="text-body text-foreground leading-relaxed">
                {project.description}
              </p>
            </div>
            
            {/* Categories */}
            <div className="lg:col-span-3 lg:text-right">
              <div className="flex flex-wrap lg:justify-end gap-2">
                {project.categories.map((category, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 text-small border border-border rounded-full text-foreground hover:bg-subtle transition-colors duration-200"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Project Image */}
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-96 lg:h-[600px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
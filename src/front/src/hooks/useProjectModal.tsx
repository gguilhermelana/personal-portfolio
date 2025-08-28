import { useState } from 'react';

export interface Project {
  image: string;
  title: string;
  date: string;
  description: string;
  categories: string[];
}

export function useProjectModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedProject(null);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  };

  return {
    isOpen,
    selectedProject,
    openModal,
    closeModal
  };
}
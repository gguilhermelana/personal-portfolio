import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface EmailModalProps {
      isOpen: boolean;
      onClose: () => void;
}

export function EmailModal({ isOpen, onClose }: EmailModalProps) {
      const { translations } = useLanguage();
      const [isSubmitting, setIsSubmitting] = useState(false);
      const [formData, setFormData] = useState({
            name: '',
            email: '',
            message: ''
      });

      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setIsSubmitting(true);

            // Simular envio do formulário
            setTimeout(() => {
                  setIsSubmitting(false);
                  setFormData({ name: '', email: '', message: '' });
                  onClose();
                  // Aqui você pode adicionar lógica para mostrar uma mensagem de sucesso
            }, 2000);
      };

      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setFormData(prev => ({
                  ...prev,
                  [e.target.name]: e.target.value
            }));
      };

      if (!isOpen) return null;

      return (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                  {/* Backdrop */}
                  <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={onClose}
                  />

                  {/* Modal */}
                  <div className="relative bg-background border border-border rounded-2xl p-8 mx-4 w-full max-w-md shadow-2xl">
                        <button
                              onClick={onClose}
                              className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
                        >
                              <X className="h-4 w-4" />
                        </button>

                        <div className="space-y-6">
                              <div className="text-center">
                                    <h2 className="font-inter-tight text-2xl font-bold text-foreground">
                                          {translations.contact.emailModal.title}
                                    </h2>
                                    <p className="text-muted-foreground mt-2">
                                          {translations.contact.emailModal.subtitle}
                                    </p>
                              </div>

                              <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                          <Input
                                                type="text"
                                                name="name"
                                                placeholder={translations.contact.emailModal.namePlaceholder}
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full"
                                          />
                                    </div>

                                    <div>
                                          <Input
                                                type="email"
                                                name="email"
                                                placeholder={translations.contact.emailModal.emailPlaceholder}
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full"
                                          />
                                    </div>

                                    <div>
                                          <Textarea
                                                name="message"
                                                placeholder={translations.contact.emailModal.messagePlaceholder}
                                                rows={4}
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                className="w-full resize-none"
                                          />
                                    </div>

                                    <Button
                                          type="submit"
                                          className="w-full rounded-full"
                                          disabled={isSubmitting}
                                    >
                                          {isSubmitting ? translations.contact.emailModal.sending : translations.contact.emailModal.sendButton}
                                    </Button>
                              </form>
                        </div>
                  </div>
            </div>
      );
}

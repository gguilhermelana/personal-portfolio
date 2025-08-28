import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { X, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface EmailModalProps {
      isOpen: boolean;
      onClose: () => void;
}

type SubmissionState = 'idle' | 'submitting' | 'success' | 'error';

export function EmailModal({ isOpen, onClose }: EmailModalProps) {
      const { translations } = useLanguage();
      const [submissionState, setSubmissionState] = useState<SubmissionState>('idle');
      const [errorMessage, setErrorMessage] = useState('');
      const [formData, setFormData] = useState({
            name: '',
            email: '',
            message: ''
      });

      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setSubmissionState('submitting');
            setErrorMessage('');

            try {
                  const response = await fetch('http://localhost:3001/api/email/send', {
                        method: 'POST',
                        headers: {
                              'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(formData)
                  });

                  const result = await response.json();

                  if (response.ok && result.success) {
                        setSubmissionState('success');
                        setFormData({ name: '', email: '', message: '' });
                        
                        // Fechar modal após 2 segundos de sucesso
                        setTimeout(() => {
                              setSubmissionState('idle');
                              onClose();
                        }, 2000);
                  } else {
                        setSubmissionState('error');
                        setErrorMessage(result.error || 'Erro ao enviar email. Tente novamente.');
                  }
            } catch (error) {
                  console.error('Erro ao enviar email:', error);
                  setSubmissionState('error');
                  setErrorMessage('Erro de conexão. Verifique sua internet e tente novamente.');
            }
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

                                    {/* Mensagem de erro */}
                                    {submissionState === 'error' && (
                                          <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700">
                                                <AlertCircle className="h-4 w-4 flex-shrink-0" />
                                                <span className="text-sm">{errorMessage}</span>
                                          </div>
                                    )}

                                    {/* Mensagem de sucesso */}
                                    {submissionState === 'success' && (
                                          <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700">
                                                <CheckCircle className="h-4 w-4 flex-shrink-0" />
                                                <span className="text-sm">Email enviado com sucesso!</span>
                                          </div>
                                    )}

                                    <Button
                                          type="submit"
                                          className="w-full rounded-full"
                                          disabled={submissionState === 'submitting' || submissionState === 'success'}
                                    >
                                          {submissionState === 'submitting' 
                                                ? translations.contact.emailModal.sending 
                                                : submissionState === 'success'
                                                ? '✅ Enviado!'
                                                : translations.contact.emailModal.sendButton
                                          }
                                    </Button>
                              </form>
                        </div>
                  </div>
            </div>
      );
}

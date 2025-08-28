import { createContext, useContext, useState, ReactNode } from 'react';
import { ptTranslations, enTranslations } from '../translations';
import type { Translations } from '../types/translations';

type Language = 'pt' | 'en';

interface LanguageContextType {
      language: Language;
      translations: Translations;
      toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
      const context = useContext(LanguageContext);
      if (!context) {
            throw new Error('useLanguage must be used within a LanguageProvider');
      }
      return context;
};

interface LanguageProviderProps {
      children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
      const [language, setLanguage] = useState<Language>('pt');

      const translations = language === 'pt' ? ptTranslations : enTranslations;

      const toggleLanguage = () => {
            setLanguage(prev => prev === 'pt' ? 'en' : 'pt');
      };

      return (
            <LanguageContext.Provider value={{ language, translations, toggleLanguage }}>
                  {children}
            </LanguageContext.Provider>
      );
};

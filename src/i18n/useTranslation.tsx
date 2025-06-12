import React, { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { translations, Translations } from './translations';

type Language = 'en' | 'de' | 'hr';

const getLocaleFromBrowser = (): Language => {
  if (typeof window === 'undefined') return 'en';
  
  const browserLang = navigator.language.toLowerCase();
  
  // Croatian for Croatia, Bosnia, Serbia, Montenegro
  if (browserLang.startsWith('hr') || 
      browserLang.startsWith('bs') || 
      browserLang.startsWith('sr') || 
      browserLang.startsWith('me')) {
    return 'hr';
  }
  
  // German for Germany, Austria, Switzerland
  if (browserLang.startsWith('de')) {
    return 'de';
  }
  
  // Default to English
  return 'en';
};

const getStoredLanguage = (): Language => {
  if (typeof window === 'undefined') return getLocaleFromBrowser();
  
  const stored = localStorage.getItem('language') as Language;
  if (stored && ['en', 'de', 'hr'].includes(stored)) {
    return stored;
  }
  
  return getLocaleFromBrowser();
};

interface TranslationContextType {
  t: Translations;
  language: Language;
  changeLanguage: (newLanguage: Language) => void;
  availableLanguages: readonly { code: string; name: string; flag: string; }[];
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(getStoredLanguage);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = translations[language];

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  const value = {
    t,
    language,
    changeLanguage,
    availableLanguages: [
      { code: 'en', name: 'English', flag: '🇺🇸' },
      { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
      { code: 'hr', name: 'Hrvatski', flag: '🇭🇷' }
    ] as const
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};
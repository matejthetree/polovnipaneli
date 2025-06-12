import React, { useState } from 'react';
import { useTranslation } from '../i18n/useTranslation';
import { Globe, ChevronDown } from 'lucide-react';

export const LanguageSelector: React.FC = () => {
  const { language, changeLanguage, availableLanguages } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = availableLanguages.find(lang => lang.code === language);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
      >
        <Globe className="h-4 w-4" />
        <span className="text-lg">{currentLanguage?.flag}</span>
        <span className="hidden sm:inline">{currentLanguage?.name}</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-20">
            <div className="py-1">
              {availableLanguages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    changeLanguage(lang.code as any);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center space-x-3 transition-colors duration-200 ${
                    language === lang.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                  }`}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span>{lang.name}</span>
                  {language === lang.code && (
                    <div className="ml-auto w-2 h-2 bg-blue-600 rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
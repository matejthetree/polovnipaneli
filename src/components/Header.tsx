import React from 'react';
import { Sun, Menu, X } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';
import { LanguageSelector } from './LanguageSelector';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { t } = useTranslation();

  const navigation = [
    { name: t.nav.home, id: 'home' },
    { name: t.nav.products, id: 'catalog' },
    { name: t.nav.about, id: 'about' },
    { name: t.nav.contact, id: 'contact' }
  ];

  return (
    <header className="bg-white shadow-lg relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <div className="bg-gradient-to-br from-blue-600 to-green-600 p-2 rounded-lg mr-3 group-hover:from-blue-700 group-hover:to-green-700 transition-all duration-300">
              <Sun className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Polovni Paneli</h1>
              <p className="text-sm text-gray-600">Solar Equipment Resale</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-200 rounded-md ${
                    currentPage === item.id
                      ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
            <LanguageSelector />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSelector />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`px-3 py-2 text-left text-base font-medium transition-all duration-200 rounded-md ${
                    currentPage === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProductCatalog } from './pages/ProductCatalog';
import { ProductDetail } from './pages/ProductDetail';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { getProductById } from './data/products';
import { TranslationProvider } from './i18n/useTranslation';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  const handleNavigate = (page: string, productId?: string) => {
    setCurrentPage(page);
    if (productId) {
      setSelectedProductId(productId);
    } else {
      setSelectedProductId(null);
    }
    window.scrollTo(0, 0);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'catalog':
        return <ProductCatalog onNavigate={handleNavigate} />;
      case 'product-detail':
        if (selectedProductId) {
          const product = getProductById(selectedProductId);
          if (product) {
            return <ProductDetail product={product} onNavigate={handleNavigate} />;
          }
        }
        return <ProductCatalog onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <TranslationProvider>
      <div className="min-h-screen bg-gray-50">
        <Header currentPage={currentPage} onNavigate={handleNavigate} />
        <main>
          {renderCurrentPage()}
        </main>
        <Footer />
      </div>
    </TranslationProvider>
  );
}

export default App;
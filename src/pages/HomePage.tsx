import React from 'react';
import { Sun, Zap, Shield, DollarSign, Truck, Award } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: t.home.qualityTestedTitle,
      description: t.home.qualityTestedDescription
    },
    {
      icon: <DollarSign className="h-12 w-12 text-green-600" />,
      title: t.home.competitivePricesTitle,
      description: t.home.competitivePricesDescription
    },
    {
      icon: <Truck className="h-12 w-12 text-purple-600" />,
      title: t.home.fastDeliveryTitle,
      description: t.home.fastDeliveryDescription
    },
    {
      icon: <Award className="h-12 w-12 text-orange-600" />,
      title: t.home.expertSupportTitle,
      description: t.home.expertSupportDescription
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-green-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white bg-opacity-20 p-4 rounded-full">
                <Sun className="h-16 w-16 text-yellow-300" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t.home.heroTitle}
              <span className="block text-yellow-300">{t.home.heroSubtitle}</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
              {t.home.heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('catalog')}
                className="inline-flex items-center px-8 py-4 bg-yellow-500 text-blue-900 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors duration-300 group"
              >
                <Zap className="mr-2 h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
                {t.common.browseProducts}
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300"
              >
                {t.common.getQuote}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.home.whyChooseTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.home.whyChooseDescription}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.home.productRangeTitle}
            </h2>
            <p className="text-xl text-gray-600">
              {t.home.productRangeDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Inverters */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 group">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                <Zap className="h-8 w-8 text-blue-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.home.solarInvertersTitle}</h3>
              <p className="text-gray-600 mb-4">
                {t.home.solarInvertersDescription}
              </p>
              <p className="text-2xl font-bold text-blue-600">{t.home.fromPrice} €150</p>
            </div>

            {/* Panels */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 group">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
                <Sun className="h-8 w-8 text-green-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.home.solarPanelsTitle}</h3>
              <p className="text-gray-600 mb-4">
                {t.home.solarPanelsDescription}
              </p>
              <p className="text-2xl font-bold text-green-600">{t.home.containerLots}</p>
            </div>

            {/* Systems */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 group">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                <Award className="h-8 w-8 text-purple-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.home.completeSystemsTitle}</h3>
              <p className="text-gray-600 mb-4">
                {t.home.completeSystemsDescription}
              </p>
              <p className="text-2xl font-bold text-purple-600">{t.home.volumePricing}</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('catalog')}
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 group"
            >
              {t.home.viewAllProducts}
              <Zap className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.home.ctaTitle}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t.home.ctaDescription}
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            {t.home.ctaButton}
          </button>
        </div>
      </section>
    </div>
  );
};
import React from 'react';
import { Sun, Shield, Award, Truck } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-br from-blue-500 to-green-500 p-2 rounded-lg mr-3">
                <Sun className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Polovni Paneli</h3>
                <p className="text-gray-400 text-sm">Solar Equipment Resale</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              {t.footer.description}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center text-sm text-gray-300">
                <Shield className="h-4 w-4 mr-2 text-green-400" />
                {t.footer.qualityTested}
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Award className="h-4 w-4 mr-2 text-blue-400" />
                {t.footer.certifiedEquipment}
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Truck className="h-4 w-4 mr-2 text-yellow-400" />
                {t.footer.fastDelivery}
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Sun className="h-4 w-4 mr-2 text-orange-400" />
                {t.footer.solarExperts}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors duration-200">{t.footer.allProducts}</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">{t.footer.inverters}</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">{t.footer.solarPanels}</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">{t.footer.accessories}</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">{t.footer.usedEquipment}</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.categories}</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors duration-200">{t.footer.kacoInverters}</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">{t.footer.stringInverters}</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">{t.footer.pvModules}</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">{t.footer.commercialSystems}</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">{t.footer.residentialSolutions}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {t.footer.allRightsReserved}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                {t.footer.privacyPolicy}
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                {t.footer.termsOfService}
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                {t.footer.shippingInfo}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
import React from 'react';
import { ContactProtected } from '../components/ContactProtected';
import { Mail, Phone, MapPin, Clock, Sun } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

export const ContactPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-blue-600 to-green-600 p-4 rounded-full">
              <Sun className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.contact.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Contact Methods */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            {t.contact.getTouchTitle}
          </h2>
          <ContactProtected />
        </div>

        {/* Business Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Business Hours */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 p-3 rounded-lg mr-4">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{t.contact.businessHoursTitle}</h3>
                <p className="text-gray-600 text-sm">{t.contact.businessHoursSubtitle}</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">{t.contact.mondayFriday}</span>
                <span className="font-medium text-gray-900">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">{t.contact.saturday}</span>
                <span className="font-medium text-gray-900">10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">{t.contact.sunday}</span>
                <span className="font-medium text-gray-900">{t.contact.closed}</span>
              </div>
              <div className="pt-2 border-t border-gray-200 mt-3">
                <p className="text-sm text-gray-600">
                  <strong>{t.contact.responseTime}</strong> {t.contact.responseTimeDescription}
                </p>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="bg-orange-100 p-3 rounded-lg mr-4">
                <MapPin className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{t.contact.serviceAreaTitle}</h3>
                <p className="text-gray-600 text-sm">{t.contact.serviceAreaSubtitle}</p>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-gray-700">
                <span className="font-medium">{t.contact.primaryMarket}</span> Croatia & Surrounding Regions
              </p>
              <p className="text-gray-700">
                <span className="font-medium">{t.contact.shipping}</span> European Union
              </p>
              <p className="text-gray-700">
                <span className="font-medium">{t.contact.specialization}</span> Commercial & Residential Solar Equipment
              </p>
              <div className="pt-2 border-t border-gray-200 mt-3">
                <p className="text-sm text-gray-600">
                  {t.contact.shippingDescription}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Purchase Process */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            {t.contact.howToPurchaseTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.contact.step1Title}</h3>
              <p className="text-gray-600 text-sm">
                {t.contact.step1Description}
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.contact.step2Title}</h3>
              <p className="text-gray-600 text-sm">
                {t.contact.step2Description}
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.contact.step3Title}</h3>
              <p className="text-gray-600 text-sm">
                {t.contact.step3Description}
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.contact.step4Title}</h3>
              <p className="text-gray-600 text-sm">
                {t.contact.step4Description}
              </p>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg text-white p-8">
          <h2 className="text-2xl font-bold text-center mb-6">{t.contact.importantInfoTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">{t.contact.termsConditionsTitle}</h3>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>{t.contact.usedEquipmentSoldAsSeen}</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>{t.contact.newEquipmentWarranty}</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>{t.contact.pricesExcludeShipping}</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>{t.contact.paymentTermsDiscussed}</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">{t.contact.inquiryIncludeTitle}</h3>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>{t.contact.specificProductQuantity}</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>{t.contact.deliveryLocation}</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>{t.contact.projectTimeline}</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>{t.contact.technicalQuestions}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
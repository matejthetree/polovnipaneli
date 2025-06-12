import React from 'react';
import { Sun, Users, Award, Globe, Zap, Shield } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

export const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: t.about.qualityFirstTitle,
      description: t.about.qualityFirstDescription
    },
    {
      icon: <Award className="h-8 w-8 text-green-600" />,
      title: t.about.expertKnowledgeTitle,
      description: t.about.expertKnowledgeDescription
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: t.about.customerFocusTitle,
      description: t.about.customerFocusDescription
    },
    {
      icon: <Globe className="h-8 w-8 text-orange-600" />,
      title: t.about.sustainableFutureTitle,
      description: t.about.sustainableFutureDescription
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-blue-600 to-green-600 p-4 rounded-full">
              <Sun className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.about.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.about.subtitle}
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.about.missionTitle}</h2>
              <p className="text-gray-600 mb-4">
                {t.about.missionParagraph1}
              </p>
              <p className="text-gray-600 mb-4">
                {t.about.missionParagraph2}
              </p>
              <p className="text-gray-600">
                {t.about.missionParagraph3}
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-lg p-8">
              <div className="text-center">
                <Zap className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.about.experienceYears}</h3>
                <p className="text-gray-600 mb-4">{t.about.experienceInSolar}</p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-green-600">500+</p>
                    <p className="text-sm text-gray-600">{t.about.projectsCompleted}</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-600">50MW+</p>
                    <p className="text-sm text-gray-600">{t.about.equipmentSupplied}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">{t.about.valuesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What We Offer */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">{t.about.whatWeOfferTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.about.solarInvertersOfferTitle}</h3>
              <p className="text-gray-600">
                {t.about.solarInvertersOfferDescription}
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Sun className="h-8 w-8 text-green-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.about.solarPanelsOfferTitle}</h3>
              <p className="text-gray-600">
                {t.about.solarPanelsOfferDescription}
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.about.completeSystemsOfferTitle}</h3>
              <p className="text-gray-600">
                {t.about.completeSystemsOfferDescription}
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg text-white p-8">
          <h2 className="text-3xl font-bold text-center mb-8">{t.about.whyChooseUsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">{t.about.qualityAssurance}</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></div>
                  {t.about.allUsedEquipmentTested}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></div>
                  {t.about.detailedConditionReports}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></div>
                  {t.about.transparentEquipmentHistory}
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">{t.about.customerService}</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></div>
                  {t.about.expertTechnicalSupport}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></div>
                  {t.about.fastResponseTimes}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></div>
                  {t.about.competitivePricingVolumeDiscounts}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
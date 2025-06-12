import React, { useState } from 'react';
import { Mail, Phone, Eye } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

export const ContactProtected: React.FC = () => {
  const [emailRevealed, setEmailRevealed] = useState(false);
  const [phoneRevealed, setPhoneRevealed] = useState(false);
  const { t } = useTranslation();

  const revealEmail = () => {
    setEmailRevealed(true);
  };

  const revealPhone = () => {
    setPhoneRevealed(true);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Email */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center mb-4">
          <div className="bg-blue-100 p-3 rounded-lg mr-4">
            <Mail className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{t.common.emailUs}</h3>
            <p className="text-gray-600 text-sm">{t.common.sendUsYourInquiry}</p>
          </div>
        </div>
        
        <div className="space-y-3">
          {!emailRevealed ? (
            <button
              onClick={revealEmail}
              className="flex items-center justify-center w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 group"
            >
              <Eye className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
              {t.common.clickToRevealEmail}
            </button>
          ) : (
            <div className="text-center">
              <a
                href="mailto:matejthetree@gmail.com"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg font-medium"
              >
                <Mail className="h-5 w-5 mr-2" />
                matejthetree@gmail.com
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Phone */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center mb-4">
          <div className="bg-green-100 p-3 rounded-lg mr-4">
            <Phone className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{t.common.callUs}</h3>
            <p className="text-gray-600 text-sm">{t.common.speakDirectlyWithOurTeam}</p>
          </div>
        </div>
        
        <div className="space-y-3">
          {!phoneRevealed ? (
            <button
              onClick={revealPhone}
              className="flex items-center justify-center w-full py-3 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 group"
            >
              <Eye className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
              {t.common.clickToRevealPhone}
            </button>
          ) : (
            <div className="text-center">
              <a
                href="tel:+385977367486"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 text-lg font-medium"
              >
                <Phone className="h-5 w-5 mr-2" />
                +385 977 367 486
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
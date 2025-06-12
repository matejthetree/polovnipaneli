import React from 'react';
import { Product } from '../data/products';
import { Badge } from '../components/Badge';
import { ContactProtected } from '../components/ContactProtected';
import { Euro, ArrowLeft, Shield, Award, Info, CheckCircle } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

interface ProductDetailProps {
  product: Product;
  onNavigate: (page: string) => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product, onNavigate }) => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <button
          onClick={() => onNavigate('catalog')}
          className="flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors duration-200"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          {t.common.backToCatalog}
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge condition={product.condition} />
              </div>
              {product.warranty && (
                <div className="absolute top-4 right-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <Shield className="h-4 w-4 mr-1" />
                    {t.common.warranty}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium capitalize">
                  {t.catalog[product.category as keyof typeof t.catalog] || product.category}
                </span>
                <div className="flex items-center">
                  <Euro className="h-6 w-6 text-green-600 mr-1" />
                  <span className="text-3xl font-bold text-green-600">
                    {product.price.toLocaleString()}
                  </span>
                  <span className="text-gray-500 ml-1 text-lg">{product.currency}</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start">
                <Info className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">{t.productDetail.purchaseInfoTitle}</h3>
                  <p className="text-blue-800 text-sm">
                    {t.productDetail.purchaseInfoDescription}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t.productDetail.description}</h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {product.warranty && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-green-600 mr-3" />
                  <div>
                    <h3 className="font-semibold text-green-900">{t.productDetail.warrantyIncluded}</h3>
                    <p className="text-green-800 text-sm">{product.warranty}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Specifications */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.productDetail.technicalSpecifications}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="border-b border-gray-200 pb-3">
                <dt className="text-sm font-medium text-gray-500 mb-1">{key}</dt>
                <dd className="text-lg font-semibold text-gray-900">{value}</dd>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.productDetail.keyFeatures}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            {t.productDetail.interestedTitle}
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            {t.productDetail.interestedDescription}
          </p>
          <ContactProtected />
        </div>
      </div>
    </div>
  );
};
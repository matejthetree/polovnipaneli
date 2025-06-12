import React from 'react';
import { Product } from '../data/products';
import { Badge } from './Badge';
import { Euro, Eye } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

interface ProductCardProps {
  product: Product;
  onViewDetails: (productId: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <Badge condition={product.condition} />
        </div>
        {product.warranty && (
          <div className="absolute top-3 right-3">
            <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              {t.common.warranty}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-3">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
            {product.name}
          </h3>
          <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium capitalize">
            {t.catalog[product.category as keyof typeof t.catalog] || product.category}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {product.description}
        </p>

        {/* Key specs */}
        <div className="mb-4">
          <div className="grid grid-cols-2 gap-2 text-xs">
            {Object.entries(product.specifications).slice(0, 4).map(([key, value]) => (
              <div key={key} className="flex flex-col">
                <span className="text-gray-500">{key}</span>
                <span className="font-medium text-gray-900">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Price and action */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Euro className="h-5 w-5 text-green-600 mr-1" />
            <span className="text-2xl font-bold text-green-600">
              {product.price.toLocaleString()}
            </span>
            <span className="text-gray-500 ml-1">{product.currency}</span>
          </div>
          
          <button
            onClick={() => onViewDetails(product.id)}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium group"
          >
            <Eye className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
            {t.common.viewDetails}
          </button>
        </div>
      </div>
    </div>
  );
};
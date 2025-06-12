import React, { useState } from 'react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Search, Filter, Grid, List } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

interface ProductCatalogProps {
  onNavigate: (page: string, productId?: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCondition, setSelectedCondition] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const { t } = useTranslation();

  const categories = ['all', 'inverter', 'panel', 'accessory'];
  const conditions = ['all', 'new', 'used', 'refurbished'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesCondition = selectedCondition === 'all' || product.condition === selectedCondition;
    
    return matchesSearch && matchesCategory && matchesCondition;
  });

  const handleViewDetails = (productId: string) => {
    onNavigate('product-detail', productId);
  };

  const getCategoryText = (category: string) => {
    if (category === 'all') return t.catalog.allCategories;
    return t.catalog[category as keyof typeof t.catalog] || category;
  };

  const getConditionText = (condition: string) => {
    if (condition === 'all') return t.catalog.allConditions;
    return t.catalog[condition as keyof typeof t.catalog] || condition;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.catalog.title}
          </h1>
          <p className="text-lg text-gray-600">
            {t.catalog.description}
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder={t.catalog.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {getCategoryText(category)}
                    </option>
                  ))}
                </select>
              </div>

              <select
                value={selectedCondition}
                onChange={(e) => setSelectedCondition(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {conditions.map(condition => (
                  <option key={condition} value={condition}>
                    {getConditionText(condition)}
                  </option>
                ))}
              </select>

              {/* View Mode Toggle */}
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors duration-200 ${
                    viewMode === 'grid' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors duration-200 ${
                    viewMode === 'list' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-600">
            {t.catalog.showingResults} {filteredProducts.length} {t.catalog.of} {products.length} {t.catalog.products}
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.catalog.noProductsFound}</h3>
            <p className="text-gray-600">
              {t.catalog.noProductsDescription}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
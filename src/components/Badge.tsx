import React from 'react';
import { useTranslation } from '../i18n/useTranslation';

interface BadgeProps {
  condition: 'new' | 'used' | 'refurbished';
}

export const Badge: React.FC<BadgeProps> = ({ condition }) => {
  const { t } = useTranslation();

  const getBadgeStyles = () => {
    switch (condition) {
      case 'new':
        return 'bg-green-500 text-white';
      case 'used':
        return 'bg-orange-500 text-white';
      case 'refurbished':
        return 'bg-blue-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const getConditionText = () => {
    switch (condition) {
      case 'new':
        return t.common.newCondition;
      case 'used':
        return t.common.usedCondition;
      case 'refurbished':
        return t.common.refurbishedCondition;
      default:
        return condition;
    }
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getBadgeStyles()}`}>
      {getConditionText()}
    </span>
  );
};
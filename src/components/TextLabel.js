import React from 'react';

const translations = {
  'filter.type': {
    'en': 'Type',
  },
  'filter.brand': {
    'en': 'Brand',
  },
  'filter.color': {
    'en': 'Brand Color',
  },
  'loading.error': {
    'en': 'Error occurred while attempting your search :(',
  }
};

const translate = (k, lang = 'en') => {
  return translations[k]
    ? (translations[k][lang])
    : k;
};

const TextLabel = ({ className, transKey, language }) => {
  return (
    <div className={`text-label ${className}`}>
      {translate(transKey, language)}
    </div>
  );
};

export default TextLabel;

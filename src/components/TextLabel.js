import React from 'react';

const translations = {
  'filter.type': {
    'en': 'Type',
  },
  'filter.brand': {
    'en': 'Brand',
  }
};

const translate = (k, lang = 'en') => {
  return translations[k]
    ? (translations[k][lang])
    : k;
};

const TextLabel = ({ transKey, language }) => {
  return (
    <div>{translate(transKey, language)}</div>
  );
};

export default TextLabel;

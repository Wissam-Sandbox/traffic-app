import TRANSLATIONS from './translations';

const translate = (k, lang = 'en') => {
  return TRANSLATIONS[k] ? (TRANSLATIONS[k][lang]) : k;
};

export {
  translate,
}

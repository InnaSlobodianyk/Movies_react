import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from 'locales/en/translation.json';
import translationUK from 'locales/uk/translation.json';
import translationRU from 'locales/ru/translation.json';

const resources = {
  en: {
    translation: translationEN
  },
  uk: {
    translation: translationUK
  },
  ru: {
    translation: translationRU
  }
};

i18n
  .use( initReactI18next )
  .init( {
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'en-US', 'uk', 'uk-UA', 'ru', 'ru-RU'],
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    debug: process.env.NODE_ENV === 'development',
  } );

export default i18n;
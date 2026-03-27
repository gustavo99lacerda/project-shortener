import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'pt',
    supportedLngs: ['en', 'es', 'pt'],
    debug: false,
    backend: {
      loadPath: `${import.meta.env.BASE_URL}locales/{{lng}}/translation.json`,
    },
    detection: {
      order: ['queryString', 'cookie'],
      caches: ['cookie']
    },
    interpolation: {
      escapeValue: false
    }
  })

export default i18n;

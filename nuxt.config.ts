// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
  ],
  tailwindcss: {
    configPath: 'tailwind.config',
  },
  i18n: {
    locales: ['en', 'fr'], 
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: false,
      redirectOn: 'root',  // recommended
    },
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          title1: 'Capture, Play, Edit & Share',
          title2: 'Your Moments From The Same Place',
          privacy: 'Terms & Privacy'
        },
        fr: {
          title1: 'Capture, Joue, Edite & Partage',
          title2: 'Tes Moments Depuis Le Même Endroit',
          privacy: 'Conditions et confidentialité'
        }
      }
    }
  }
})

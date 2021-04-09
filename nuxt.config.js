import { languages, fallbackLocale } from './constants'

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  router: {
    base: '/',
  },
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || 'Get Sheikah wallet',
      },

      { name: 'theme-color', content: '#b566ff' },
      { name: 'robots', content: 'index, follow' },
      { name: 'og:type', content: 'website' },
      { name: 'og:title', content: 'Get Sheikah' },
      {
        name: 'og:description',
        content:
          '"Download Sheikah, the desktop app that keeps your Witnet tokens safe and helps you build, share and deploy data requests into the Witnet network.',
      },
      { name: 'og:image', content: '/sheikah.ico' },
      { name: 'og:url', content: 'https://sheikah.app' },
      { name: 'og:locale:alternate', content: 'es_ES' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/sheikah.ico' }],
  },
  /*
   ** Global CSS
   */
  css: [
    './node_modules/element-ui/packages/theme-chalk/src/button.scss',
    '@/styles/main.scss',
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [{ src: '~/plugins/element-ui.js', ssr: true }],

  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['nuxt-i18n'],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  i18n: {
    // add SEO attributes in layout head for better performance
    seo: false,
    locales: languages,
    vueI18n: {
      fallbackLocale,
      messages: {
        en: require('./locales/en.json'),
        es: require('./locales/es.json'),
        it: require('./locales/it.json'),
        ja: require('./locales/ja.json'),
        zh: require('./locales/zh.json'),
      },
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true,
      alwaysRedirect: true,
    },
    strategy: 'prefix_and_default',
  },
}

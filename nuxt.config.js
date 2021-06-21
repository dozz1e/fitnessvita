import colors from 'vuetify/es5/util/colors'
import axios from 'axios'

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    titleTemplate: '%s',
    title: 'Fitness Vita | Entrenamiento y Nutrición, Chile',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
      { name: 'googlebot', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
      { property: 'og:locale', content: 'es_CL' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'canonical', href: 'https://www.fitnessvita.cl/' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    "~/assets/js/face.js"
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-ssr-cache'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  generate: {
    routes: [],
  },

  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    extend(config, ctx) {
      if (ctx.isServer) {
        axios.get('https://fitnessvita.cl/servicios/wp-json/wc/v3/products?consumer_key=ck_a6d8b0415ae751374ca2487084e4cf0ed02d4c88&consumer_secret=cs_ff8e5620cac73a2063aaeb62f419f0134f795ccc')
          .then(({ data }) => {
            data.forEach((detailPage) => {
              this.buildContext.options.generate.routes.push(`asesorias/${detailPage.slug}`);
            });
          });
      }
    }
  },
  cache: {
    useHostPrefix: false,
    pages: [
      '/',
    ],
    store: {
      type: 'memory',
      max: 100,
      ttl: 60
    }
  }
}

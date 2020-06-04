const URL = 'https://mikeal.dev'

export default {
  mode: 'universal',
  head: {
    titleTemplate: chunk => {
      if (chunk) {
        return `${chunk} - School Of Thoughts`
      }

      return 'School Of Thoughts'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // Open Graph
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'School Of Thoughts'
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: URL },
      // { hid: 'og:image', property: 'og:image', content: `${URL}/card.png` },
      // Twitter Card
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'School Of Thoughts'
      },
      // { hid: 'twitter:image', name: 'twitter:image', content: `${URL}/card.png` },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'School Of Thoughts'
      }
    ],
    // link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  webfontloader: {
    google: {
      families: ['Nunito:100,200,300,400,500,600,700'] //Loads Lato font with weights 400 and 700
    }
  },
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-nord.css'
      }
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: '~/components/Loading.vue',
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '@/plugins/vClickOutside', ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/components',
    '@nuxtjs/date-fns'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxt/content',
    'vue-screen/nuxt',
    'nuxt-imagemin',
    'nuxt-webfontloader'
  ],
  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  /*
   ** Give routes to static generation
   */
  generate: {
    fallback: '404.html', // for Netlify
    routes: ['/'] // give the first url to start crawling
  },
  components: true
}

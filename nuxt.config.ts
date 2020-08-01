// eslint-disable-next-line import/named,@typescript-eslint/no-unused-vars
import { ContentfulClientApi, Entry } from 'contentful'
const contentful = require('contentful')
require('dotenv').config()

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Welcome',
    titleTemplate: '%s | AoHal History',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          '2018年から2020年までの約2年にわたる日本の大学生とタイの女の子の恋の回顧録'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.2.0/css/all.css'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/css/buefy.scss',
    '~/assets/css/global.scss',
    'animate.css/animate.min.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/contentful',
    { src: '~/plugins/vue-carousel', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxt/typescript-build'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    ['nuxt-buefy', { css: true, materialDesignIcons: false }],
    '@nuxtjs/dotenv',
    '@nuxtjs/markdownit',
    'nuxt-fontawesome',
    '@nuxtjs/sitemap'
  ],
  /*
   ** FontAwesome
   */
  fontawesome: {
    imports: [
      { set: '@fortawesome/free-solid-svg-icons', icons: ['fas'] },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      }
    ]
  },
  markdownit: {
    injected: true,
    html: true,
    linkify: true,
    typography: true
  },
  generate: {
    routes() {
      const client: ContentfulClientApi = contentful.createClient({
        space: process.env.CTF_SPACE_ID,
        accessToken: process.env.CTF_ACCESS_TOKEN
      })
      return Promise.all([
        client.getEntries({ content_type: process.env.CTF_BLOG_POST_TYPE_ID }),
        client.getEntries({ content_type: 'category' })
      ]).then(([posts, categories]) => {
        return [
          ...posts.items.map((post: Entry<any>) => {
            return { route: `/posts/${post.fields.slug}`, payload: post }
          }),
          ...categories.items.map((category: Entry<any>) => {
            return {
              route: `/categories/${category.fields.slug}`,
              payload: category
            }
          })
        ]
      })
    }
  },
  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_ACCESS_TOKEN: process.env.CTF_ACCESS_TOKEN
  },
  router: {
    middleware: ['getContentful']
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    extend(config: any, ctx: any) {}
  },
  typescript: {
    typeCheck: true,
    ignoreNotFoundWarnings: true
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://ambiguous-memo.netlify.app/',
    cacheTime: 12 * 3600,
    generate: true
  }
}

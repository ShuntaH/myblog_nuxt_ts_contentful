// eslint-disable-next-line import/named,@typescript-eslint/no-unused-vars
import { ContentfulClientApi, Entry, EntryCollection } from 'contentful'
const contentful = require('contentful')
require('dotenv').config()

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/css/buefy.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/contentful'],
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
  modules: ['nuxt-buefy', '@nuxtjs/dotenv', '@nuxtjs/markdownit'],
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

      return client
        .getEntries({ content_type: 'post' })
        .then((entries: EntryCollection<any>) => {
          return entries.items.map((entry: Entry<any>) => {
            return {
              route: '/posts/' + entry.fields.slug,
              payload: entry
            }
          })
        })
    }
  },
  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_ACCESS_TOKEN: process.env.CTF_ACCESS_TOKEN
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
  }
}

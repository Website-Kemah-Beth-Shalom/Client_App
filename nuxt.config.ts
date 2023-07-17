import { resolve } from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // modules: [
  //   '@nuxtjs/eslint-module',
  // ],

  alias: {
    '@': resolve(__dirname, './')
  },
  css: ["~/assets/main.css"],
  devtools: { enabled: true },
  buildModules: [
    '@nuxtjs/style-resources',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },

})

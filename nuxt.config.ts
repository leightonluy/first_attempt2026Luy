// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
})

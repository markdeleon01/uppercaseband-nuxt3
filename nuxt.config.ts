// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  modules: ['@pinia/nuxt', '@nuxt/test-utils/module'],
  devtools: { enabled: true }
})

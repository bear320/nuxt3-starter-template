// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@vueuse/nuxt', '@nuxtjs/color-mode', '@vite-pwa/nuxt'],
  typescript: {
    typeCheck: true
  },
  pwa: {
    /* PWA options */
  }
});

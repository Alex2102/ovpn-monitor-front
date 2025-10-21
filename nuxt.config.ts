// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true},
    modules: [
        '@pinia/nuxt',
        '@nuxtjs/tailwindcss'
    ],
    typescript: {
        typeCheck: true,
        strict: true,
    },
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config',
        exposeConfig: false,
        viewer: true,
    },
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: false },
    modules: [
        '@pinia/nuxt',
        '@nuxtjs/tailwindcss',
        [
            '@vee-validate/nuxt',
            {
                autoImports: true,
            },
        ],
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
    runtimeConfig: {
        public: {
            apiUrl: process.env.NUXT_API_URL || 'http://localhost:3000/api',
        },
    }
});

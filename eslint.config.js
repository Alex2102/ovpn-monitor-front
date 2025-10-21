import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

//todo::Не переопределяются правила
export default createConfigForNuxt({
    features: {
    //     // Отключаем правила для однословных компонентов
        componentNames: false,
        typeChecking: false
    },
    rules: {
        'vue/multi-word-component-names': 0,
        'vue/no-unused-properties': 'off'
    },
    ignores: [
        'dist/**',
        '.nuxt/**',
        'node_modules/**',
        '*.min.*'
    ],
    overrides: [
        {
            files: ['**/*.vue'],
            rules: {
                'vue/multi-word-component-names': 0,
            }
        }
    ]
})
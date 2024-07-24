import vuetify, {transformAssetUrls} from 'vite-plugin-vuetify'

export default defineNuxtConfig({
    server: {
        port: 3000,
        host: '0.0.0.0'
    },
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    build: {
        transpile: ['vuetify'],
    },
    modules: [
        (_options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', (config) => {
                // @ts-expect-error
                config.plugins.push(vuetify({autoImport: true}))
            })
        },
        '@nuxtjs/tailwindcss'
    ],
    vite: {
        vue: {
            template: {
                transformAssetUrls,
            },
        },
    },
    css: ['~/assets/css/main.scss'],
    app: {
        pageTransition: {
            name: 'page',
            mode: 'out-in' // default
        },
        layoutTransition: {
            name: 'slide',
            mode: 'out-in' // default
        }
    },
    serverMiddleware: [
        { path: '/api/folders', handler: '~/server/api/folders.js' },
        { path: '/api/files', handler: '~/server/api/files.js' },
        { path: '/api/rename', handler: '~/server/api/rename.js' }
    ],

})

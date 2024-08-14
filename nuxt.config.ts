import vuetify, {transformAssetUrls} from 'vite-plugin-vuetify'

export default defineNuxtConfig({

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
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Videos'
        }
    },
    serverMiddleware: [
        { path: '/api/folders', handler: '~/server/api/folders.js' },
        { path: '/api/files', handler: '~/server/api/files.js' },
        { path: '/api/rename', handler: '~/server/api/rename.js' }
    ],
     // other configs
    server: {
        port: 8000,
        host: '0.0.0.0',
    },
})

import path from 'node:path'

import { loadEnv } from 'vite'

import vuePlugin from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import vueSvgPlugin from 'vite-svg-loader'
import WindiCSS from 'vite-plugin-windicss'
import { createHtmlPlugin } from 'vite-plugin-html'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'

// import VueMacros from 'unplugin-vue-macros/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createStyleImportPlugin, AndDesignVueResolve, VantResolve, ElementPlusResolve, NutuiResolve, AntdResolve } from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default ({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

    const config = {
        css: {
            preprocessorOptions: {
                less: {
                    javascriptEnabled: true
                }
            }
        },
        plugins: [
            createHtmlPlugin({
                inject: {
                    data: {
                        VITE_APP_ENV: process.env.VITE_APP_ENV,
                        VITE_APP_API_DOMAIN: process.env.VITE_APP_API_DOMAIN,
                        VITE_APP_API: process.env.VITE_APP_API,
                        MODE: mode
                    }
                }
            }),
            vuePlugin({
                reactivityTransform: true,
                template: {
                    compilerOptions: {
                        isCustomElement: tag => ['def'].includes(tag)
                    }
                }
            }),
            vueJsx(),
            vueSetupExtend(),
            vueSvgPlugin(),
            AutoImport({
                eslintrc: {
                    enabled: true
                },
                include: [
                    /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
                    /\.vue$/,
                    /\.vue\?vue/, // .vue
                    /\.md$/ // .md
                ],
                imports: [
                    'vue',
                    'vue-router',
                    '@vueuse/core',
                    '@vueuse/head',
                    {
                        pinia: ['defineStore', 'storeToRefs'],
                        'vue-router': ['createRouter', 'createWebHashHistory'],
                        '@/utils': ['UTC2Date', 'deepClone']
                    }
                ],
                dirs: ['src/components', 'src/echarts', 'src/pinia', 'src/mixins'],

                resolvers: [ElementPlusResolver()],
                vueTemplate: true,
                cache: false
            }),
            Components({
                include: [
                    /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
                    /\.vue$/,
                    /\.vue\?vue/, // .vue
                    /\.md$/ // .md
                ],
                resolvers: [ElementPlusResolver()]
            }),
            createStyleImportPlugin({
                resolves: [AndDesignVueResolve(), VantResolve(), ElementPlusResolve(), NutuiResolve(), AntdResolve()],
                libs: []
            }),
            WindiCSS({
                safelist: 'prose prose-sm m-auto text-left'
            })
        ],
        resolve: {
            alias: {
                '@': path.join(__dirname, './src')
            }
        },

        base: './',
        build: {
            minify: true,
            assetsInlineLimit: 4096,
            chunkSizeWarningLimit: 1000,
            outDir: 'dist',
            rollupOptions: {
                input: {
                    main: path.resolve(__dirname, 'index.html')
                },
                external: /\.\/assets.*/
            }
        },
        server: {
            port: 7771,
            proxy: {
                '/api': {
                    target: 'http://php.mmxiaowu.com',
                    changeOrigin: true,
                    pathRewrite: {
                        '^/api': '/api'
                    }
                },
                '/safe': {
                    target: 'http://192.168.1.135:8091',
                    changeOrigin: true,
                    pathRewrite: {
                        '^/safe': '/safe'
                    }
                }
            }
        }
    }
    return config
}

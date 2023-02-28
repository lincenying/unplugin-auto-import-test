import { createRouter, createWebHashHistory } from 'vue-router'

const pages = import.meta.glob('../pages/*.vue')

let routes = Object.keys(pages).map(path => {
    const name = path.match(/\.\/pages(.*)\.vue$/)[1].toLowerCase()
    return {
        name: name.replace('/', ''),
        path: name === '/home' ? '/' : name,
        component: pages[path] // () => import('./pages/*.vue')
    }
})

routes = routes.concat([
    {
        path: '/',
        redirect: '/vue3-test'
    },
    { path: '/:pathMatch(.*)', redirect: '/' }
])

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router

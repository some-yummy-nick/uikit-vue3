import {createRouter, createWebHistory} from 'vue-router'

import Index from '@/views/Index.vue'

const Typography = () => import('@/views/Typography.vue')
const Button = () => import('@/views/Button.vue')

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/typography',
            name: 'Typography',
            component: Typography
        },
        {
            path: '/button',
            name: 'Button',
            component: Button
        }
    ]
})

export default router;
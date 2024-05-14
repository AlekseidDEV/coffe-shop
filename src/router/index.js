import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import OurCoffeVue from '@/views/OurCoffe.vue'
import GoodsPage from '@/views/GoodsPage.vue'
import ContactUs from '@/views/ContactUs.vue'
import ThanksPage from '@/views/ThanksPage.vue'
import GoodItem from '@/views/GoodItem.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home, 
            name: 'Home'
        },
        {
            path: '/our-coffe',
            name: 'OurCoffe',
            component: OurCoffeVue, 
        },
        {
            path: '/goods',
            name: 'Goods',
            component: GoodsPage, 
        },
        {
            path: '/contact-us',
            name: 'Contact',
            component: ContactUs, 
        },
        {
            path: '/thanks-page',
            name: 'Thanks',
            component: ThanksPage,
        },
        {
            path: '/our-coffe/item:id',
            name: 'item-coffe',
            component: GoodItem,
        },
        {
            path: '/goods-item:id',
            name: 'item-goods',
            component: GoodItem,
        },
    ]
})

export default router
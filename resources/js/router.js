import Vue from 'vue';
import VueRouter from 'vue-router';

import AnaSayfa from './sayfalar/AnaSayfa.vue';
import Hakkinda from './sayfalar/Hakkinda.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'ana-sayfa',
            component: AnaSayfa
        },
        {
            path: '/hakkinda',
            name: 'hakkinda',
            component: Hakkinda
        },
    ]
});

export default router;

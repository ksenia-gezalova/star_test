import Vue from 'vue';
import Router from 'vue-router';
import Ships from './components/Ships.vue'
import ShipCard from './components/ShipCard.vue'

Vue.use(Router);

const router = new Router({
    routes: [{
            path: '/',
            name: 'ships',
            component: Ships
        },
        {
            path: '/ship',
            name: 'ship',
            component: ShipCard
        }
    ]
});

router.beforeEach(function (to, from, next) {
    window.scrollTo(0, 0);
    next();
});

export default router;
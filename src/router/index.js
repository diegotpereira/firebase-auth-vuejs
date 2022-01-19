import Vue from "vue";
import VueRouter from "vue-router";
import Entrar from '../components/Entrar.vue'
import Registrar from '../components/Registrar.vue'
import Painel from '../components/Painel.vue'

Vue.use(VueRouter);

const routes = [

    {
        path: '/entrar',
        name: 'entrar',
        component: Entrar
    },
    {
        path: "/registrar",
        name: "Registrar",
        component: Registrar,
    },
    {
        path: "/painel",
        name: "Painel",
        component: Painel
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
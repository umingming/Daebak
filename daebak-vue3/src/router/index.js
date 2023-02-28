import { createWebHistory, createRouter } from "vue-router";
import MainView from "../views/MainView.vue";

const routes = [
    {
        path: "/main",
        name: "MainView",
        component: MainView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
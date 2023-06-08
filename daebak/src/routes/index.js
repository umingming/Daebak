import Vue from "vue";
import VueRouter from "vue-router";
import MainView from "../views/MainView.vue";
import LoginView from "../views/LoginView.vue";
import BoardView from "../views/BoardView.vue";
import LoginNaverView from "../views/LoginNaverView.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            redirect: "/login",
        },
        {
            path: "/login",
            name: "login",
            component: LoginView,
            beforeEnter(to, from, next) {
                const isLoggedIn = sessionStorage.getItem("loggedIn");
                if (isLoggedIn) {
                    next("/main");
                } else {
                    next();
                }
            },
        },
        {
            path: "/login/naver",
            name: "naver",
            component: LoginNaverView,
        },
        {
            path: "/main",
            name: "main",
            component: MainView,
        },
        {
            path: "/board",
            name: "board",
            component: BoardView,
        },
    ],
});

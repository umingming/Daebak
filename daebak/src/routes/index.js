import Vue from 'vue'; 
import VueRouter from 'vue-router';
import LoginView from '../views/LoginView.vue';
import MainView from '../views/MainView.vue';

Vue.use(VueRouter);

export const router = new VueRouter({  
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/login',
        },
        {
            path: '/login', 
            name: "login",
            component: LoginView, 
        },
        {
            path: '/main', 
            name: "main",
            component: MainView, 
        }
    ]
});
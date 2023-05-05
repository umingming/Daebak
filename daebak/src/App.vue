<template>
    <div id="app">
        <router-link to="/main">
            <div class="header" :class="$route.name">
                <img src="@/assets/daebak.png" />대박나라
            </div>
        </router-link>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: "App",
    created() {
        this.initKakao();
    },
    mounted() {
        this.FETCH_ORDERS();
    },
    methods: {
        ...mapActions("order", ["FETCH_ORDERS"]),
        initKakao() {
            window.Kakao.init("ddd04c05d8377d46d25230329657ea11");
        },
    },
};
</script>
<style scoped>
#app {
    width: 1200px;
    height: 96vh;
    /* overflow: hidden; */
    margin: 0 auto;
}
a {
    text-decoration: none;
}
.header {
    font-size: 55px;
    color: rgb(255, 123, 0);
    text-align: center;
    margin: 25px auto;
    transform: translateY(-5px);
    font-family: "Black Han Sans", sans-serif;
}
.header.login {
    margin-top: 100px;
}
.header img {
    width: 50px;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>

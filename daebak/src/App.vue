<template>
    <div id="app">
        <router-link to="/main">
            <div class="header" :class="$route.name">
                대박나라<img src="@/assets/money.png" />
            </div>
        </router-link>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
        <modal-success></modal-success>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import ModalSuccess from "./components/common/modal/ModalSuccess.vue";
export default {
    name: "App",
    components: {
        ModalSuccess,
    },
    created() {
        const userId = sessionStorage.getItem("user_id");

        const path = userId ? "main" : "login";
        this.$router.push(`/${path}`);
    },
    mounted() {
        this.FETCH_ORDERS();
    },
    methods: {
        ...mapActions("order", ["FETCH_ORDERS"]),
    },
};
</script>
<style scoped>
#app {
    width: 1200px;
    height: 96vh;
    /* overflow: hidden !important; */
    margin: 0 auto;
}
a {
    text-decoration: none;
}
.header {
    font-size: 58px;
    font-weight: 700;
    letter-spacing: 4px;
    color: rgb(255, 123, 0);
    text-align: center;
    margin: 25px auto;
    transform: translateY(-5px);
    font-family: "Do Hyeon", "Black Han Sans", sans-serif;
}
.header.login {
    margin-top: 100px;
}
.header img {
    width: 50px;
    transform: translateX(5px) translateY(6px);
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

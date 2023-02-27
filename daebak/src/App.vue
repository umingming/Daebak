<template>
    <div id="app">
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>

export default {
    name: "App",
    created() {
        this.initKakao();
    },
    methods: {
        initKakao() {
            window.Kakao.init('ddd04c05d8377d46d25230329657ea11');
        }
    }
};
</script>
<style scoped>
#app {
    width: 1200px;
    margin: 0 auto;
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
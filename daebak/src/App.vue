<template>
    <div id="app">
        <div class="title">💸대박나라💸</div>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>

export default {
    name: "App",
};
</script>
<style scoped>
#app {
    width: 1200px;
    height: 97vh;
    overflow: hidden;
    margin: 0 auto;
    background: rgba(194, 194, 194, 0.295);
}
.title {
    font-size: 50px;
    font-weight: bolder;
    color: rgb(255, 123, 0);
    text-align: center;
    margin: 30px auto;
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
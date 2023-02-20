<template>
    <div id="app">
        <login-view>
        </login-view>
    </div>
</template>

<script>
import LoginView from "./view/LoginView.vue";

export default {
    name: "App",
    components: {
        LoginView,
    },
};
</script>
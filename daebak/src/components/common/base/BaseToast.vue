<template>
    <div>
        <b-toast id="my-toast" :variant="getToastType" :title="title" solid>
            {{ getToastContent }}
        </b-toast>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters(["getToastType", "getToastContent"]),
        title() {
            const toPascal = (text) =>
                text.replace(/^[a-z]/, (i) => i.toUpperCase());
            return toPascal(this.getToastType);
        },
    },
};
</script>

<style></style>

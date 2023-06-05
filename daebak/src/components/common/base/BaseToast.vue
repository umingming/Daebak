<template>
    <div>
        <b-toast id="my-toast" :variant="type" :title="type" solid>
            {{ content }}
        </b-toast>
    </div>
</template>

<script>
import modalMixin from "@/mixins/modalMixin.js";
export default {
    mixins: [modalMixin],
};
</script>

<style></style>

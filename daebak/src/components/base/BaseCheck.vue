<template>
    <div>
        <input
            type="checkbox"
            :id="checkId"
            :value="value"
            @click="updateValue"
        />
        <label :for="checkId">
            <i class="fa-solid fa-check"></i>
        </label>
    </div>
</template>

<script>
export default {
    props: {
        value: { type: Boolean, default: false },
        checkId: { type: Number, default: -1 },
    },
    methods: {
        updateValue({ target }) {
            this.$emit("input", target.checked);
        },
    },
};
</script>

<style></style>

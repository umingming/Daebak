<template>
    <div class="base-check">
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
        id: { type: String },
        value: { type: Boolean, default: false },
    },
    computed: {
        checkId() {
            return this.id || `check-${this._uid}`;
        },
    },
    methods: {
        updateValue({ target }) {
            this.$emit("input", target.checked);
        },
    },
};
</script>

<style></style>

<template>
    <div>
        <input
            type="checkbox"
            id="all-check"
            v-model="isChecked"
            @click="checkAll"
        />
        <label for="all-check">
            <i class="fa-solid fa-check"></i>
        </label>
    </div>
</template>

<script>
export default {
    props: {
        isChecked: { type: Boolean, required: true },
    },
};
</script>

<style></style>

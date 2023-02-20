<template>
    <div>
        <div class="title">💸대박나라💸</div>
        <main-chart></main-chart>
    </div>
</template>

<script>
import MainChart from "@/components/MainChart.vue";
export default {
	components: {
        MainChart,
    }
};
</script>

<style scoped>
.title {
    font-size: 50px;
    font-weight: bolder;
    color: rgb(255, 123, 0);
    text-align: center;
    margin-top: 50px;
    margin-bottom: 30px;
}
</style>
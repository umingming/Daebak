<template>
    <div id="main-view" class="wrapper">
        <main-banner
            v-for="type in bannerTypes"
            :key="type"
            :type="type"
        ></main-banner>
        <chart-price></chart-price>
        <chart-quantity-avg></chart-quantity-avg>
        <chart-quantity-rate></chart-quantity-rate>
        <main-table></main-table>
    </div>
</template>

<script>
import MainBanner from "@/components/main/MainBanner.vue";
import ChartPrice from "@/components/chart/ChartPrice.vue";
import ChartQuantityAvg from "@/components/chart/ChartQuantityAvg.vue";
import ChartQuantityRate from "@/components/chart/ChartQuantityRate.vue";
import MainTable from "@/components/main/MainTable.vue";

export default {
    components: {
        ChartPrice,
        MainBanner,
        ChartQuantityAvg,
        ChartQuantityRate,
        MainTable,
    },
    data() {
        return {
            bannerTypes: ["value", "amount"],
        };
    },
};
</script>

<style scoped></style>

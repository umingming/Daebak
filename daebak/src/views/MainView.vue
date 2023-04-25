<template>
    <div id="main-view" class="wrapper">
        <main-banner v-for="type in bannerTypes" :key="type" :type="type">
        </main-banner>
        <chart-price></chart-price>
        <!-- <chart-quantity-avg></chart-quantity-avg>
        <chart-quantity-rate></chart-quantity-rate>
        <main-board></main-board> -->
    </div>
</template>

<script>
import MainBanner from "@/components/main/MainBanner.vue";
import ChartPrice from "@/components/chart/ChartPrice.vue";
// import ChartQuantityAvg from "@/components/chart/ChartQuantityAvg.vue";
// import ChartQuantityRate from "@/components/chart/ChartQuantityRate.vue";
// import MainBoard from "@/components/main/MainBoard.vue";

import orderMixin from "@/mixins/orderMixin.js";

export default {
    components: {
        ChartPrice,
        MainBanner,
        // ChartQuantityAvg,
        // ChartQuantityRate,
        // MainBoard,
    },
    mixins: [orderMixin],
    data() {
        return {
            bannerTypes: ["value", "amount"],
        };
    },
};
</script>

<style scoped></style>

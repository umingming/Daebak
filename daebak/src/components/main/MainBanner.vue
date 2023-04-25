<template>
    <div class="main-banner">
        <h3 data-test="title">{{ title }}</h3>
        <div class="icon">
            <i :class="icon"></i>
        </div>
        <div class="number">
            <animated-number
                :duration="1000"
                :delay="10"
                :value="valueTotal"
                :formatValue="formatValue"
            ></animated-number>
            <small data-test="increment">
                <i class="fa-solid fa-arrow-up-long"></i>
                {{ valueIncrement }}
            </small>
        </div>
    </div>
</template>

<script>
import AnimatedNumber from "animated-number-vue";
import orderMixin from "@/mixins/orderMixin.js";
import { BANNER } from "@/constants/main.js";
import { ICON } from "@/constants/common.js";

export default {
    components: {
        AnimatedNumber,
    },
    mixins: [orderMixin],
    props: {
        type: { type: String, default: "" },
        month: { type: String, default: "0" },
    },
    computed: {
        title() {
            return `${this.month}월 총 ${BANNER[this.type]}`;
        },
        icon() {
            return ICON[this.type];
        },
        values() {
            return this.currentMonthValues(this.type);
        },
        valueTotal() {
            const total =
                this.values?.reduce((acc, curr) => acc + (+curr || 0), 0) || 0;
            return total;
        },
        valueIncrement() {
            const increment = this.values?.at(-1) - this.values?.at(-2) || 0;
            return this.formatValue(increment);
        },
    },
};
</script>
<style scoped>
.number {
    position: relative;
    z-index: 100;
}
.chart {
    position: relative;
    z-index: 1;
    width: 200px !important;
}
</style>

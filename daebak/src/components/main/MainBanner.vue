<template>
    <div class="main-banner">
        <h3 data-test="title">{{ title }}</h3>
        <div class="icon">
            <slot name="icon"></slot>
        </div>
        <div class="number">
            <animated-number
                :duration="1000"
                :delay="10"
                :value="value"
                :formatValue="formatNumber"
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

import * as MAIN from "@/constants/main.js";

export default {
    components: {
        AnimatedNumber,
    },
    props: {
        type: { type: String, default: "" },
        month: { type: String, default: "0" },
        value: { type: Number, default: 0 },
        lastValue: { type: Number, default: 0 },
    },
    computed: {
        title() {
            return `${this.month}월 총 ${MAIN[this.type]}`;
        },
        valueIncrement() {
            const increment = this.value - this.lastValue;
            return this.formatNumber(increment);
        },
    },
    methods: {
        formatNumber(value) {
            return Math.round(value).toLocaleString();
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

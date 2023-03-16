<template>
    <div class="main-banner">
        <h3>{{ title }}</h3>
        <div class="icon">
            <slot name="icon"></slot>
        </div>
        <div class="number">
            <animated-number
                :duration="1000"
                :delay="10"
                :value="valueTotal"
                :formatValue="formatNumber"
            ></animated-number>
            <small>
                <i class="fa-solid fa-arrow-up-long"></i>
                {{ valueIncrement }}
            </small>
        </div>
    </div>
</template>

<script>
import AnimatedNumber from "animated-number-vue";

import { mapGetters } from "vuex";
import * as MAIN from "@/constants/main.js";
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    CategoryScale,
    PointElement,
} from "chart.js";

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    CategoryScale,
    PointElement
);

export default {
    components: {
        AnimatedNumber,
    },
    props: {
        type: { type: String, default: "" },
    },
    computed: {
        ...mapGetters("date", ["month", "year"]),
        ...mapGetters("order", ["valuesOfMonth"]),
        title() {
            return `${this.month}월 총 ${MAIN[this.type]}`;
        },
        valuesOfThisMonth() {
            return this.valuesOfMonth(this.month, this.type);
        },
        valueTotal() {
            const values = this.valuesOfThisMonth;
            return values.length
                ? values.reduce((sum, i) => sum + (i ?? 0))
                : 0;
        },
        valueIncrement() {
            const increment = this.valuesOfThisMonth.at(-1) ?? 0;
            return this.formatNumber(increment);
        },
    },
    methods: {
        formatNumber(value) {
            return (+value.toFixed()).toLocaleString();
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

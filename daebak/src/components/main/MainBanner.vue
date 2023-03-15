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
                <i
                    class="fa-solid fa-arrow-up-long"
                    :class="{ 'fa-arrow-down-long': averageFlag }"
                ></i>
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
        value: { type: Number, default: 0 },
    },
    computed: {
        ...mapGetters("date", ["month", "year"]),
        title() {
            return `${this.month} 총 ${MAIN[this.type]}`;
        },
        valuesOfThisMonth() {
            return this.valuesOfMonth(this.month, this.type);
        },
        valueTotal() {
            return this.valuesOfThisMonth.reduce((sum, i) => sum + (i ?? 0));
        },
        valueIncrement() {
            return this.valuesOfThisMonth.slice(-1).toLocaleString();
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

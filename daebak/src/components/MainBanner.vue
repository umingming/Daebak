<template>
    <div>
        <slot name="icon"></slot>
        <h3>{{ title }}</h3>
        <AnimatedNumber
            :duration="1000"
            :delay="10"
            :value="value"
            :formatValue="toPrice" 
        />
        <small>△500,000</small>
    </div>
</template>

<script>
import AnimatedNumber from "animated-number-vue";

export default {
    components: {
        AnimatedNumber
    },
    props: {
        value: { type: Number, default: 0 },
        type: { type: String, default: "" },
    },
    computed: {
        title() {
            return `${new Date().getMonth() + 1}월 ${this.type}`;
        }
    },
    methods: {
        toPrice(value) {
            return (+value.toFixed()).toLocaleString();
        },
    }
};
</script>
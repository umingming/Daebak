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
    props: {
        value: { type: Number, default: 0 },
        title: { type: String, default: "" },
    },
	components: {
        AnimatedNumber
    },
    methods: {
        toPrice(value) {
            return (+value.toFixed()).toLocaleString();
        },
    }
};
</script>
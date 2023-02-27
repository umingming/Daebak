<template>
    <div>
        <div class="title">💸대박나라💸</div>
        <main-chart
            @click="setDate"
        >
        </main-chart>
        <main-board></main-board>
    </div>
</template>

<script>
import MainChart from "@/components/MainChart.vue";
import MainBoard from "@/components/MainBoard.vue";
import { mapGetters } from "vuex";
export default {
	components: {
        MainChart,
        MainBoard,
    },
    computed: {
        ...mapGetters(["fetchedList"]),
    },
    created() {
        this.$store.dispatch("FETCH_LIST");
    },
    methods: {
        setDate(date) {
            console.log(date);
        }
    }
};
</script>

<style scoped>
.title {
    font-size: 50px;
    font-weight: bolder;
    color: rgb(255, 123, 0);
    text-align: center;
    margin: 30px auto;
}
</style>
<template>
    <div>
        <div class="title">💸대박나라💸</div>
        <budget-chart></budget-chart>
        <budget-board></budget-board>
    </div>
</template>

<script>
import BudgetChart from "@/components/BudgetChart.vue";
import BudgetBoard from "@/components/BudgetBoard.vue";
export default {
	components: {
        BudgetChart,
        BudgetBoard,
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
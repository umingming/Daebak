<template>
    <div>
        <div class="title">💸대박나라💸</div>
        <budget-chart></budget-chart>
        <budget-list></budget-list>
    </div>
</template>

<script>
import BudgetChart from "@/components/BudgetChart.vue";
import BudgetList from "@/components/BudgetList.vue";
export default {
	components: {
        BudgetChart,
        BudgetList,
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
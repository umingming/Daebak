<template>
    <div class="budget-add">
        <div class="add-item">
            <budget-item :checkItem="checkItem" @apply="addItem"> </budget-item>
        </div>
        <div class="add-list">
            <budget-table
                :items="listItems"
                :isModal="true"
                @delete="deleteItem"
            >
            </budget-table>
        </div>
        <div class="btn">
            <button @click="$emit('close')">취소</button>
            <button @click="addBudget">확인</button>
        </div>
    </div>
</template>

<script>
import BudgetTable from "@/components/BudgetTable.vue";
import BudgetItem from "@/components/BudgetItem.vue";
import { createOrders } from "@/api";

export default {
    props: {
        checkItem: { type: Object },
    },
    components: {
        BudgetTable,
        BudgetItem,
    },
    data() {
        return {
            addItems: [],
        };
    },
    computed: {
        listItems() {
            let items = [...this.addItems];
            items.forEach((i) => (i.check = true));
            return items;
        },
    },
    methods: {
        addItem(item) {
            this.addItems = [...this.addItems, item];
        },
        deleteItem(index) {
            this.addItems.splice(index, 1);
        },
        addBudget() {
            const param = this.addItems.map((i) => {
                return {
                    quantity: i.amount,
                    type: i.cate,
                    orderDate: i.date,
                    price: i.value,
                    content: i.title,
                };
            });
            createOrders(param);
            this.$emit("close");
        },
    },
};
</script>

<style scoped>
.budget-add {
    position: absolute;
    top: 250px;
    left: 50%;
    transform: translateX(-50%);
    width: 900px;
    height: 300px;
    padding: 20px 20px;
    background: white;
    border-radius: 5px;
    border: 1px solid #7575753e;
    font-size: 15px;
    z-index: 1;
}
.budget-add .btn-icon {
    transform: translateX(110px) translateY(20px);
    width: 80px;
}
.budget-add .btn-icon button {
    width: 28px;
    height: 20px;
    border-radius: 3px;
}
.budget-add .btn-icon button i {
    font-size: 16px;
}
.budget-add .add-item {
    float: left;
    width: 200px;
    height: 70%;
    margin-top: 10px;
    border-right: 1px solid #7575753e;
}
.budget-add .add-list {
    float: left;
    width: 660px;
    height: 90%;
    transform: translateX(15px);
    margin-left: 10px;
    overflow: scroll;
}
.add-list #budget-table table th,
.add-list #budget-table table td {
    width: 19% !important;
}

.btn {
    position: absolute;
    width: 95%;
    bottom: 10px;
    margin: 0 auto;
}
.btn button {
    font-size: 20px;
    width: 60px;
    height: 30px;
    font-weight: bolder;
    display: inline-block;
}
.btn button:nth-child(2) {
    float: right;
    transform: translateX(-5px);
}
</style>

<template>
    <div class="budget-add">
        <div class="add-item">
            <div>
                <span>날짜</span>
                <input
                    type="date"
                    id="date"
                    @input="updateItem"
                >
            </div>
            <div>
                <span>내용</span>
                <input
                    type="text"
                    id="title"
                    @input="updateItem"
                >
            </div>
            <div>
                <span>금액</span>
                <input
                    type="price"
                    id="value"
                    @input="updateItem"
                >
            </div>
            <div>
                <span>주문</span>
                <input 
                    type="number"
                    id="amount"
                    @input="updateItem"
                >
            </div>
            <div>
                <span>분류</span>
                <select 
                    name="type"
                    id="cate"
                    @input="updateItem"
                >
                    <option value="배민">배민</option>
                    <option value="매장">매장</option>
                </select>
            </div>
        </div>
        <div class="add-list">
            <budget-table :items="addItems"></budget-table>
        </div>
        <div class="btn">
            <button @click="$emit('close')">취소</button>
            <button @click="$emit('ok')">확인</button>
        </div>
    </div>
</template>

<script>
import BudgetTable from "@/components/BudgetTable.vue";

export default {
    components: {
        BudgetTable
    },
    data() {
        return {
            header: {
                date: "날짜",
                title: "내용",
                value: "금액",
                amount: "주문",
                cate: "분류"
            },
            sortKey: "",
            isAscending: false,
            addItems: [],
        }
    },
    methods: {
        updateItem({target}) {
            this.$emit("updateItem", target.id, target.value);
        }
    }
};
</script>

<style scoped>
.budget-add {
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translateX(-50%);
    width: 800px;
    height: 300px;
    padding: 20px 20px;
    background: white;
    border-radius: 5px;
    border: 1px solid #7575753e;
    font-size: 15px;
    z-index: 1;
}
.budget-add .add-item {
    float: left;
    width: 200px;
    height: 80%;
    padding-top: 30px;
    border-right: 1px solid #7575753e;
}
.budget-add .add-item div {
    height: 34px;
}
.budget-add .add-item span {
    font-weight: bolder;
    letter-spacing: 10px;
}
.budget-add .add-item input::-webkit-calendar-picker-indicator {
    background: #000;
    width: 10%;
    height: 60%;
    transform: translateX(-3px);
    background: url(../../public/img/btnCalendar.png) center/cover;
}
.budget-add .add-item input {
    position: relative;
    margin-left: 5px;
    line-height: 10px;
    height: 20px;
    width: 120px;
    top: -2px;
    padding-left: 5px;
    font-family: 'Noto Sans KR', sans-serif;
    border: 1px solid #b4b4b4;
    border-radius: 3px;
}
.budget-add .add-item input:focus {
    outline: 0px;
}
.budget-add .add-item select {
    font-family: 'Noto Sans KR', sans-serif;
    position: relative;
    margin-left: 4px;
    height: 23px;
    width: 128px;
    top: -2px;
    font-size: 13px;
    border: 1px solid #b4b4b4;
    border-radius: 3px;
}
.budget-add .add-list {
    float: left;
    width: 560px;
    transform: translateX(15px);
    margin-left: 10px;
}
.add-list #budget-table table th,
.add-list #budget-table table td{
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
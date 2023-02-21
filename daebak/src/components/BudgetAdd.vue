<template>
    <div class="budget-add">
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
</template>

<script>
export default {
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
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 300px;
    height: 180px;
    padding: 10px 20px;
    background: white;
    border-radius: 5px;
    border: 1px solid #7575753e;
}
</style>
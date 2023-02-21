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
        <div class="btn">
            <button @click="$emit('close')">취소</button>
            <button @click="$emit('ok')">확인</button>
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
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    width: 300px;
    height: 200px;
    padding: 20px 20px;
    background: white;
    border-radius: 5px;
    border: 1px solid #7575753e;
    font-size: 20px;
}
.budget-add div {
    height: 34px;
}
.budget-add span {
    margin-left: 10px;
    font-weight: bolder;
}
.budget-add input {
    position: relative;
    margin-left: 20px;
    height: 22px;
    width: 200px;
    top: -3px;
    padding-left: 5px;
    font-size: 16px;
}
.budget-add input:focus {
    outline: 0px;
}
.budget-add select {
    position: relative;
    margin-left: 20px;
    height: 25px;
    width: 209px;
    top: -4px;
    font-size: 16px;
}

.btn {
    position: relative;
    width: 95%;
    margin: 0 auto;
    transform: translateY(5px);
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
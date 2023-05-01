<template>
    <div class="budget-item">
        <div>
            <span>날짜</span>
            <input type="date" id="date" v-model="item.date" />
        </div>
        <div>
            <span>내용</span>
            <input type="text" id="title" v-model="item.title" />
        </div>
        <div>
            <span>금액</span>
            <input
                type="number"
                id="value"
                step="1000"
                min="0"
                :value="item.value"
                @input="checkNumber"
            />
        </div>
        <div>
            <span>주문</span>
            <input
                type="number"
                id="amount"
                min="1"
                :value="item.amount"
                @input="checkNumber"
            />
        </div>
        <div>
            <span>분류</span>
            <select name="type" id="cate" v-model="item.cate">
                <option value="배달의민족">배달의민족</option>
                <option value="요기요">요기요</option>
                <option value="쿠팡이츠">쿠팡이츠</option>
                <option value="배달특급">배달특급</option>
                <option value="기타">기타</option>
            </select>
        </div>
        <div class="btn-icon">
            <button class="btn-refresh" @click="resetItem">
                <i class="fa-solid fa-arrow-rotate-right"></i>
            </button>
            <button class="btn-add" @click="applyItem">
                <i class="fa-solid fa-square-plus"></i>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        checkedItem: { type: Object },
    },
    data() {
        return {
            item: { ...this.checkedItem },
        };
    },
    methods: {
        checkNumber({ data, target }) {
            let { id, value } = target;

            if (data === "-") {
                target.value = this.item[id];
            } else {
                this.item[id] = +value;
            }
        },
        resetItem() {
            this.item = {};
            this.$emit("reset");
        },
        applyItem() {
            this.$emit("apply", { ...this.item });
        },
    },
};
</script>

<style scoped>
.budget-item {
    padding-top: 15px;
}
.budget-item div {
    height: 34px;
}
.budget-item span {
    font-weight: bolder;
    letter-spacing: 10px;
}
.budget-item input::-webkit-calendar-picker-indicator {
    background: #000;
    width: 10%;
    height: 60%;
    transform: translateX(-3px);
    background: url(../../../public/img/btnCalendar.png) center/cover;
}
.budget-item input {
    position: relative;
    margin-left: 5px;
    line-height: 10px;
    height: 20px;
    width: 120px;
    top: -2px;
    padding-left: 5px;
    font-family: "Noto Sans KR", sans-serif;
    border: 1px solid #b4b4b4;
    border-radius: 3px;
}
.budget-item input:focus {
    outline: 0px;
}
.budget-item select {
    font-family: "Noto Sans KR", sans-serif;
    position: relative;
    margin-left: 4px;
    height: 23px;
    width: 128px;
    top: -2px;
    font-size: 13px;
    border: 1px solid #b4b4b4;
    border-radius: 3px;
}
</style>

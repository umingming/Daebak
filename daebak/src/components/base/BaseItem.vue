<template>
    <div class="budget-item">
        <div>
            <base-check
                v-if="hasCheckBox"
                id="check-date"
                v-model="checkedField.date"
            ></base-check>
            <label for="check-date">날짜</label>
            <input type="date" id="date" v-model="item.date" />
        </div>
        <div>
            <base-check
                v-if="hasCheckBox"
                id="check-title"
                v-model="checkedField.title"
            ></base-check>
            <label for="check-title">내용</label>
            <input type="text" id="title" v-model="item.title" />
        </div>
        <div>
            <base-check
                v-if="hasCheckBox"
                id="check-value"
                v-model="checkedField.value"
            ></base-check>
            <label for="check-value">금액</label>
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
            <base-check
                v-if="hasCheckBox"
                id="check-amount"
                v-model="checkedField.amount"
            ></base-check>
            <label for="check-amount">주문</label>
            <input
                type="number"
                id="amount"
                min="1"
                :value="item.amount"
                @input="checkNumber"
            />
        </div>
        <div>
            <base-check
                v-if="hasCheckBox"
                id="check-cate"
                v-model="checkedField.cate"
            ></base-check>
            <label for="check-cate">분류</label>
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
                <i class="fa-solid fa-circle-check"></i>
            </button>
        </div>
    </div>
</template>

<script>
import BaseCheck from "@/components/base/BaseCheck.vue";
export default {
    components: {
        BaseCheck,
    },
    props: {
        checkedItem: { type: Object },
        hasCheckBox: { type: Boolean, default: false },
    },
    data() {
        return {
            item: { ...this.checkedItem },
            checkedField: {},
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
            this.checkedField = {};
            const $checkboxes = this.$el.querySelectorAll(
                "input[type=checkbox]"
            );
            $checkboxes.forEach((i) => (i.checked = false));
            this.$emit("reset");
        },
        applyItem() {
            const newItem = this.hasCheckBox
                ? this.getCheckedItem()
                : this.item;
            this.$emit("apply", newItem);
        },
        getCheckedItem() {
            const checkedItem = {};
            Object.keys(this.checkedField)
                .filter((i) => this.checkedField[i])
                .forEach((i) => (checkedItem[i] = this.item[i]));
            return checkedItem;
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
.budget-item label {
    font-weight: bolder;
    letter-spacing: 10px;
    cursor: pointer !important;
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
::v-deep .base-check {
    display: inline-block;
    transform: translateX(-5px);
}
::v-deep .base-check i {
    transform: translateX(1px) translateY(-7px);
}
</style>

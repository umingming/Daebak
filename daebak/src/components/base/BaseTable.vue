<template>
    <div class="base-table">
        <div id="budget-table">
            <table>
                <tr v-if="hasHeader" id="table-header">
                    <th class="col-check" v-if="hasCheckBox">
                        <base-check
                            :value="isCheckedAll"
                            @input="checkAll"
                        ></base-check>
                    </th>
                    <th v-else-if="isModal" class="col-delete"></th>
                    <th
                        v-for="(value, key) in header"
                        :key="key"
                        :id="key"
                        @click="sortTableItems(key)"
                    >
                        <span>{{ value }}</span>
                        <i
                            class="fa-solid"
                            :class="[
                                { sorting: sortKey === key },
                                { 'fa-angle-up': isAscending },
                                { 'fa-angle-down': !isAscending },
                            ]"
                        >
                        </i>
                    </th>
                </tr>
                <slot name="table-body">
                    <tr v-for="(item, index) in pageItems" :key="index">
                        <td class="col-check" v-if="hasCheckBox">
                            <base-check v-model="item.checked"></base-check>
                        </td>
                        <td v-else-if="isModal" class="col-delete">
                            <button
                                class="btn-delete"
                                @click="deleteItem(index)"
                            >
                                <i class="fa-solid fa-xmark"></i>
                            </button>
                        </td>
                        <td id="date" ref="date">
                            {{ item.date }}<span></span>
                        </td>
                        <td id="cate" ref="cate">
                            <img :src="typeImage(item.cate)" /><span></span>
                        </td>
                        <td id="value" ref="value">
                            {{ itemPrice(item.value) }}<span></span>
                        </td>
                        <td id="amount" ref="amount">
                            {{ item.amount }}건<span></span>
                        </td>
                        <td id="title" ref="title">
                            {{ truncatedContent(item.title) }}<span></span>
                        </td>
                    </tr>
                </slot>
            </table>
        </div>
        <div class="pagination" v-if="hasPagination">
            <button @click="setIndex(1)">
                <i class="fa-solid fa-angles-left"></i>
            </button>
            <button @click="decreaseIndex">
                <i class="fa-solid fa-angle-left"></i>
            </button>
            <ul>
                <li
                    v-for="index in pageCount"
                    :key="index"
                    :class="{ 'page-index': pageIndex + 1 === index }"
                    @click="setIndex(index)"
                >
                    <span>{{ index }}</span>
                </li>
            </ul>
            <button @click="increaseIndex">
                <i class="fa-solid fa-angle-right"></i>
            </button>
            <button @click="setIndex(pageCount)">
                <i class="fa-solid fa-angles-right"></i>
            </button>
        </div>
    </div>
</template>

<script>
import BaseCheck from "@/components/base/BaseCheck.vue";
import { TYPES } from "@/constants/order.js";
export default {
    components: {
        BaseCheck,
    },
    props: {
        items: { type: Array },
        hasPagination: { type: Boolean, default: false },
        isModal: { type: Boolean, default: false },
        hasCheckBox: { type: Boolean, default: false },
        hasHeader: { type: Boolean, default: true },
        pageSize: { type: Number, default: 15 },
        maxContentLength: { type: Number, default: 10 },
    },
    data() {
        return {
            header: {
                date: "날짜",
                cate: "분류",
                value: "금액",
                amount: "주문",
                title: "내용",
            },
            sortKey: "",
            isAscending: false,
            pageIndex: 0,
            isCheckedAll: false,
            checkItems: [],
            tableItems: [...this.items],
        };
    },
    computed: {
        pageCount() {
            return Math.ceil(this.tableItems.length / this.pageSize);
        },
        startIndex() {
            return this.pageIndex * this.pageSize;
        },
        endIndex() {
            return this.startIndex + this.pageSize;
        },
        pageItems() {
            if (!this.hasPagination) return this.tableItems;
            return this.tableItems.slice(this.startIndex, this.endIndex);
        },
        itemPrice() {
            return (value) => {
                let price = value
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                return `${price}원`;
            };
        },
        itemIndex() {
            return (index) => {
                return this.startIndex + index;
            };
        },
        typeImage() {
            return (name) => {
                const { img } = TYPES.find((i) => i.name === name) ?? {};
                return img;
            };
        },
        truncatedContent() {
            const truncateText = (text) => {
                return text.length > this.maxContentLength
                    ? `${text.slice(0, this.maxContentLength - 1)}...`
                    : text;
            };
            return (text) => truncateText(text);
        },
    },
    watch: {
        pageIndex() {
            const checked = false;
            this.tableItems.map((i) => (i.checked = checked));
            this.checkAll(checked);
        },
        items() {
            this.tableItems = [...this.items];
        },
    },
    methods: {
        applyCheckItems() {
            this.$refs.check?.forEach((item, i) => {
                let index = this.itemIndex(i);
                item.checked = this.checkItems.includes(index);
            });
        },
        sortTableItems(key) {
            if (this.sortKey !== key) {
                this.sortKey = key;
                this.isAscending = false;
            }

            if (!this.isAscending) {
                this.tableItems = this.tableItems.sort((a, b) =>
                    (+a[key] || a[key]) > (+b[key] || b[key]) ? 1 : -1
                );
            } else {
                this.tableItems = this.tableItems.reverse();
            }
            this.isAscending = !this.isAscending;
        },
        increaseIndex() {
            if (this.pageIndex < this.pageCount - 1) {
                ++this.pageIndex;
            }
        },
        decreaseIndex() {
            if (this.pageIndex > 0) {
                --this.pageIndex;
            }
        },
        setIndex(value) {
            this.pageIndex = value - 1;
        },
        checkAll(checked) {
            this.isCheckedAll = checked;
            let inputList = this.$el.querySelectorAll(".col-check input");
            inputList.forEach((i) => {
                i.checked = this.isCheckedAll;
            });
            this.pageItems.map((i) => (i.checked = this.isCheckedAll));
        },
        deleteItem(index) {
            this.$emit("delete", index);
        },
    },
};
</script>

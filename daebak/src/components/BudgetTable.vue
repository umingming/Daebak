<template>
    <div id="budget-table">
        <table>
            <tr>
                <th>
                    <input 
                        type="checkbox" 
                        @click="checkAll"
                        v-model="isCheckedAll"
                    >
                </th>
                <th 
                    v-for="(value, key) in header"
                    :key="key"
                    @click="sortTableItems(key)"
                >
                    <span>{{ value }}</span>
                    <i 
                        class="fa-solid"
                        :class="[
                            {'sorting': sortKey === key},
                            {'fa-angle-up': isAscending},
                            {'fa-angle-down': !isAscending},
                        ]"
                    >
                    </i>
                </th>
            </tr>
            <tr v-for="(item, index) in pageItems" :key="index">
                <td>
                    <input 
                        type="checkbox"
                        :value="index"
                        v-model="item.check"
                        @click="isCheckedAll = false"
                    >
                </td>
                <td>{{ item.date }}</td>
                <td>{{ item.title }}</td>
                <td>{{ itemPrice(item.value) }}</td>
                <td>{{ item.amount }}건</td>
                <td>{{ item.cate }}</td>
            </tr>
        </table>
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
                    :class="{'page-index' : (pageIndex + 1) === index}"
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
export default {
    props: {
        items: { type: Array },
        hasPagination: { type: Boolean, default: false}
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
            pageIndex: 0,
            pageSize: 15,
            tableItems: [],
            isCheckedAll: false,
            checkItems: [],
        }
    },
    computed: {
        pageCount() {
            return Math.ceil(this.tableItems.length / this.pageSize);
        },
        pageItems() {
            let start = this.pageIndex * this.pageSize;
            let end = start + this.pageSize;
            return this.tableItems.slice(start, end);
        },
        itemPrice() {
            return (value) => {
                let price = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                return `${price}원`;
            }
        },
        itemIndex() {
            return(index) => {
                return this.pageIndex * this.pageSize + index;
            }
        },
    },
    created() {
        this.tableItems = [ ...this.items ]
        this.tableItems.forEach(i => i.check = false);
    },
    methods: {
        applyCheckItems() {
            this.$refs.check?.forEach((item, i) => {
                let index = this.itemIndex(i);
                item.checked = this.checkItems.includes(index);
            })
        },
        sortTableItems(key) {
            if (this.sortKey !== key) {
                this.sortKey = key;
                this.isAscending = false;
            }

            if (!this.isAscending) {
                this.tableItems = this.tableItems.sort((a, b) => (+a[key] || a[key]) > (+b[key] || b[key]) ? 1 : -1);
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
        checkAll() {
            this.isCheckedAll = !this.isCheckedAll;
            this.tableItems.forEach(i => i.check = this.isCheckedAll);
        }
    }
};
</script>

<style>
</style>
import { mount, createLocalVue } from "@vue/test-utils";
import MainTable from "@/components/main/MainTable.vue";
import VueRouter from "vue-router";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);

const store = new Vuex.Store({
    modules: {
        order: {
            getters: {
                currentMonthValues() {
                    return jest.fn();
                },
                currentMonthOrders() {
                    return jest.fn();
                },
            },
            namespaced: true,
        },
    },
});
const router = new VueRouter({
    routes: [
        {
            path: "/board",
            name: "board",
        },
    ],
});

test("renders the title by current month", () => {
    //Given
    const wrapper = mount(MainTable, {
        localVue,
        store,
        router,
    });

    //Then
    const month = new Date().getMonth() + 1;
    const expected = `${month}월 주문 내역`;
    expect(wrapper.find('[data-test="title"]').text()).toBe(expected);
});

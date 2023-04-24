import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import order from "@/store/module/order.js";
import MainBanner from "@/components/main/MainBanner.vue";
import { BANNER } from "@/constants/main.js";

const localVue = createLocalVue();
localVue.use(Vuex);
const propsData = {
    month: (new Date().getMonth() + 1).toString(),
    type: "value",
};
const values = [Math.random() * 100000, Math.random() * 100000];
const store = new Vuex.Store({
    modules: {
        order,
    },
});

test("renders the title by current month", () => {
    //Given
    const wrapper = mount(MainBanner, {
        localVue,
        propsData,
    });

    //Then
    const title = `${propsData.month}월 총 ${BANNER[propsData.type]}`;
    expect(wrapper.find('[data-test="title"]').text()).toBe(title);
});

test("renders the value increment correctly", () => {
    //Given
    const wrapper = mount(MainBanner, {
        localVue,
        store,
    });

    //Then
    const increment = values.at(-1) - values.at(-2);
    const formatIncrement = Math.round(increment).toLocaleString();
    expect(wrapper.find('[data-test="increment"]').text()).toBe(
        formatIncrement
    );
});

import { shallowMount, createLocalVue } from "@vue/test-utils";
import MainBanner from "@/components/main/MainBanner.vue";
import * as MAIN from "@/constants/main.js";

const localVue = createLocalVue();

test("renders the title by current month", () => {
    //Given
    const propsData = {
        month: (new Date().getMonth() + 1).toString(),
        type: "value",
    };
    const wrapper = shallowMount(MainBanner, {
        localVue,
        propsData,
    });

    //Then
    const title = `${propsData.month}월 총 ${MAIN[propsData.type]}`;
    expect(wrapper.find('[data-test="title"]').text()).toBe(title);
});

test("renders the value increment correctly", () => {
    //Given
    const propsData = {
        value: Math.random() * 100000,
        lastValue: Math.random() * 100000,
    };
    const wrapper = shallowMount(MainBanner, {
        localVue,
        propsData,
    });

    //Then
    const increment = propsData.value - propsData.lastValue;
    const formatIncrement = Math.round(increment).toLocaleString();
    expect(wrapper.find('[data-test="increment"]').text()).toBe(
        formatIncrement
    );
});

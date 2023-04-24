import { mount, createLocalVue } from "@vue/test-utils";
import MainView from "@/views/MainView.vue";

const localVue = createLocalVue();

test("renders the locale title and default factory", () => {
    //Given
    const wrapper = mount(MainView, {
        localVue,
    });

    //Then
    expect(wrapper.find(".main-banner h3").text()).toContain("월");
});

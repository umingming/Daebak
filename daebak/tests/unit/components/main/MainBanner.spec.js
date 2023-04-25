import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import MainBanner from "@/components/main/MainBanner.vue";
import { BANNER } from "@/constants/main.js";

describe("MainBanner", () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);

    const store = new Vuex.Store({
        modules: {
            order: {
                getters: {
                    currentMonthValues() {
                        return jest.fn();
                    },
                },
                namespaced: true,
            },
        },
    });

    const month = (new Date().getMonth() + 1).toString();

    describe.each(
        Object.entries(BANNER).map(([key, value]) => ({
            type: key,
            expected: `${month}월 총 ${value}`,
        }))
    )("Title: %s", ({ type, expected }) => {
        test(`renders "${type}" title by correct month`, () => {
            // Given
            const wrapper = mount(MainBanner, {
                localVue,
                propsData: { month, type },
                store,
            });

            // Then
            expect(wrapper.find('[data-test="title"]').text()).toBe(expected);
        });
    });

    test("renders the value increment correctly", () => {
        // Given
        const wrapper = mount(MainBanner, {
            localVue,
            store,
        });

        // Then
        const increment = wrapper.find('[data-test="increment"]').text();
        expect(isNaN(increment.replace(",", ""))).toBe(false);
    });
});

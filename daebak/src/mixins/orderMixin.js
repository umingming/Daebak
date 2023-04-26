import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters("order", ["currentMonthValues", "lastMonthValues"]),
    },
    methods: {
        formatValue(value = 0) {
            return Math.round(value).toLocaleString();
        },
    },
};

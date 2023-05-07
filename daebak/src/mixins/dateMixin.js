const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;

export default {
    data() {
        return {
            currentYear,
            currentMonth,
        };
    },
    methods: {
        getDateLabelsOfCurrentMonth() {
            const lastDate = new Date(currentYear, currentMonth, 0).getDate();
            const labels = Array.from(
                { length: lastDate },
                (_, index) => `${index}일`
            );
            return labels;
        },
        getDateOffsetByMonth(month) {
            const date = new Date(currentYear, month - 1);
            return date.getDay();
        },
    },
};

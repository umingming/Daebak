const state = () => ({
    today: null,
    year: 0,
    month: 0,
    date: 0,
});

const getters = {
    year(state) {
        return state.year;
    },
    month(state) {
        return state.month;
    },
    date(state) {
        return state.date;
    },
    lastDateOfMonth(state) {
        const date = new Date(state.year, state.month, 0);
        return date.getDate();
    },
};

const actions = {
    FETCH_TODAY({ commit }) {
        const today = new Date();
        commit("SET_TODAY", today);
    },
};

const mutations = {
    SET_TODAY(state, today) {
        state.today = today;
        state.year = today.getFullYear();
        state.month = today.getMonth() + 1;
        state.date = today.getDate();
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};

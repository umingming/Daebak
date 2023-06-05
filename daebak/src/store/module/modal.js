const state = () => ({
    type: "",
    content: "",
});

const getters = {};

const actions = {};

const mutations = {
    SET_TYPE(state, data) {
        state.type = data;
    },
    SET_CONTENT(state, data) {
        state.content = data;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};

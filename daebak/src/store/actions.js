import { fetchUserInfo, fetchList } from "../api/index.js";

export default {
    FETCH_USER({ commit }) {
        commit("SET_USER", fetchUserInfo());
    },
    FETCH_LIST({ commit }) {
        commit("SET_LIST", fetchList());
    },
};

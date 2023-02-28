import { createStore } from 'vuex'; 
import mutations from './mutations.js';
import actions from './actions.js';

export default createStore({
    state: {
        user: {},
        orders: [],
    },
    getters: { 
        fetchedUser(state) {
            return state.user;
        },
        fetchedOrders(state) {
            return state.orders;
        },
    },
    actions,
    mutations,
})

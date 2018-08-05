import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/* eslint-disable no-param-reassign */
export default new Vuex.Store({
  state: {
    items: {
      todo: [],
      inProgress: [],
      done: [],
    },
    nextId: 1,
    strict: process.env.NODE_ENV !== 'production',
  },
  mutations: {
    addItem(state, item) {
      state.items.todo.push(Object.assign(item, { id: state.nextId }));
      state.nextId += 1;
    },
    deleteItem(state, item) {
      state.items.pop(item);
    },
    updateItems(state, { items, id }) {
      state.items[id] = items;
    },
  },
});

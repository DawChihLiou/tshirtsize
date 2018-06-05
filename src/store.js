import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    chosenSize: null,
    sizes: [
      {
        id: 'xs',
        display: 'XS',
      },
      {
        id: 's',
        display: 'S',
      },
      {
        id: 'm',
        display: 'M',
      },
      {
        id: 'l',
        display: 'L',
      },
      {
        id: 'xl',
        display: 'XL',
      },
    ],
  },
  mutations: {
    choseSize(state, size) {
      state.chosenSize = size;
    },
  },
});

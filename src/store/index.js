import Vue from 'vue';
import Vuex from 'vuex';

import rootGetters from './getters';
import rootMutations from './mutations';
import rootActions from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    recommended: [
      'Flowers-For-Algernon_Daniel-Keyes',
      'The-Three-Body-Problem_Liu-Cixin',
      'The-Dispossessed_Ursula-K-Le-Guin',
      'Dune_Frank-Herbert',
      'The-Handmaids-Tale_Margaret-Attwood',
      'The-Man-In-The-High-Castle_Phillip-K-Dick',
      'The-Stars-My-Destination_Alfred-Bester',
      'The-Forever-War_Joe-Haldeman',
      'Neuromancer_William-Gibson',
      'Babel-17_Samuel-R-Delaney',
      'The-Chrysalids_John-Wyndham',
      'Foundation_Isaac-Asimov',
      'Spin_Robert-Charles-Wilson',
      'Ancilliary-Justice_Ann-Leckie',
      'Brave-New-World_Aldous-Huxley',
    ],
    recommendedList: [
      { title: 'Flowers For Algernon', author: 'Daniel Keyes'},
      { title: 'The Three Body Problem', author: 'Liu Cixin'},
      { title: 'The Dispossessed', author: 'Ursula K. Le Guin'},
      { title: 'Dune', author: 'Frank Herbert'},
      { title: 'The Handmaid\'s Tale', author: 'Margaret Attwood'},
      { title: 'The Man In The High Castle', author: 'Phillip K. Dick'},
      { title: 'The Stars My Destination', author: 'Alfred Bester'},
      { title: 'The Forever War', author: 'Joe Haldeman'},
      { title: 'Neuromancer', author: 'William Gibson'},
      { title: 'Babel-17', author: 'Samuel R. Delaney'},
      { title: 'The Chrysalids', author: 'John Wyndham'},
      { title: 'Foundation', author: 'Isaac Asimov'},
      { title: 'Spin', author: 'Robert Charles Wilson'},
      { title: 'Ancilliary Justice', author: 'Ann Leckie'},
      { title: 'Brave New World', author: 'Aldous Huxley'},
    ],
  },
  getters: rootGetters,
  mutations: rootMutations,
  actions: rootActions,
});

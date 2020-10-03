import Vue from 'vue';
import {
  MdButton, MdCard, MdContent, MdIcon, MdField, MdTable, MdTabs,
} from 'vue-material/dist/components';
import App from './App.vue';
import router from './router';

import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

Vue.use(MdButton);
Vue.use(MdCard);
Vue.use(MdContent);
Vue.use(MdField);
Vue.use(MdIcon);
Vue.use(MdTable);
Vue.use(MdTabs);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

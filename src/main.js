import Vue from 'vue';
import Vue2SmoothScroll from 'vue2-smooth-scroll';
import App from './App.vue';
import './assets/styles.scss';

Vue.use(Vue2SmoothScroll, { duration: 1500, updateHistory: false });

const vue = new Vue({
  render: (h) => h(App),
});
vue.$mount('#app');

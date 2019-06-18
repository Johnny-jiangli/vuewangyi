// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
import axios from './https'
import store from './store/store'
import App from './App'
import router from './router'
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css' // only if your build system can import css, otherwise import it wherever you would import your css.
Vue.use(VuePlyr)
Vue.prototype.axios = axios;
Vue.config.productionTip = false
Vue.use(ElementUI);
import vuescroll from 'vuescroll';
Vue.use(vuescroll); // install the vuescroll first
Vue.prototype.$vuescrollConfig = {
  bar: {
    background: '#000'
  }
};
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  store,
  components: { App },
  template: '<App/>'
})

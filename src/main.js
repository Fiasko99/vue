import Vue from 'vue'
import App from './App.vue'

//глобально
//import MyPerson from './components/myperson.vue'

Vue.config.productionTip = false

//глобально
//Vue.component('app-person', MyPerson)

new Vue({
  render: h => h(App),
}).$mount('#app')

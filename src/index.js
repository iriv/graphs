import "./styles.css";
import Vue from "vue";
import App from "./App.vue";

import VueKonva from 'vue-konva'
Vue.use(VueKonva)

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use Parcel to bundle this sandbox, you can find more info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;

var vm = new Vue({
  // mixins: [mixin],
  render: h => h(App)
}).$mount("#app");

// var vue = new Vue({
//   el:'#app',
//   data:{
//     mes:'test'
//   }
// })

// var el = $('#app')

// el.remove()

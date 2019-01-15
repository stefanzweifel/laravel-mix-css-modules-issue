window.Vue = require('vue');

Vue.component('example-component', require('./Example.vue').default);

const app = new Vue({
    el: '#app'
});

window.Vue = require('vue');

Vue.component('example-component', require('./Example.vue'));

const app = new Vue({
    el: '#app'
});

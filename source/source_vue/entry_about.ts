import Vue from 'vue';

import About from './components_m/about/About.vue';
import store from './store/store';

new Vue({
    el: '#root',
    store,
    components: { About },
    template: '<About />'
});
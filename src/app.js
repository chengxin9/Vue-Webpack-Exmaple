/**
 * Created by qingcheng on 16/10/14.
 */
var gridComponent = require('./components/grid.vue'),
    demo;

Vue.config.debug = true;
console.log(gridComponent);
//global register gridComponent
//Vue.component('grid-component', gridComponent);

demo = new Vue({
    el: '.container',
    data: {
        dataArr: [
            {name: 'ws', age: 25},
            {name: '小花', age: 16},
            {name: '柳叶', age: 20}
        ]
    },
    components: {
        'grid-component': gridComponent
    }
});
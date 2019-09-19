import Vue from 'vue';
let myMixin = {
    data(){
        return {

        }
    },
    created() {
        this.hello();    
    },
    methods:{
        hello(){
            console.log('hello from mixin!')
        },
        foo: function () {
            console.log('foo')
        },
        conflicting: function () {
            console.log('from mixin')
        }
    }
}

let Component = Vue.extend({
    mixins: [myMixin]
})

let component = new Component()

var mixin = {
    data: function () {
      return {
        message: 'hello',
        foo: 'abc'
      }
    }
  }
  
  let vm = new Vue({
    // mixins: [mixin],
    mixins: [myMixin],
    data: function () {
      return {
        message: 'goodbye',
        bar: 'def'
      }
    },
    created: function () {
      console.log(this.message,this.foo)
      // => { message: "goodbye", foo: "abc", bar: "def" }
    },
    methods: {
        barFn: function () {
            console.log('barFn')
        },
        conflicting: function () {
            console.log('from self')
        }
    }
  })
  vm.foo();
  vm.barFn();
  vm.conflicting();
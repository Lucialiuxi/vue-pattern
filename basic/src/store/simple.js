import { createStore } from "vuex";

export const simpleStore = createStore({
   state() {
       return {
           count: 0,
       }
   },
   mutations: {
       increment(state) {
           console.log('simpleStore---mutations---increment')
           state.count++;
       }
   }
});


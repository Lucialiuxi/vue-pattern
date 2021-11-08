import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);

app.component('todo-item', {
    props: ['todo'],
    template: `<li>{{ todo.text }}</li>`,
})

app.mount('#app');

<script>
export default {
   data() {
       return {
           counter: 0,
           message: 'you loaded this page on' + new Date().toString(),
           inputMessage: 'Hello Vue!',
           seen: true,
           todos: [
               { text: 'learn javascript' },
               { text: 'learn vue' },
               { text: 'build something awesome' },
           ],
           groceryList: [
                { id: 0, text: 'Vegetables' },
                { id: 1, text: 'Cheese' },
                { id: 2, text: 'Whatever else humans are supposed to eat' }
            ],
       }
   },
   mounted() {
       setInterval(() => {
           this.counter++;
       }, 1000)
   },
   methods: {
       reverseMessage() {
           this.message = this.message.split('').reverse().join('');
       },
   },
}
</script>


<template>
    <section>
        <div id="counter">
            Counter: {{counter}}
        </div>

        <span v-bind:title="message">
            鼠标悬停几秒钟查看此处动态绑定的提示信息！
        </span>

        <div id="event-handling">
            <p>{{message}}</p>
            <button v-on:click="reverseMessage">反转Message</button>
        </div>

        <div id="two-way-binding">
            <p>{{ inputMessage }}</p>
            <input v-model="inputMessage"/>
        </div>

        <div id="conditional-rendering">
            <span v-if="seen">你现在看到我了</span>
        </div>

        <ol>
            <li v-for="todo in todos">
                {{ todo.text }}
            </li>
        </ol>

        <ul>
            <todo-item
                v-for="item in groceryList"
                v-bind:todo = "item"
                v-bind:key="item.id"
            ></todo-item>
        </ul>
    </section>
</template>
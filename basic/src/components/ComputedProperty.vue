<template>
    <div id="computed-basics">
        <p> {{hasPublishedBooks}}发布的书  {{punctuation}}</p>
        <ol v-if="author.books.length">
            <todo-item
                v-for="item in author.books"
                v-bind:key="item"
                v-bind:todo="item"
            ></todo-item>
        </ol>
        <button @click="changedBooks">点击增加发布的书</button>
        <br/>
        <button @click="cutDownBooks">点击削减发布的书</button>
    </div>
</template>

<script>

export default {
    data() {
        return {
            author: {
                name: 'John Doe',
                books: [
                    'vue 2 - advaced guide',
                    'vue 3 - basic guide',
                    'vue 4 - the mystery',
                ]
            }
        }
    },
    computed: {
         // 计算属性的 getter
        hasPublishedBooks() {
            return this.author.books.length > 0 ? '有' : '没有';
        },
        punctuation() {
            return this.author.books.length > 0 ? ':' : '.';
        }
    },
    methods: {
        changedBooks() {
            const books = [].concat(this.author.books);
            books.push(`vue ${Math.floor(Math.random() * 15)} - 杜撰的书`);
            this.author.books = books;
        },
        cutDownBooks() {
            let books = [].concat(this.author.books);
            books.pop();
            this.author.books = books;
        }
    }
}
</script>

<template>
    <div id="list-rendering">

        <h3>遍历数组</h3>
        <ul id="array-rendering">
            <li
              v-for="(item, index) in items"
              :key="index"
              
              >{{ index }} -- {{ item.message }}</li>
        </ul>

        <h3>遍历对象</h3>
        <ul id="object-rendering">
            <li
                v-for="(value, name) in myObject"
                :key="name"
             >{{ name }} -- {{ value }}</li>
        </ul>

        <h3>显示过滤/排序后的结果 --computed</h3>
        <ul>
            <li v-for="(value, i) in evenNumbers" :key="value">
                {{i}} --- {{value}}
            </li>
        </ul>

        <h3>显示过滤/排序后的结果 --嵌套循环</h3>
        <ul
            v-for="(numbers, index) in sets"
            :key="index"
        >
            <li v-for="(value, i) in even(numbers)" :key="i">
                第{{index + 1}}组:{{i}} --- {{value}}
            </li>
        </ul>

        <div v-if="showTen">
            <span v-for="n in 10" :key="n">{{n}}</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { message: 'foo' },
                { message: 'bar' },
                { message: 'haha' },
            ],
            myObject: {
                title: 'how to do lists in vue',
                author: 'jane doe',
                publishedAt: '2016-04-10',
            },
            numbers: [ 1, 2, 3, 4, 5, 6],
            sets: [
                [1,2,3,4,5],
                [6,7,8,9,10]
            ],
            showTen: true
        }
    },
    computed: {
        evenNumbers() {
            return this.numbers.filter(n => n % 2 === 0);
        }
    },
    methods: {
        even(numbers) {
            return numbers.filter(n => n % 2 === 0);
        }
    }
}
</script>
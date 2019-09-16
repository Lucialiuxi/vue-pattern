<template>
    <ul class="todo-list" >
        <li
            v-for="todo in todos"
            :key="todo.id"
        >
            <slot name="todo" v-bind:todo="todo">
                {{todo.title}}
            </slot>
        </li>
    </ul>
</template>

<script>
    export default {
        name:"SlotSeven",
        data:function(){
            return {
                todos:[
                    {
                        id: 1,
                        title: "Math"
                    },
                    {
                        id: 2,
                        title: "English"
                    },
                    {
                        id: 3,
                        title: "History"
                    },
                ],
            }
        }
    }
</script>

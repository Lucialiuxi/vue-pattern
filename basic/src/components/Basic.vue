<template>
  <div>
    <ol>
      <!-- 创建一个 todo-item 组件实例 -->
      <todo-item-a></todo-item-a>
    </ol>

    <ol>
      <!--
        现在我们为每个 todo-item 提供 todo 对象
        todo 对象是变量，即其内容可以是动态的。
        我们也需要为每个组件提供一个“key”，稍后再
        作详细解释。
      -->
      <todo-item
        v-for="item in groceryList"
        v-bind:todo="item"
        v-bind:key="item.id"
      ></todo-item>
    </ol>


    <save-button></save-button>
  </div>
</template>

<script>
const TodoItemA = {
  template: `随意创建的`
}

export default {
  name: 'Entry',
  data() {
    return {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    }
  },
  components: {
    TodoItemA,
  }
}
</script>

<template>
    <div>
        <input v-model="message" placeholder="请输入 "/>
        <p>message：{{ message }}</p>

        <div class="wrap">
            <input type="checkbox"  id="jack" value="Jack" v-model="checkNames"/>
            <label for="jack">Jack</label>
            
            <input type="checkbox"  id="john" value="John" v-model="checkNames"/>
            <label for="john">John</label>

            <input type="checkbox"  id="mike" value="Mike" v-model="checkNames"/>
            <label for="mike">Mike</label>
            <br/>
            <span>选中的名字: {{ checkNames }} </span>
        </div>

        <div class="wrap">
            <input type="radio" id="one" value="One" v-model="picked"/>
            <label for="one">One</label>
            <br/>
            <input type="radio" id="two" value="Two" v-model="picked"/>
            <label for="two">Two</label>
            <br/>
            <span>picked: {{ picked }}</span>
        </div>

        <div class="wrap">
            <select v-model="selected">
                <option disabled value="">请选择</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
            </select>
            <span>selected: {{ selected }}</span>
        </div>

        <div class="wrap">
            <select v-model="selected1">
                <option v-for="item in options" :key="item.value">{{ item.value }}</option>
            </select>
            <span>selected: {{ selected }}</span>
        </div>

    </div>
</template>

<script>

export default {
    data() {
        return {
            message: '',
            checkNames: [],
            picked: '',
            selected: '',
            selected1: '',
            options: [
                { text: 'One', value: 'A' },
                { text: 'Two', value: 'B' },
                { text: 'Three', value: 'C' },
            ],
        }
    }
}
</script>

<style scoped>
   .wrap {
       padding: 15px;
   }
</style>
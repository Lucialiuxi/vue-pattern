<template>
    <div>
        <h4>值绑定</h4>

        <div class="wrap">
            <input type="radio" v-model="picked" value="a"/>
            <span>{{picked}}</span>
        </div>

        <div class="wrap">
            <input type="checkbox" v-model="toggle"/>
            <span>{{toggle}}</span>
        </div>

        <div class="wrap">
            <select v-model="selected">
                <option value="abc">ABC</option>
                <option value="edf">EDF</option>
            </select>
            <span>{{selected}}</span>
        </div>

        <div class="wrap">
            <label for="abc">复选框切换</label>
            <input id="abc" type="checkbox" v-model="toggle1" true-value="yes" false-value="no"/>
            <span>{{toggle1}}</span>
            <br/>
            <button @click="switchCheckStatus">点击更改复选框选中状态</button>
        </div>

        <div class="wrap">
            <input type="radio" v-model="pick" v-bind:value="a"/>
            <span>{{pick}}</span>
        </div>

        <div class="wrap">
           <select v-model="selected1">
               <option :value="{number: 123}">123</option>
           </select>
            <span>{{selected1}}</span>
        </div>

        <div class="wrap">
           msg:<input v-model="msg"/>
            <span> {{msg}}</span>
            <br/>
           msg1:<input v-model.lazy="msg1"/>
            <span> {{msg1}}</span>
            <br/>
        </div>

        <div class="wrap">
           age:<input v-model="age"/>
            <span> {{ age }}</span>
            <br/>
           age1:<input v-model.number="age1"/>
            <span> {{ age1 }}</span>
            <br/>
        </div>
    </div>
</template>

<script>
export default {
    data() {

        return {
            picked: '',
            toggle: '',
            selected: '',
            toggle1: 'yes',
            pick: '',
            selected1: '',
            msg: '',
            msg1: '',
            age: undefined,
            age1: undefined,
        };
    },
    methods: {
        switchCheckStatus() {
            console.log('age---', this.age)
            console.log('age1---', this.age1)
            const oldToggle1 = this.toggle1;
            this.toggle1 = oldToggle1 === 'yes' ? 'no' : 'yes';
        }
    },
}
</script>

<style scoped>
    .wrap {
        margin-bottom: 20px;
    }
</style>
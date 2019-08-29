<template>
    <div class="Dynamic">
        <span>
            <button v-for="item in buttonTitle" :key="item.id" @click="onSwitch(item.id)">{{item.title}}</button>
        </span>
        <div v-if="id" class="myDiv">
            {{currentItem.id}}:{{currentItem.title}}
        </div>
    </div>
</template>

<script>
    export default {
        nane: "Dynamic",
        data: function () {
            return {
                buttonTitle: [
                    {
                        title: 'Home',
                        id: 1
                    },
                    {
                        title: "Post",
                        id: 11
                    },
                    {
                        title: "Archive",
                        id: 111
                    }
                ],
                currentItem: {},
                id: 0
            }
        },
        methods: {
            onSwitch: function (id) {
                this.id = id;
                this.currentItem= this.buttonTitle.find(val => val.id === id);
            },

        }
    }
</script>

<style scoped>
    .myDiv {
        background-color: yellow;
    }
    .Dynamic {
        background-color: lightblue;
    }
</style>

<template>
    <ul>
        <li v-for="child in children" :key="child.name">
            <tree-folder v-if="child.children" :folder="child"/>
            <span v-else>{{ child.name }}</span>
        </li>
    </ul>
</template>

<script>
export default {
    props:["children"],
    name:"tree-folder-contents",
    data(){
        return {

        }
    },
    beforeCreate: function () {
        this.$options.components.TreeFolder = require('./circular-references.vue').default
    }
}
</script>
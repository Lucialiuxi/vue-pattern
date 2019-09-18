<template>
    <!-- <p class="tree-folder">
        <span>{{ folder.name }}</span>
        <tree-folder-contents :children="folder.children"/>
    </p> -->
    <div>
        <tree-folder></tree-folder>
    </div>
</template>

<script>
import Vue from 'vue';
Vue.component("tree-folder-contents",{
    props:["children"],
    template:`
        <ul>
            <li v-for="child in children">
                <tree-folder v-if="child.children" :folder="child"/>
                <span v-else>{{ child.name }}</span>
            </li>
        </ul>
    `,
})
Vue.component("tree-folder",{
    data(){
        return {
            folder: {
                name: 'first level',
                children:[
                    {
                        name:'second level',
                        children: [
                            {
                                name:"third level"
                            }
                        ]
                    }
                ]
            }
        }
    },
    template:`
        <p class="tree-folder">
            <span>{{ folder.name }}</span>
            <tree-folder-contents :children="folder.children"/>
        </p>
    `,
})
export default {
    // name:"tree-folder",
    // data(){
    //     return {
    //         folder: {
    //             name: 'first level',
    //             children:[
    //                 {
    //                     name:'second level',
    //                     children: [
    //                         {
    //                             name:"third level"
    //                         }
    //                     ]
    //                 }
    //             ]
    //         }
    //     }
    // },
    // components: {
    //     TreeFolderContents: () => import('./tree-folder-contents.vue')
    // }
}
</script>

<style scoped>
    .tree-folder {
        color: blueviolet !important;
    }
</style>
<template>
    <div class="Dynamic3">
        <button
                v-for="(tab,index) in tabs"
                :key="index"
                :class="['tab-button',{ active: currentTab === tab }]"
                @click="currentTab=tab"
        >{{tab}}</button>
        <keep-alive>
            <component
                    v-bind:is="currentTabComponent"
                    class="tab"
            ></component>
        </keep-alive>
    </div>
</template>

<script>
    import Vue from "vue";
    Vue.component('tab-posts',{
        data: function () {
            return {
                post: [
                    {
                        id: 1,
                        title: 'Cat IpSum',
                        content: 'content for : Cat IpSum 1'
                    },
                    {
                        id: 2,
                        title: 'Hipster IpSum',
                        content: 'content for : Hipster IpSum 2'
                    },
                    {
                        id: 3,
                        title: 'Cupcake IpSum',
                        content: 'content for : Cupcake IpSum 3'
                    },
                ]
            }
        },
        template: `<ul>
                    <li v-for='item in post' :key="item.id">
                        {{item.title}}
                    </li>
                </ul>`,

    });
    Vue.component('tab-archive',{
        template: '<div>Archive component</div>'
    });
    export default {
        name: "Dynamic3",
        data: function () {
            return {
                currentTab: 'Posts',
                tabs: ["Posts", "Archive"]
            }
        },
        computed: {
            currentTabComponent: function() {
                    return 'tab-' + this.currentTab.toLowerCase()
            }
        }
    }
</script>

<style>
    .Dynamic3 {
        background-color: deeppink;
        color: #ffffff;
        padding: 50px;
    }
    .tab-button {
        padding: 6px 10px;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        border: 1px solid #ccc;
        cursor: pointer;
        background: #f0f0f0;
        margin-bottom: -1px;
        margin-right: -1px;
    }
    .tab-button:hover {
        background: #e0e0e0;
    }
    .tab-button.active {
        background: #e0e0e0;
        border: 1px solid rebeccapurple;
    }
    .tab {
        border: 1px solid #ccc;
        padding: 10px;
    }
    .posts-tab {
        display: flex;
    }
    .posts-sidebar {
        max-width: 40vw;
        margin: 0;
        padding: 0 10px 0 0;
        list-style-type: none;
        border-right: 1px solid #ccc;
    }
    .posts-sidebar li {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        cursor: pointer;
    }
    .posts-sidebar li:hover {
        background: #eee;
    }
    .posts-sidebar li.selected {
        background: lightblue;
    }
    .selected-post-container {
        padding-left: 10px;
    }
    .selected-post > :first-child {
        margin-top: 0;
        padding-top: 0;
    }
</style>

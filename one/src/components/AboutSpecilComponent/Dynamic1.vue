<template>
    <div class="Dynamic1">
        <button
                v-for="tab in tabs"
                :key="tab"
                :class="['tab-button',{active: currentTab === tab}]"
                @click="currentTab = tab"
        >{{tab}}</button>

        <component
                :is="currentTabComponent"
                class="tab"
        ></component>
    </div>
</template>

<script>
    import Vue from "vue";

    Vue.component("tab-home",{
        template: '<div>Home component</div>'
    });

    Vue.component("tab-posts",{
        template: '<div>Posts component</div>'
    });

    Vue.component("tab-archive",{
        template: '<div>Archive component</div>'
    });

    export default {
        name: "Dynamic1",
        data:function () {
            return {
                currentTab: "Home",
                tabs: ["Home", "Posts", "Archive"]
            }
        },
        computed: {
            currentTabComponent: function () {
                return 'tab-' + this.currentTab.toLowerCase();
            }
        }
    }
</script>

<style scoped>
    .Dynamic1 {
        background-color: blueviolet;
        color: #fff;
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
    }
    .tab {
        border: 1px solid #ccc;
        padding: 10px;
    }
</style>

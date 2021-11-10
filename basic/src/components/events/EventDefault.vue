<template>
    <div id="basic-event">
        <button @click="incrementCount">让vuex里的count的值自增</button>
        <div>vuex里的counter:{{ getCount }}</div>

        <button @click="n+=1">n add 1</button>
        <p>n: {{ n }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            n: 0,
        }
    },
    methods: {
        incrementCount() {
            this.$store.commit('increment');
        },
    },
    computed: {
        getCount() {
            return this.$store.state.count;
        }
    },
}
</script>
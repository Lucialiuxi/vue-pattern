<template>
    <div>
        <input
            @keyup="onInsert($event)"
            type="text"
            @keydown.delete="onDelete($event)"
        />
        <br/>
        <input @keyup.enter="onInsertByEnter($event)" type="text"/>
    </div>
</template>

<script>

export default {
    data() {
        return {

        };
    },
    methods: {
        onInsert(event) {
            console.log('keyup', event.target.value)
        },
        onInsertByEnter(event) {
            console.log('keyup.enter', event.target.value)
        },
        onDelete(event) {
            console.log('keydown.delete', event.target.value)
        }
    },
}
</script>

<style scoped>
    input {
        margin: 10px;
    }
</style>

<template>
    <div class="hahahahah">
        <slot >
            {{lucia.weight}}
        </slot>
    </div>
</template>

<script>
    export default {
        name:"SlotFive",
        data:function () {
            return {
                lucia: {
                    height: "164cm",
                    weight: "47kg",
                    color: "colorful"
                }
            }
        }
    }
</script>

<style>
    .hahahahah {
        background-color: aqua;
    }
</style>

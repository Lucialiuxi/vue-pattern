<template>
    <span>
        <slot v-bind:car="car">
            {{car.wheel}}
        </slot>
    </span>
</template>

<script>
    export default {
        name:"SlotFour",
        data: function () {
            return {
                car:{
                    door: "four",
                    window:'many',
                    wheel:"five"
                }
            }
        }
    }
</script>

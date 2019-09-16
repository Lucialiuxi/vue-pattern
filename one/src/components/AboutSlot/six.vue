<template>
    <div class="wether">
        <slot name="sun"></slot>
        <slot name="rain"></slot>
    </div>
</template>

<script>
    export default {
        name:"SlotSix"
    }
</script>

<style>
.wether {
    color: orange;
}
</style>

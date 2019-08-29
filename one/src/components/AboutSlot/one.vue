<template>
    <div>
        <button type="submit">
            <slot>Submit</slot>
        </button>

        <br/>
    </div>
</template>

<script>
    export default {
        name:"SlotOne",
        data:function () {
            return {

            }
        }
    }
</script>

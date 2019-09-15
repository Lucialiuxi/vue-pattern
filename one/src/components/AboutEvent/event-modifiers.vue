<template>
    <section class="wrap" @click.self="handleWrapClick">
        <div class="myDiv" @click="handleMyDivClick">
            <p class="myP" @click.right="handleMyPClick">
                <span class="mySpan"  @click.stop="handleMySpanClick">测试修饰符</span>
            </p>
        </div>
    </section>
</template>

<script>
export default {
    methods: {
        handleWrapClick: function() {
            console.log('Wrap')
        },
        handleMyDivClick: function() {
            console.log('MyDiv')
        },
        handleMyPClick: function() {
            console.log('MyP')
        },
        handleMySpanClick: function() {
            console.log('MySpan')
        },
    }
}
</script>

<style scoped>
    .wrap,
    .myDiv,
    .myP {
        padding: 10px;
        border: 2px solid darkcyan;
    }
    .wrap {
        background-color: aliceblue;
    }
    .myDiv {
        background-color: aquamarine;
    }
    .myP {
        background-color: chartreuse;
    }
    .mySpan {
        background-color: darkgoldenrod;
    }
</style>
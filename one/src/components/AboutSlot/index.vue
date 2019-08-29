<template>
    <div>
        <slot-one>
            <h1>测试插槽的h1</h1>
        </slot-one>

        <br/>

        <slot-Two>
            <template v-slot:header>
                <h1>this is slot for header</h1>
            </template>
            <ol>
                <li>u are my sunshine</li>
                <li>my only sunshine</li>
                <li>u make me happy</li>
            </ol>
            <template v-slot:footer>
                <h1>this is slot for footer</h1>
            </template>
        </slot-Two>

        <br/>

        <slot-three>
            <template v-slot:default="slotProps">
                {{slotProps.user.firstName}}
            </template>
        </slot-three>
        <slot-three v-slot:default="slotProps">
            {{slotProps.user.firstName}}
        </slot-three>
        <slot-three v-slot="slotProps">
            {{slotProps.user.firstName}}
        </slot-three>
        <br/>

        <!--  解构  -->
        <slot-four v-slot="{car:{window,door,wheel}}">
            {{window}}--{{door}}--{{wheel}}
        </slot-four>

        <br/>
        <!--   动态插槽     -->
        <slot-five>
            <template >
                <p>
                    <span>document of vue is too long to complete</span>>
                    <span>it is good for small project</span>
                </p>
            </template>
        </slot-five>
        <br/>
        <!--        具名插槽-->
        <slot-six>
            <template #sun>
                <h1>today is sunshine day</h1>
            </template>
            <template #run>
                <h1>today is running day</h1>
            </template>
        </slot-six>

        <br/>
        <slot-seven >
            <template v-slot:todo="{id,title}" >
                <div>
                    <em>{{id}}</em>
                    <span>{{title}}</span>
                </div>
            </template>
        </slot-seven>
    </div>
</template>

<script>
    import SlotOne from "./one"
    import SlotTwo from "./two"
    import SlotThree from "./three"
    import SlotFour from "./four"
    import SlotFive from "./five"
    import SlotSix from "./six"
    import SlotSeven from "./seven"


    export default {
        name:"AboutSlot",
        components:{
            "slot-one": SlotOne,
            "slot-Two": SlotTwo,
            "slot-three": SlotThree,
            "slot-four": SlotFour,
            "slot-five": SlotFive,
            "slot-six": SlotSix,
            "slot-seven":SlotSeven
        },
        data:function () {
            return {
                data: {
                    dynamicSlotName:'lucia',

                }
            }
        }
    }
</script>

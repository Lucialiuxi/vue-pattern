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
            {{slotProps.user.lastName}}
        </slot-three>
        <slot-three v-slot="slotProps">
            {{slotProps.user.nikename}}
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
            <template #rain>
                <h1>today is rainning day</h1>
            </template>
        </slot-six>

        <br/>
        <slot-seven >
            <template v-slot:todo="{todo:{id,title}}" >
                <div>
                    <em>{{id}}</em>
                    <span>{{title}}</span>
                </div>
            </template>
        </slot-seven>

        <br/>
        <!-- 作用域插槽 -->
        <slot-eight>
           <template v-slot="slotProps">
                {{ slotProps.name1.lastname }}
            </template>
        </slot-eight>

        <br/>
        <!-- 动态插槽名 -->
        <slot-dynamic>
            <template v-slot:[dynamicSlotName]>
                <h2>
                    动态插槽名{{dynamicSlotName.today}}
                </h2>
            </template>
        </slot-dynamic>
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
    import SlotEight from "./eight"
    import SlotDynamic from "./dynamicSlot"

    export default {
        name:"AboutSlot",
        components:{
            "slot-one": SlotOne,
            "slot-Two": SlotTwo,
            "slot-three": SlotThree,
            "slot-four": SlotFour,
            "slot-five": SlotFive,
            "slot-six": SlotSix,
            "slot-seven":SlotSeven,
            "slot-eight":SlotEight,
            "slot-dynamic":SlotDynamic
        },
        data:function () {
            return {
                data: {
                    dynamicSlotName:'wether',

                }
            }
        }
    }
</script>

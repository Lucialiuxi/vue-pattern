<template>
    <div>

        <div
            class="res"
            :class="{ active: isActive, err: hasError}"
            :style="{ color: activeColor, fontSize: fontSize + 'px'}"
            >  
            测试动态class
        </div>

        <div
            :class="classObject"
            :style="styleObject"
            >  
            测试动态class
        </div>

        
        <div
            :class="getClass"
            :style="[styleObject, styleObject1]"
            >  
            测试动态class
        </div>
        
    </div>
</template>

<script>
export default {
    name: "ClassAndStyle",
    data() {
        return {
            isActive: true,
            hasError: false,
            classObject: {
                a: true,
                b: false,
            },

            activeColor: 'red',
            fontSize: 30,
            styleObject: {
                color: 'blue',
                fontSize: '32px',
            },
            styleObject1: {
                'background-color': 'lightpink',
                'font-weight': 'bold',
            },
        }
    },
    computed: {
        getClass() {
            return {
                active: this.isActive,
                error: this.hasError,
            }
        }
    }
}
</script>
<template>
    <div class="PropsValidate">
        <h1>brand{{brand}}:</h1>
        <ul>
            <li>color:{{color}}</li>
            <li>price:{{detailInformation.price}}</li>
            <li>hasCover:{{hasCover==true ? 'yes' : hasCover}}</li>
            <li>{{optionTypeWord}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'PropsValidate',
        props:{
            brand:{
                type: String,
                require: true,
                default: "huawei"
            },
            color:{
                type: String,
                require: false,
                default: 'gold'
            },
            detailInformation:{
                type: Object,
                default: function () {
                    return {
                        price: '4999',

                    }
                }
            },
            hasCover:[ String,Boolean],
            optionTypeWord: {
                //传入的变量optionTypeWord必须是'success',"warning",'danger','info'之一
                validator: function (value) {
                    return ['success',"warning",'danger','info'].indexOf(value) !== -1
                }
            }
        }
    }
</script>

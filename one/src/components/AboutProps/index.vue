<template>
    <div>
        <props-type
                title="title"
                :likes="likes"
                :isPublished="isPublished"
                :commentIds="commentIds"
                author="lucia"
                :AObject="AObject"
        ></props-type>
        <br/>

        <props-one-way-flow
                :normalString="normalString"
                :size="size"
        > </props-one-way-flow>

        <props-validate
                hasCover = 'yes'
                optionTypeWord="success"
        ></props-validate>

        <br/>

        <props-type-custom
                :author="new Person({...author})"
        ></props-type-custom>

        <br/>

        <props-no-attributes
                class="date-picker-theme-dark"
                title="date-picker"
                v-on:input="onChange"
        ></props-no-attributes>
        <div class="date-picker-theme-dark">{{inputvalue}}</div>
        <All :message="message" class="all"/>
    </div>
</template>

<script>
    import PropsType from "./PropsType";
    import PropsOneWayFlow from "./PropsOneWayFlow";
    import PropsValidate from "./PropsValidate";
    import PropsTypeCustom from "./PropsTypeCustom";
    import PropsNoAttributes from "./PropsNoAttributes";
    import All from "./all"

    export default {
        name:"AboutProps",
        data:function () {
            return {
                likes: 1,
                isPublished: true,
                commentIds: 13,
                AObject: {
                    name:'lucia',
                    age:"3",
                },
                normalString:'all will be well',
                size:"LARGE",
                author: {
                    firstName: "Shakespeare",
                    lastName: "William"
                },
                inputvalue:"",
                message:"i am lucia"
            }
        },
        components:{
            'props-type':PropsType,
            "props-one-way-flow": PropsOneWayFlow,
            'props-validate': PropsValidate,
            'props-type-custom': PropsTypeCustom,
            'props-no-attributes': PropsNoAttributes,
            All
        },
        methods: {
            Person:function (firstName, lastName) {
                this.firstName = firstName
                this.lastName = lastName
            },
            onChange:function (val) {
                console.log(val)
                this.inputvalue = val
            }
        }
    }


</script>

<style scoped>
    .date-picker-theme-dark {
        font-size: 24px;
        color: #42b983;
        border: 1px solid #42b983;
    }
</style>

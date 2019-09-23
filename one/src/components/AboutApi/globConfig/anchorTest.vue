<template>
    <div>
        <ul>
            <li v-for="val in info" :key="val.id">
                <h3 :id="val.id">{{val.title}}</h3>
                <p 
                    v-for="n in list"
                    :key="n"
                >{{val.content}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            list:[1,2,3,4,5,6,7,8,9,10],
            info:[
                {   
                    id: "miao",
                    title:"喵星人基地",
                    content:'喵喵喵'
                },
                {   
                    id: "wang",
                    title:"汪星人基地",
                    content:'汪汪汪'
                },
                {   
                    id: "meng",
                    title:"萌星人基地",
                    content:'萌萌萌'
                },
            ]
        }
    }
}
</script>
<template>
    <section>
        <p>年龄：{{info.age}}</p>
        <p>身高：{{info.height}}</p>
        <p>职业：{{info.character}}</p>
    </section>
</template>

<script>
export default {
    props: ["info"]
}
</script>
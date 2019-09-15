<template>
    <div>
        <one-event></one-event>
        <two-event></two-event>
        <ThreeEvent/>
        <FourEvent/>
    </div>
</template>

<script>
    import OneEvent from "./one"
    import TwoEvent from "./two"
    import ThreeEvent from "./event-modifiers"
    import FourEvent from "./even"

    export  default {
        name: "AboutEventEntry",
        components: {
            "one-event": OneEvent,
            "two-event": TwoEvent,
            ThreeEvent,
            FourEvent
        }
    }
</script>

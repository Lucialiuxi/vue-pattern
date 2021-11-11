<template>
    <div>
        
    <nav>
      <p>
        <router-link to="/basic-event/one">one</router-link>
      </p>
      <p>
        <router-link to="/basic-event/two">two</router-link>
      </p>
      <p>
        <router-link to="/basic-event/key">按键修饰符</router-link>
      </p>
    </nav>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    
}
</script>
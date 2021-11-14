<template>
    <div>
        <h4>表单输入</h4>
        <nav>
            <p>
                <router-link to="/form-insert/basic">基础用法</router-link>
            </p>
            <p>
                <router-link to="/form-insert/bind-value">输入绑定</router-link>
            </p>
        </nav>
        <router-view></router-view>
    </div>
</template>

<style scoped>
nav p a {
    color: saddlebrown;
    font-weight: bold;
}
</style>
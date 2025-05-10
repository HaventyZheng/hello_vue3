<!-- 根组件文件 -->
<!-- 三部分：template(Html结构),script(JS/TS),style(CSS样式) -->

<template>
    <div class="t0">
        <div class='div1'>
            <h1 class="h101">RealEnglish</h1>
        </div>
        <word/>
    </div>
</template>

<script lang="ts">
import word from './components/word.vue'
export default {
    name: 'App', //组件名
    components: { word } //注册组件
}
</script>

<style>
.h101 {
    font-style:italic;
    font-size: 90px;
    color: white;
}

.div1 {
    background-color: seagreen;
    padding: 20px;
    text-align: center;
    vertical-align: middle;
    border-radius: 20px;
}

.t0 {
    height: 100vh;
    background-color: antiquewhite;
    display: flex;
    justify-content: space-between;
}
</style>
<template>
    <div class="c1">
        <h1 class="h102">ToLearn</h1>
        <h3>{{ a }}</h3>
        <h3>{{ b }}</h3>
        <button @click="AddWord">更改单词</button>
    </div>
    <div class="c1">
        <h1 class="h102">EngliahToChinese</h1>
        <h3>英文:{{ c.E }},汉译:{{ c.C }}</h3>
        <h3>英文:{{ d.E }},汉译:{{ d.C }}</h3>
        <ul>
            <li v-for="word in words" :key="word.E">英文：{{ word.E }}，汉译：{{ word.C }}</li>
        </ul>
        <button @click="ChangeChinese">更改汉语</button>
        <hr>
        <button @click="ChengeAllObject">reaction重建对象</button>
    </div>
</template>

<script lang="ts">
    export default{
        name:'word'
    }
</script>

<script setup lang="ts">
    import {ref,reactive,toRef,toRefs} from 'vue'
    let a = 'banana'
    let b = ref('appla')
    let c = reactive({E:'hello',C:'放弃'})
    let d = reactive({E:'boss',C:'老表'})
    let words = reactive([
        {E:'pencil',C:'铅笔'},
        {E:'abanden',C:'你好'},
        {E:'kiss',C:'吻'}
    ])

    let person = reactive({
        name:'hhh',
        age:18
    }) 

    let {name,age} = person  //解构，将person的属性name与age拿出来，相当于，注意要用原属性名
    // name = person.name
    // age = person.age
    //问题：直接解构不是响应式

    let {E,C} = toRefs(c) //响应式解构，把新变量E,C也变成了响应式，来自于原来的c.C,c.E,新旧变量一致了
    let eng = toRef(c,'E') //取出一个属性，进行响应式

    function AddWord() {
        b.value = 'apple'
    }

    function ChangeChinese(){
        c.C = "你好"
        words[1].C = "放弃"
    }

    function ChengeAllObject(){
        Object.assign(d,{E:'boss',C:'老板'})
    }


</script>

<style>
    .c1{
        padding:20px;
        text-align: left;
        background-color:skyblue;
        margin:30px 10px;
        width:400px;
        height:500px;
        border-radius: 50px;
        box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.5);
    }
    .h102{
        font-size:30px;
        font-style:italic;
    }
</style>
//引入createApp用于创建应用
import {createApp} from 'vue'
//引入App.vue根组件
import App from './App.vue'

createApp(App).mount('#app')

//createApp可以看做把花（APP）插在花盆里，mount是把花放在什么位置，实际上mount是挂载
//即把之挂载到id为app的容器之中，打开index.html(入口文件)，可见div id=app，这是目标位置
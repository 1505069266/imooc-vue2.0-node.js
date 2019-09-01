## Vue基础语法介绍
### Class和Style绑定
 * 对象语法:
 ```
 v-bind:class="{ active:isActive(data中定义的值), 'text-danger':hasError(data中定义的值)}"
 ```
 * 数组语法:
 ```
 v-bind:class="[activeClass, errorClass]"

 data:{
     activeClass: 'active',
     errorClass: 'text-danger'
 }
 ```
 * style绑定-对象语法:
 ```
 v-bind:style="{ color: activeColor,fontSize:fontSize + 'px' }"
 ```
 ### 条件渲染
 * v-if
 * v-else
 * v-else-if
 * v-show
 * v-cloak
 ### 事件处理器
 ```
 * v-on:click="greet" 或者 "@click="greet""
 * v-on:click.stop(阻止冒泡)  v-on:click.stop.prevent(阻止默认事件)  v-on:click.self()   v-on:click.once(只能点击一次)
 * v-on:keyup.enter(.enter   .tab   .delete   .esc   .space   .up   .down   .left   .right)
 ```
 ### Vue组件
  * 全局组件和局部组件
  * 子父组件通讯-数据传递
  * Slot
### Vue-router
 * 动态路由
 * 编程式路由(通过js跳转路由)
 ```
 $router.push('路由地址')
 $router.push({path:'name'})
 $router.push({path:"name?a=123"})或者$router.push({path:"name",query:{a:123}})
 $router.go(1)  
 ```
## MongoDB安装和环境配置
 * 高可拓展性
 * 分布式存储
 * 低成本
 * 结构灵活
### 需要操作
 * 下载安装包或者压缩包
 * 添加db存储和日志存储文件夹
 * 添加服务 配置环境变量 启动Mongo


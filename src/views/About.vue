<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Counter :num="num" @increment="increment" @decrement="decrement"></Counter>
    <p>parent:{{num}}</p>
  </div>
</template>
<script>
import Counter from './../components/Counter'
export default {
    name:'hello',
    data(){
      return{
        num: 20
      }
    },
  components:{
      Counter
    },
    methods:{
      increment(e){
        this.num ++
        console.log(e);
        
      },
      decrement(e){
        this.num--
        console.log(e);
      }
    }
}
</script>

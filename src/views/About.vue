<template>
  <div class="about">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <van-loading type="spinner" color="#1989fa" v-show="loading">加载中..</van-loading>
    <van-card
        v-for="item in goods"
        :key="item.id"
        :num="item.productName"
        :price="item.salePrice"

        thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
      />
    
  <p>刷新次数: {{ count }}</p>
</van-pull-refresh>
  </div>
</template>
<script>
import Counter from './../components/Counter'
import axios from 'axios'
import { Loading } from 'vant';
import { Notify } from 'vant';
import { PullRefresh } from 'vant';
import { Toast } from 'vant';
import { Card } from 'vant';
export default {
    name:'hello',
    data(){
      return{
        num: 20,
        goods:'',
        loading:false,
        count: 0,
        isLoading: false
      }
    },
  components:{
      Counter,
      [Loading.name]:Loading,
      [PullRefresh.name]:PullRefresh,
      [Card.name]:Card
    },
    created(){
      this.loading = true
      axios.get('/api/goods/list')
      .then(res=>{
        console.log(res);
        Notify({
          type:'success',
          message:'数据加载成功'
        });
        this.goods = res.data.result.data
        this.loading = false
      },(err)=>{
        console.log(err);
        Notify({
          type:'primary',
          message:err.message
        });
      })
    },
    methods:{
      increment(e){
        this.num ++
        console.log(e);
        
      },
      decrement(e){
        this.num--
        console.log(e);
      },
      onRefresh() {
      setTimeout(() => {
        Toast('刷新成功');
        this.isLoading = false;
        console.log(222);
        
        this.count++;
      }, 500);
    }
    },
    beforedestroyed(){
      console.log('ddd');
      
    }
}
</script>

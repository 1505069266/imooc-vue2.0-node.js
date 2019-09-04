<template>
  <div id="app">
    <router-view/>
    <ul class="Nav">
      <router-link to="/" tag="li">
        <van-icon name="wap-home" size="30px" />
      </router-link>
      <router-link to="/about" tag="li">
        <van-icon name="shop-o" size="30px" />
      </router-link>
      <router-link to="/cart" tag="li">
        <van-icon name="cart-o" size="30px" />
      </router-link>
      <router-link to="/me" tag="li">
        <van-icon name="manager-o" size="30px" />
      </router-link>
    </ul>
  </div>
</template>
<script>
import { Icon } from 'vant';
export default {
  name:'app',
  components:{
    [Icon.name]:Icon
  },
  data(){
    return{

    }
  },

}
</script>
<style lang="scss">
  .Nav{
    position:fixed;
    bottom:0;
    left:0;
    width: 100%;
    height: 50px;
    background: white;
    border-top:1px solid #ccc;
    box-shadow: 0px -2px 10px #ccc;
  }
  .Nav li{
    width: 25%;
    height: 100%;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .router-link-exact-active{
    color:red;
  }
</style>

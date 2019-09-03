<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <van-cell-group>
  <van-field
    v-model="username"
    required
    clearable
    label="用户名"
    right-icon="question-o"
    placeholder="请输入用户名"
    @click-right-icon="$toast('question')"
  />

  <van-field
    v-model="password"
    type="password"
    label="密码"
    placeholder="请输入密码"
    :error-message="errormsg"
    required
  />
</van-cell-group>
  <van-button type="primary" style="margin-top:20px"  @click="handleLogin" :loading="loading" :loading-text="loadingText" :disabled="disabled">确定登陆</van-button>
  </div>
</template>

<script>
// @ is an alias to /src
import { Field } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Button } from 'vant'
import axios from 'axios'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    [Field.name]:Field,
    [Cell.name]:Cell,
    [CellGroup.name]:CellGroup,
    [Button.name]:Button
  },
  data(){
    return{
      data:null,
      username:'',
      password:'',
      loading:false,
      loadingText:'登陆中...',
      disabled:false,
      errormsg:''
    }
  },
  methods:{
    handleLogin(){
      this.loading = true
      axios.post('/api/users/login',{
        userName:this.username,
        userPwd:this.password
      }).then((reso)=>{
        
        this.data = reso.data
        
        if(this.data.status=="0"){
          this.loading = false
          this.errormsg = ' '
          this.$router.push(`/about`)
        }else{
          this.loading = false
          this.errormsg = '密码错误'
        }
      })
    }
  }
}
</script>

<script>
import {defineComponent} from 'vue'
import {islogin} from "@/api/login";
import {postRequest} from "@/utils/axios";
import qs from 'qs';
import successResponse from "core-js/internals/is-forced";
export default {
  data(){
    return{
      user_id:"",//姓名，用v-model绑定监听，将输入的字符串赋值给name变量
      user_password:"",//密码
      st:"false",//false为不保存登录
    };
  },
  methods:{
    handlelogin: function ()
    {
      var a = postRequest('login/',{user_id: this.user_id ,user_password:this.user_password})
      a.then(response => {
        // 处理返回的数据
        var add = response.data;
        if(add['answer']==='True')
        {
          this.$cookies.set('uid',this.user_id);
          this.$router.replace('/home');//如果输入的名字以及密码正确路由跳转至个人页面
        }
        else if(this.user_id==='')//名字为空
        {
          alert('用户名不为空');
        }
        else if(this.user_password==='')//密码为空
        {
          alert('密码不为空');
        }
        else{
          alert('账号不存在，请注册后登录');//查无此号
        }

      }).catch(error => {
        // 处理请求错误
        console.error(error);
      });

    },
    handleregister:function()
    {
      this.$router.replace('/register.vue')//点击注册按钮，跳转至注册页面
    },
    //点击保持登录状态触发handlesave
    handlesave:function(){
      this.st="true";//修改登录状态为true
      sessionStorage.setItem('s',this.st);
      console.log(sessionStorage.s);
    },
  }
}
</script>

<template>
  <div id="background">
  <div class="container">
    <form action="">
      <h1>登录</h1>
      <div class="form">
        <div class="item">
          <label>用户名：</label><input type="text" name="username" v-model.trim="user_id" placeholder="请输入用户名">
          <!-- v-model把输入的值传输给name变量 -->
          <br/>
        </div>
        <div class="item">
          <label>密码：</label><input type="password" name="password" v-model.trim="user_password" placeholder="请输入密码">
          <br/>
        </div>
        <div class="keep">
          <input @click="handlesave" id="yes" type="radio" value="0" ><!-- 点击选中 -->
          <label for="yes">保持登录状态</label>
        </div>
      </div>

    </form>
    <button  type="submit" @click.prevent="handlelogin">登录			</button>
    <!-- v-on点击按钮触发handlelogin方法 -->
    <button  @click.prevent="handleregister">注册</button>
    <router-view></router-view>
  </div>
  </div>
</template>

<style scoped>
#background{
  width: 100%;
  height: 100%;
  background: url("../assets/it.jpg");
  background-size:100% 100%;
  position: fixed;
  top: 0;
  left: 0;
}

.container{
  width: 480px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background:#00000090;
  text-align: center;
  border-radius: 20px;
  margin-top: 10px;
}
.container h1{
  color: aliceblue;
  margin-left: 20px;
}
.item {
  color: white;
  margin-left: 15%;
  margin-top: 35px;
  font-size: 20px;
  text-align: left;
}
.item label{
  float:left;
  width: 5em;
  margin-right: 1em;
  text-align: right;
}
input{
  margin-left: -5px;
  padding: 4px;
  border: solid 1px #4e5ef3;
  outline: 0;
  font: normal 13px/100% Verdana,Tahoma,sans-serif;
  width: 200px;
  height: 23px;
  background:#f1f1f190;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
}
button{
  position: relative;
  height: 33px;
  width: 100px;
  background: rgba(35, 19, 252, 0.425);
  border-radius: 10px;
  margin-top: 18px;
  box-shadow: none;
  color: white;
  margin-left: 40px;
  margin-right: 10px;

}
.keep{
  color: white;
}
.keep input{
  width: 15px;
  height: 15px;
  margin-top: 7px;
  margin-left: 10px;
  margin-right: 10px;
}
</style>
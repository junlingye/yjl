<template>
  <div class="outer">
    <div class="login">
      <div class="login-title">
        <h1>登录</h1>
      </div>

      <el-form :label-position="labelPosition" label-width="8rem" :model="formLabelAlign">
        <el-input v-model="formLabelAlign.mailbox" placeholder="请输入邮箱" style="margin:0.2rem auto;height: 0.5rem;"></el-input>
        <el-input v-model="formLabelAlign.password" placeholder="请输入密码" style="margin:0.2rem auto;height: 0.5rem;"></el-input>
        <el-button type="primary" @click="login()" style="margin:0.2rem auto;height: 0.5rem;width: 100%;">登录</el-button>
      </el-form>
    </div>
  </div>
</template>


<script>
  import qs from 'qs'
  export default {
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          mailbox: '',
          password: ''
        }
      };
    },
    methods: {

      login () {

        var self = this;

        this.$http.post('http://111.126.99.82:8000/login/', qs.stringify({mailbox:this.formLabelAlign.mailbox,password: this.formLabelAlign.password} ))
          .then(function (response) {
         var data=JSON.stringify(response.data).length;
            if(data==9){

              self.$router.push({path:'home'});

            }else if(data==15){
              alert("邮箱错误，请重新登录")
            }else if(data==16){
              alert("密码错误，请重新登录")
            }else if(data==33){
              alert("信息错误，请重新登录")
            }


          })
          .catch(function (error) {
            console.log(error);
          });
        }



    }
  }
</script>

<style>
  .outer{background:url("../assets/img/login.jpg");background-repeat: no-repeat;background-size: cover;height: 100%;position: absolute;width: 100%;}
  .login{text-align: center;width:4.38rem;height:4rem; margin:1rem auto 0;background-color: #ffffff;padding:0.3rem;border-radius: 0.1rem;font-size:0.2rem;}
</style>

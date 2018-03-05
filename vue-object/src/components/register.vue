<template>
  <div class="outer">
    <div class="register">
      <div class="register-title">
        <h1>注册</h1>
      </div>
      <el-form :label-position="labelPosition" label-width="8rem" :model="formLabelAlign">
          <el-input v-model="formLabelAlign.name" placeholder="请输入用户名" style="margin:0.2rem auto 0;height: 0.5rem;"></el-input>
          <el-input v-model="formLabelAlign.mailbox" placeholder="请输入邮箱" style="margin:0.2rem auto 0;height: 0.5rem;"></el-input>
          <el-input v-model="formLabelAlign.password" placeholder="请输入密码" style="margin:0.2rem auto 0;height: 0.5rem;"></el-input>
        <el-button type="primary" @click="register()" style="margin:0.2rem auto 0;height: 0.5rem;width: 100%;">注册</el-button>
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
          name:'',
          mailbox: '',
          password: ''
        }
      };
    },

    methods: {

      register() {

        var self = this;

        var reg=/^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9_\.\-]+\.[a-zA-Z]+$/;
        if(reg.test(this.formLabelAlign.mailbox)) {

        this.$http.post('http://111.126.99.82:8000/register/', qs.stringify({username: this.formLabelAlign.name, mailbox:this.formLabelAlign.mailbox,password: this.formLabelAlign.password} ))
          .then(function (response) {
            var data=JSON.stringify(response.data).length;
            if(data==9){

              self.$router.push({path:'login'});

            }else if(data==15){
              alert("邮箱已被占用，请重新注册")
            }

          })
          .catch(function (error) {
            console.log(error);
          });

      }else {alert("邮箱有误，请重新注册")}
      }

    }

  }
</script>

<style>
  .outer{background:url("../assets/img/login.jpg");background-repeat: no-repeat;background-size: cover;height: 100%;position: absolute;width: 100%;}
  .register{text-align: center;width:4.38rem;height:5rem; margin:1rem auto 0;background-color: #ffffff;padding:0.3rem;boadius: 5px;font-size:0.2rem;}
</style>

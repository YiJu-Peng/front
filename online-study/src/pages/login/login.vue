<template>
  <div class="container">
    <div class="form-box" :style="formBoxStyle">
      <!-- 注册 -->
      <div class="register-box" v-show="showRegister">
        <h1>register</h1>
        <input type="text" placeholder="用户名" v-model="username">
        <input type="email" placeholder="邮箱" v-model="email">
        <input type="password" placeholder="密码" v-model="password">
        <input type="password" placeholder="确认密码" v-model="confirmPassword">
        <button @click="register">注册</button>
        <p v-if="showRegisterError" class="error">请填写全部信息</p>
      </div>
      <!-- 登录 -->
      <div class="login-box" v-show="!showRegister">
        <h1>login</h1>
        <input type="text" placeholder="用户名" v-model="username">
        <input type="password" placeholder="密码" v-model="password">
        <button @click="login">登录</button>
        <p v-if="showLoginError" class="error">请填写全部信息</p>
      </div>
    </div>
    <div class="con-box left">
      <h2>欢迎加入<span>码上</span>学习</h2>
      <p>即刻，我们<span>出发</span>吧</p>

      <p>已有账号</p>
      <button id="login" @click="showLoginForm">去登录</button>
    </div>
    <div class="con-box right">
      <h2>欢迎来到<span>码上</span>学习</h2>
      <p>今天也一起<span>努力</span>吧</p>

      <p>没有账号？</p>
      <button id="register" @click="showRegisterForm">去注册</button>
    </div>
    <div id="leftframe1"></div>
    <div id="rightframe1"></div>
    <div id="underframe"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showRegister: false,
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      showRegisterError: false,
      showLoginError: false
    };
  },
  computed: {
    formBoxStyle() {
      return {
        transform: this.showRegister ? "translateX(80%)" : "translateX(0%)"
      };
    }
  },
  methods: {
    register() {
      if (
        this.username &&
        this.email &&
        this.password &&
        this.confirmPassword
      ) {
        this.showRegisterError = false;
      } else {
        this.showRegisterError = true;
      }
    },
    login() {
      if (this.username && this.password) {
        this.showLoginError = false;
      } else {
        this.showLoginError = true;
      }
    },
    showLoginForm() {
      this.showRegister = false;
    },
    showRegisterForm() {
      this.showRegister = true;
    }
  }
};
</script>

<style scoped>
  .error {
  color: red;
}
*{
    /* 初始化 */
    margin: 0;
    padding: 0;
}
body{
    /* 100%窗口高度 */
    height: 100vh;
    /* 弹性布局 水平+垂直居中 */
    display: flex;
    justify-content: center;
    align-items: center;
    /* 渐变背景 */
    background: linear-gradient(200deg,#5B909E,rgb(253, 231, 132) );
}
.container{
    background-color: #fff;
    width: 650px;
    height: 415px;
    border-radius: 5px;
    /* 阴影 */
    box-shadow: 5px 5px 5px rgba(0,0,0,0.1);
    /* 相对定位 */
    position: relative;
}
.form-box{
    /* 绝对定位 */
    position: absolute;
    top: -10%;
    left: 5%;
    background-color:#ECA817;
    width: 320px;
    height: 500px;
    border-radius: 5px;
    box-shadow: 2px 0 10px rgba(0,0,0,0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    /* 动画过渡 加速后减速 */
    transition: 0.5s ease-in-out;
}
.register-box,.login-box{
    /* 弹性布局 垂直排列 */
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}
.hidden{
    display: none;
    transition: 0.5s;
}
h1{
    text-align: center;
    margin-bottom: 25px;
    /* 大写 */
    text-transform: uppercase;
    font-size: 37px;
    color: #fff;
    /* 字间距 */
    letter-spacing: 5px;
}
input{
    background-color: transparent;
    width: 70%;
    color: #fff;
    border: none;
    /* 下边框样式 */
    border-bottom: 1px solid rgba(255,255,255,0.4);
    padding: 10px 0;
    text-indent: 10px;
    margin: 8px 0;
    font-size: 14px;
    letter-spacing: 2px;
}
input::placeholder{
    color: #fff;
}
input:focus{
    color: #ECA817;
    outline: none;
    border-bottom: 1px solid #4B6331;
    transition: 0.5s;
}
input:focus::placeholder{
    opacity: 0;
}
.form-box button{
    width: 70%;
    margin-top: 35px;
    background-color: #f6f6f6;
    outline: none;
    border-radius: 8px;
    padding: 13px;
    color: #ECA817;
    letter-spacing: 2px;
    border: none;
    cursor: pointer;
}
.form-box button:hover{
    background-color: #4B6331;
    color: #f6f6f6;
    transition: background-color 0.5s ease;
}
.con-box{
    width: 50%;
    /* 弹性布局 垂直排列 居中 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* 绝对定位 居中 */
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
.con-box.left{
    left: -2%;
}
.con-box.right{
    right: -2%;
}
.con-box h2{
    color: #000000;
    font-size: 23px;
    font-weight: 500;
    letter-spacing: 3px;
    text-align: center;
    margin-bottom: 4px;
}
.con-box p{
    font-size: 12px;
    letter-spacing: 2px;
    color: #4B6331;
    text-align: center;
}
.con-box span{
    font-size: 30px;
    font-weight:700;
    color: #ECA817;
}

.con-box img{
    width: 150px;
    height: 150px;
    opacity: 0.9;
    margin: 40px 0;
}
.con-box button{
    margin-top: 25px;
    background-color: #fff;
    color: #ECA817;
    border: 1px solid #000000;
    padding: 6px 10px;
    border-radius: 5px;
    letter-spacing: 1px;
    outline: none;
    cursor: pointer;
}
.con-box button:hover{
    margin-top: 25px;
    background-color: #4B6331;
    color: #fff;
}
#leftframe1{
    position: relative;
    border-radius: 20px;
    float: left;
    width: 30%;
    height:1%;
    margin-top:15.4%;
    z-index: 99;
    background-color: #fff;
}
#rightframe1{
    position: relative;
    float: right;
    border-radius: 20px;
    width: 23%;
    height:1%;
    margin-top:10%;
    z-index: 99;
    background-color: #fff;
}
#underframe{
    position: relative;
    float:inline-end;
    right: 3%;
    width: 95%;
    height:0.1%;
    margin-top:47.6%;
    z-index: 99;
    background-color: #fff;
}
  </style>
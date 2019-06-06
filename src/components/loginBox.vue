<template>
    <div class="loginContainer">
      <div class="loginContent">
        <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
      </div>
      <div class="loginButton">
        <el-button type="primary" size="mini">
          用户登录
        </el-button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "loginBox"
    }
</script>

<style scoped>
.loginContainer{
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background: url(../assets/index.png) no-repeat 0 9999px;
  border-bottom:1px solid #ccc ;
}
.loginContainer p{
  display: block;
  font-size: 12px;
  color: #333;
  font-family: Arial, Helvetica, sans-serif;
  -webkit-text-size-adjust: none;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
  .loginButton{
    padding: 20px 10px;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    justify-content: center;
  }
  .loginContent{
    padding: 10px 20px;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    justify-content: center;
  }
.loginContainer .el-button--primary{
    background-color: red;
  border-color: red;
  }
</style>

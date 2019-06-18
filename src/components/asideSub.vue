<template>
    <div class="asideCon">
      <el-card :body-style="{ padding: '0 0' }" shadow="hover" style="cursor: pointer" >
            <el-row>
              <el-col :span="8">
                <img :src="userData.img1v1Url" class="image" @click.stop="clickCard">
              </el-col>
              <el-col :span="16" style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;">
                <div style="padding:5px 14px;" @click.stop="clickCard">
                  <h5>{{userData.name}}</h5>
                  <p>{{userData.name}}</p>
                </div>
              </el-col>
            </el-row>
          </el-card>
    </div>
</template>

<script>
    export default {
        name: "asideSub",
      props:{
        userData:Object
      },
      data(){
          return {
            currentDate: new Date()
          }
      },
      methods:{
        clickCard(){
          console.log('点击')
          this.$router.push({path:'/artist?id='+this.userData.name})
        }
      }
    }
</script>

<style scoped>
  .image {
    width: 76px;
    height: 76px;
    display: block;
  }
  .asideCon{
    padding: 10px 20px;
  }
  .asideCon p{
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
  .asideCon h5 {
    font-weight: bold;
  }
 .asideCon .el-card__body{
    cursor: pointer;
  }
</style>

<template>
    <div class="asideCon">
      <el-card :body-style="{ padding: '0 0' }" shadow="hover">
            <el-row>
              <el-col :span="8">
                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
              </el-col>
              <el-col :span="16">
                <div style="padding:0 14px;">
                  <h5>张惠妹</h5>
                  <p>台湾歌手张惠妹</p>
                </div>
              </el-col>
            </el-row>
          </el-card>
    </div>
</template>

<script>
    export default {
        name: "asideSub",
      data(){
          return {
            currentDate: new Date()
          }
      }
    }
</script>

<style scoped>
  .image {
    width: 100%;
    height: 100%;
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

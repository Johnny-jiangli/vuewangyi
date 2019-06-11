<template>
  <div >
    <el-row type="flex" class="recommendTitle">
      <el-col :span="2" >
        <h1 class="h3">{{title}}</h1>
      </el-col>
      <el-col :span="18">
        <div class="ul">
          <ul>
            <li v-for="(item,index) in items" :key="index"><a href="">{{item.title}}</a></li>
          </ul>
        </div>
      </el-col>
      <el-col :span="4">
        <a href="#" class="float-right">更多 <i class="el-icon-d-arrow-right" style="color: red"></i></a>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    name: "playBox",
    props:{
      title: {
        type:String,
        default:()=>{
          return 'test'
        }
      },
      items:{
        type:Array,
        default:()=>{
          return [{id:0,title:'华语',label:'1'},{id:1,title:'华语',label:'1'},{id:2,title:'华语',label:'1'}]
        }
      }
    },
    data(){
      return{

      }
    }
  }
</script>

<style scoped>
  .recommendTitle{
    width: 100%;
    height: 33px;
    padding: 0px 15px 0px 30px;
    background-position: -225px -156px;
    border-bottom: 2px solid rgb(193, 13, 12);
    margin-bottom:30px ;
  }
  .recommendTitle{
    background: url(../assets/statbar.png) 0px 9999px no-repeat;
  }
  .recommendTitle,ul{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-items: center;
  }
  .gengduo{
    align-self: stretch;
  }

  .h3{
    flex-shrink:1
  }
  .ul{
    flex-shrink:4
  }
  ul li{
    list-style: none;
    padding-right:10px ;
    padding-left:10px ;
    border-right: 1px solid #ccc;
  }
  ul li:last-child{
    align-self: stretch;
    border-right:none ;
  }
</style>

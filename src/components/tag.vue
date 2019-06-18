<template>
  <div class="tagSty">
      <ul class="">
        <li v-for="(item,key,index) in pathArr"  :key="index" @click="active(item.id)"><router-link :to="item.url"  :class="{active: showId == item.id}">{{item.label}}</router-link> </li>
      </ul>
  </div>

</template>

<script>
    export default {
        name: "tag",
        data(){
          return {
            showId:1,
            pathArr: [
              { id:1,type: '', label: '推荐' ,url:'/discover/recommend'},
              { id:2, label: '排行榜' ,url:'/discover/toplist'},
              { id:3,label: '歌单' ,url:'/discover/playlist'},
              { id:4,label: '主播电台', url:'/discover/djradio'},
              { id:5, label: '歌手' ,url:'/discover/artist'},
              { id:6,type: 'warning', label: '新歌上架',url:'/discover/album' }
            ]
          }
        },
      methods:{
        active(id){
          this.showId = id;
          console.log(this.showId)
        },
        refreshPage(){
          let path = this.$route.path;
          for (let i =0 ,n =this.pathArr.length ; i < n ; i++){
            if(this.pathArr[i].url === path){
              this.showId = this.pathArr[i].id
            }
          }
          return false;
        }
      },
      mounted() {
          this.refreshPage()
      }
    }
</script>

<style scoped>
.tagSty{
  height: 40px;
  width: 100%;
  background-color:red;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-items: center;
  justify-content: center;
}
  ul{
    min-width: 500px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-items: flex-start;
    align-items: center;
    justify-content: space-between;
  }
  ul li{
    list-style: none;
    height: 34px;
    line-height: 34px;
    text-align: center;
  }
  ul li a {
    font-size: 12px;
    color: #fff;
    text-decoration: none;
    padding: 2px 10px;
  }
  ul li a:hover{
    background-color: #9B0909;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px;
    border: none;
  }
.active{
  background-color: #9B0909;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 15px;
  border: none;
}

</style>

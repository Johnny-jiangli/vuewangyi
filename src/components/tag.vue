<template>
  <div class="tagSty">
      <ul class="">
        <li v-for="(item,key,index) in items"  :key="index" @click="active(item.id)"><router-link :to="item.url"  :class="{active: showId == item.id}">{{item.label}}</router-link> </li>
      </ul>
  </div>

</template>

<script>
    export default {
        name: "tag",
        data(){
          return {
            showId:1,
            items: [
              { id:1,type: '', label: '推荐' ,url:'/discover/recommend'},
              { id:2,type: 'success', label: '排行榜' ,url:'/discover/toplist'},
              { id:3,type: 'info', label: '歌单' ,url:'/discover/playlist'},
              { id:4,type: 'danger', label: '主播电台', url:'/discover/djradio'},
              { id:5,type: 'warning', label: '歌手' ,url:'/discover'},
              { id:6,type: 'warning', label: '新歌上架',url:'/discover' }
            ]
          }
        },
      methods:{
        active(id){
          this.showId = id;
          console.log(this.showId)
        }
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

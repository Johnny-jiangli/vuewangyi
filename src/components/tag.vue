<template>
  <div class="tagSty">
    <div class="tagContent">
      <ul class="">
        <li v-for="(item,key,index) in items"  :key="index"><a href="#">{{item.label}}</a></li>
      </ul>
    </div>
  </div>

</template>

<script>
    export default {
        name: "tag",
        data(){
          return {
            items: [
              { type: '', label: '推荐' },
              { type: 'success', label: '排行榜' },
              { type: 'info', label: '歌单' },
              { type: 'danger', label: '主播电台' },
              { type: 'warning', label: '歌手' },
              { type: 'warning', label: '新歌上架' }
            ]
          }
        }
    }
</script>

<style scoped>
.tagSty{
  height: 30px;
  width: 100%;
  background-color:red;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-items: center;
  justify-content: center;
}
.tagContent{
  width: 600px;
  min-width: 600px;
}
  ul{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-items: flex-start;
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
</style>

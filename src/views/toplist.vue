<template>
    <div class="topListWarp">
      <div class="topListInner">
        <div class="topListLeft">
1
        </div>
        <div class="topListRight">
          <div class="rightHeader">
            <div class="rightHeaderPadding">
              <div class="rh-left rh-box">
                <img src="../assets/playlist.png" alt="">
              </div>
              <div class="rh-right rh-box">
                <div style="margin-left:187px ">
                 <div>
                   <h2>XXXX</h2>
                 </div>
                  <div style="margin: 0 0 20px;line-height: 35px;">
                    <i class="el-icon-time"></i>
                    <span>dsadsada</span>
                    <span style="margin-left: 10px">dsadsada</span>
                  </div>
                  <div>
                    <el-button-group>
                      <el-button title="播放" type="primary" icon="el-icon-video-play" size="mini"  @click="addAllPlaylist">播放</el-button>
                      <el-button type="primary" size="mini" icon="el-icon-plus" title="添加到播放"></el-button>
                    </el-button-group>
                    <el-button  icon="el-icon-folder-add" size="mini" title="收藏" style="margin-left: 20px">（1）</el-button>
                    <el-button  icon="el-icon-share" size="mini" title="分享">（2）</el-button>
                    <el-button icon="el-icon-chat-dot-square" size="mini" title="评论">（3）</el-button>
                  </div>
                </div>
              </div>
              <div class="clearfix"></div>
            </div>
          </div>
          <div class="rightContent">
            <div class="u-title u-title-1 f-cb">
              <h3><span class="f-ff2">歌曲列表</span></h3>
              <span class="sub s-fc3"><span>100</span>首歌</span>
              <div class="more s-fc3">播放：<strong class="s-fc6" id="play-count">42798408</strong>次</div>
            </div>
            <div class="rc-body">
              <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                  prop="date"
                  width="78">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="标题"
                  >
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="时长"
                  width="91"
                >
                </el-table-column>
                <el-table-column label="歌手"
                width="93"></el-table-column>
              </el-table>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "toplist",
      data(){
          return {
            tableData: [{
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1517 弄'
            }, {
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }, {
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄'
            }]
          }
      }
    }
</script>

<style scoped>
  .u-title-1 .sub {
    margin: 9px 0 0 20px;
  }
  .u-title .sub {
    float: left;
    margin: 13px 0 0 10px;
  }
  .s-fc3, a.s-fc3:hover {
    color: #666;
  }
  .u-title-1 h3 {
    font-size: 20px;
    line-height: 28px;
  }
  .u-title h3 {
    float: left;
    font-size: 24px;
    font-weight: normal;
  }
  .u-title-1 .more {
    margin-top: 5px;
  }
  .u-title .more {
    float: right;
    margin-top: 14px;
  }
  .s-fc3, a.s-fc3:hover {
    color: #666;
  }
  .rightContent,.rightHeader{
    padding: 0 30px 40px 40px;
  }
  .u-title-1 {
    height: 33px;
  }
  .u-title {
    height: 40px;
    border-bottom: 2px solid #c20c0c;
  }
button{
  padding: 5px 5px;
}
.topListWarp{
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  /*align-items: center;*/
}
  .topListInner{
    width: 982px;
    display: flex;
    flex-direction: row;
  }
  .topListLeft{
    width: 240px;
    background-color: #99a9bf;
  }
.topListRight{
  width: 740px;
}
.rightHeader{
  padding-top: 40px;
}
  .rightHeaderPadding{
    width: 100%;
    height: 158px;
    overflow: hidden;
  }

  .rh-left{
    float: left;
    position: relative;
    display: inline;
    margin: 0 -220px 0 0;
    padding: 3px;
    border: 1px solid #ccc;
  }
  .rh-right{
    float: right;
    width: 100%;
    height: 158px;
    overflow: hidden;
    background-color: #42b983;
  }
  .rh-left img{
    height: 150px;
    width: 150px;
    background-color: white;
  }
  .rh-left{
    border: 1px #ccc solid;
  }
</style>

<template>
  <div class="player">
    <div class="">
      <audio :src="audiourl" id="audioPlay" @canplay="canPlaySong"
             @timeupdate="updateTime"
      ></audio>
    </div>
    <div class="playbd">
      <div class="g-btmbar">
        <div class="m-playbar m-playbar-unlock">
          <div class="wrap" id="g_player">
            <div class="btns">
              <a href="javascript:;" hidefocus="true" data-action="prev" class="prv" title="上一首(ctrl+←)" @click="controlPlayerPrv">上一首</a>
              <a href="javascript:;" hidefocus="true" data-action="play" class="play j-flag" :class="[playBgIndex ? playTrue:playFalse]" title="播放/暂停(p)" @click="controlPlayer">播放/暂停</a>
              <a href="javascript:;" hidefocus="true" data-action="next" class="next" title="下一首(ctrl+→)" @click="controlPlayerNext">下一首</a>
            </div>
          </div>
        </div>
        <div class="progress">
<!--          <progressslider :mwidth="mwidth" @change="setTime"></progressslider>-->
          <div class="time">
            <span id="cur">{{time.start}}</span>
            <span id="total">{{time.end}}</span>
          </div>
          <el-slider v-model="val" class="playSlider" height="24" :format-tooltip="formatTooltip"  :max="sliderMax" :min="sliderMin"></el-slider>
        </div>
        <div class="oper f-fl">
          <a href="javascript:;" hidefocus="true" data-action="like" class="icn icn-add j-flag" title="收藏">收藏</a>
          <a href="javascript:;" hidefocus="true" data-action="share" class="icn icn-share" title="分享">分享</a>
        </div>
        <div class="ctrl f-fl f-pr j-flag">
          <div class="m-vol">
            <el-slider
              class="barbg"
              v-model="value"
              vertical
              height="100px">
            </el-slider>
          </div>
          <a href="javascript:;" hidefocus="true" data-action="volume" class="icn icn-vol"></a>
          <a href="javascript:;" hidefocus="true" data-action="mode" class="icn icn-loop" title="循环"></a>
          <span class="add f-pr">
<span class="tip" style="display:none;">已添加到播放列表</span>
<a href="javascript:;" title="播放列表" hidefocus="true" data-action="panel" class="icn icn-list s-fc3">{{playListData.length}}</a>
</span>
          <div class="tip tip-1" style="display:none;">循环</div>
        </div>
      </div>
    </div>
    <div class="list">
      <div class="listhd">
        <div class="listhdc">
          <h4>播放列表(<span class="j-flag">{{playListData.length}}</span>)</h4>
          <a href="javascript:;" class="addall" data-action="likeall"><span class="ico ico-add"></span>收藏全部</a><span class="line"></span>
          <a href="javascript:;" class="clear" data-action="clear"><span class="ico icn-del"></span>清除</a>
          <p class="lytit f-ff0 f-thide j-flag"></p>
          <span class="close" data-action="close">关闭</span>
        </div>
      </div>
      <div class="listbd">
        <img class="imgbg j-flag">
        <div class="msk"></div>
        <div class="listbdc j-flag">
          <div class="nocnt" v-if="textShow">
            <i class="ico ico-face"></i> 你还没有添加任何歌曲<br>去首页<a href="/discover/" class="f-tdu" style="color: #91acda">发现音乐</a>，或在<a href="/my/" class="f-tdu">我的音乐</a>收听自己收藏的歌单。
          </div>
          <div v-else-if="!textShow">
            <el-table
              :data="playListData"
              style="width: 100%;height:301px;overflow: scroll;font-size: 12px;background: #000"
              width="100%"
            >
              <el-table-column
                prop="name"
                align="left"
              >
              </el-table-column>
              <el-table-column
                width="180"
                align="center"
              >
                <template slot-scope="scope">
                      <i @click="addPlaylist(scope.row)"  class="playIcon el-icon-video-play" title="播放"></i>
                      <i class="playIcon el-icon-delete" title="删除" data-action="delete"></i>
                      <i class="playIcon el-icon-download" title="下载"  data-action="download"></i>
                      <i class="playIcon el-icon-share" title="分享" data-action="share"></i>
                      <i class="playIcon el-icon-folder-add" title="收藏"  data-action="like"></i>
                </template>
              </el-table-column>

              <el-table-column
                align="center"
                >
                <template slot-scope="scope">
                  <!--                      {{scope.row.ar[0].name}}-->
                  {{transitionMoment(scope.row.dt)}}
                </template>
              </el-table-column>
<!--              <el-table-column-->
<!--                prop="name"-->
<!--              >-->
<!--              </el-table-column>-->
              <el-table-column
                align="right"
              >
                <template slot-scope="scope">
                  {{scope.row.al.name}}
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
        <div class="bline j-flag" ><span class="scrol" hidefocus="true" style="height: 260px; display: none; top: 0px;"></span></div>
        <div class="ask j-flag" >
          <a class="ico ico-ask"></a>
        </div>
        <div class="upload j-flag" style="display: none;">
        </div>
        <div class="msk2"></div>
        <div class="listlyric j-flag" ></div>
        <div class="bline bline-1 j-flag" >
          <span class="scrol scrol-1 j-flag" hidefocus="true" style="height: 260px; display: none;"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Progressslider from '../Progressslider/Progressslider.vue';
  import {mapState} from 'vuex'
  import {changeTime} from '../../common/js/changeTime';
  import moment from 'moment'
  export default {
    name: "player",
    data(){
      return{
        afn :function () {
          console.log('ces')
        },
        playTrue:"playTrue",
        playFalse:'playFalse',
        playBgIndex:false,
        sliderMax:600,
        sliderMin:0,
        val: 0,
        value4:50,
        value:50,
        start:true,
        startH:'',
        disabled: false,
        vbgH:'0',
        // mVolTop:'80',
        mVolTop:40,
        index: -1,
        listshow: false,
        showFlag: false,
        playing: true,
        tipshow: false,
        song: {},
        albumPic: '../../../static/img/placeholder_disk_play_song.png',
        songname: '暂无歌曲',
        list: [],
        mwidth: 0,
        textShowBool:false,
        audiourl:"http://m10.music.126.net/20190612173251/7e2d11182ee782ddc4229fd238a46f1a/ymusic/6b92/2350/20dd/998837ccdd15253f0d85eaf95cb97786.flac",
        time: {
          start: '00:00',
          end: '00:00'
        },
      }
    },
    computed:mapState({
      playListData:'playList',
      currentPlayA:'currentPlay',
      textShow:function(){
        return this.textShowBool;
      }
    }),
  watch:{
    currentPlayA:function (value,oldV) {
      console.log('dsadsadsad')
      this.axios.get('/song/url?id='+value.id).then(res=>{
        if (res.data.data[0].url === null) {
          console.log('歌曲加载错误');
        } else {
          this.audiourl = res.data.data[0].url;
          this.canPlaySong();
          this.$nextTick(() => {
            this.canPlaySong();
          });
        }
      })
    },
    playListData:function (newValue) {
     if(newValue.length > 0){
       this.textShowBool = false
     } else {
       this.textShowBool = true
     }
    }
  },
    methods:{
      formatTooltip(val) {
        let m = parseInt(val/60);
        let s = val % 60
        console.log(m)
        console.log(s)
        console.log('绑定的值')
        console.log(this.val)
        if(s == 0){
          s = '00'
        }else {
          if(s<10){
            s = '0'+ s
          }
        }
        return m+':'+s
      },
      tableRowClassName(){

      },
      testmVol(){
        console.log('testmVol')
      },
      fn(){
        this.$store.dispatch('increment')
      },
      pre() {
        if (this.index > 0) {
          console.log('pre');
          this.index--;
          this.item = this.list[this.index];
          this.playsong(this.index, this.item);
        }
      },
      handleTouchStartMVol(e){
        if (this.disabled) return;
        console.log('开始');
        this.startH = e.touches[0].clientY;
        this.setValue(e.touches[0]);
        document.addEventListener('touchmove', this.handleTouchMoveMVol);
        document.addEventListener('touchup', this.handleTouchEndMVol);
        document.addEventListener('touchend', this.handleTouchEndMVol);
        document.addEventListener('touchcancel', this.handleTouchEndMVol);
        e.preventDefault();
      },
      handleTouchMoveMVol(e){
        this.setValue(e.touches[0]);
        console.log('handleTouchMoveMVol')
      },
      handleTouchEndMVol(e){
        if (this.disabled) return;
        console.log('结束')
        document.removeEventListener('touchmove', this.handleTouchMoveMVol);
        document.removeEventListener('touchup', this.handleTouchEndMVol);
        document.removeEventListener('touchend', this.handleTouchEndMVol);
        document.removeEventListener('touchcancel', this.handleTouchEndMVol);
      },
      setValue(e){
        let value = e.clientY - this.startH;
        if(value > -38 && value < 38){
          console.log('差值'+value);
          this.mVolTop = 35 + value
        }
      },
      next() {
        if (this.index < this.list.length - 1) {
          console.log('next');
          this.index++;
          this.item = this.list[this.index];
          this.playsong(this.index, this.item);
        }
      },
      _initScroll() {
        if (!this.songlistScroll) {
          this.songlistScroll = new BScroll(this.$refs.songlistWrapper, {
            click: true
          });
        } else {
          this.songlistScroll.refresh();
        }
      },
      nulllist() {
        this.list.splice(0, this.list.length);
        this.hide();
      },
      hidelist() {
        this.listshow = false;
      },
      showlist() {
        this.listshow = true;
      },
      show(item) {
//      this.albumPic = item.al.picUrl;
        this.showFlag = true;
        if (item) {
          let index = 0;
          var thisindex = 0;
          for (let i in this.list) {
            if (this.list[i].songname === item.songname) {
              thisindex = i;
              index++;
            }
          }
          if (index === 0) {
            this.list.push(item);
            this.$nextTick(() => {
              this._initScroll();
            });
            this.playsong(this.list.length - 1, item);
          } else {
            this.playsong(thisindex, item);
          }
        }
      },
      controlPlayer(){
        console.log('播放');
        console.log(this.playBgIndex);
        if(this.playListData.length === 0){
          this.playBgIndex = !this.playBgIndex
        }else {
          this.playBgIndex = !this.playBgIndex;
          this.playBgIndex === true ? document.getElementById('audioPlay').play() :document.getElementById('audioPlay').pause()
        }
      },
      controlPlayerPrv(){
        this.$store.dispatch('playPrv')
        this.addPlaylist(this.playListData[this.$store.state.index])
      },
      controlPlayerNext(){
        this.$store.dispatch('increment')
        this.addPlaylist(this.playListData[this.$store.state.index])
      },
      playsong(index, item) {
        console.log(index);
        this.hidelist();
        this.index = index;
        this.song = item;
        this.albumPic = item.migUrl;
        this.songname = item.songname;
        this.name = item.name;
        if (item.audiosrc !== undefined) {
          this.audiourl = item.audiosrc;
          this.$nextTick(() => {
            this.canPlaySong();
          });
        } else {
          this.get(item);
          this.canPlaySong();
        }
      },
      canPlaySong() {
        document.getElementById('audioPlay').play();
        this.playing = false;
        console.log('播放')
      },
      get(item) {
        this.$http.get(api.getSong(item.id)).then((res) => {
          console.log('加载成功');
          if (res.data.data[0].url === null) {
            console.log('歌曲加载错误');
          } else {
            this.audiourl = res.data.data[0].url;
            this.canPlaySong();
            this.$nextTick(() => {
              this.canPlaySong();
            });
          }
        }).catch((error) => {
          console.log('加载歌曲信息出错:' + error);
        });
      },
      hide() {
        this.showFlag = false;
      },
      togglePlay() {
        if (this.playing === false) {
          document.getElementById('audioPlay').pause();
          this.playBgIndex = 1;
          this.playing = true;
        } else {
          document.getElementById('audioPlay').play();
          this.playBgIndex = 0;
          this.playing = false;
        }
      },
      updateTime() {
        console.log('更新时间');
        var myaudio = document.getElementById('audioPlay');
        var time = parseInt(myaudio.currentTime);
        var timelength = myaudio.duration;
        // console.log('现在时间')
        // console.log(time)
        // console.log('完成时间')
        // console.log(timelength)
        // console.log('状态')
        console.log(myaudio.ended)
        if(myaudio.ended === true){
          this.$store.dispatch('increment');
          console.log(this.$store.state.index)
          this.addPlaylist(this.playListData[this.$store.state.index])
        }
        if (isNaN(timelength)) {
          this.tipshow = true;
        } else {
          this.tipshow = false;
          this.mwidth = time / timelength * 100;
          this.time.start = changeTime(time);
          this.time.end = changeTime(timelength);
          this.val = time;
          this.sliderMax = Math.floor(timelength)
          timelength = parseInt(timelength)
          if (timelength === time) {
            console.log('播放完毕')
            this.togglePlay();
          }
        }
      },
      setTime(value) {
        var myaudio = document.getElementById('audioPlay');
        var timelength = myaudio.duration;
        myaudio.currentTime = timelength * value / 100;
      },
      addPlaylist(data){
        this.axios.get('/song/url?id='+data.id).then(res=>{
          console.log(res)
          if (res.data.data[0].url === null) {
            console.log('歌曲加载错误');
          } else {
            this.audiourl = res.data.data[0].url;
            this.playBgIndex = true;
            this.canPlaySong();
            this.$nextTick(() => {
              this.canPlaySong();
            });
          }
        })
      },
      getData(){
        this.axios.get('/playlist/detail?id=24381616').then(res=>{
          console.log('获取信息')
          console.log(res)
          this.playlist =res.data.playlist
          this.tracks = res.data.playlist.tracks
          console.log(this.tracks)
        })
      },
      transitionMoment(ms){
        let m = moment(ms).get('minute');
        let s = moment(ms).get('second');
        if(s <10){
          s = '0'+s
        }
        return m+':'+ s
      }
    },
    created() {
      this.$nextTick(() => {
        this.canPlaySong();
      });
    },
    components:{
      Progressslider
    }
  }
</script>
<style scoped>

  .playbd{
    position: absolute;
    bottom:0;
    height: auto;
    width: 100%;
  }
  .g-btmbar{
    width: 100%;
    background: #141824;
    height: 56px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:center;
  }
  .m-playbar{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .btns .prv{
    display: block;
    float: left;
    width: 28px;
    height: 28px;
    margin-right: 8px;
    margin-top: 5px;
    text-indent: -9999px;
    background: url("../../assets/playbar.png") 0 -130px no-repeat;
  }
  .btns .prv:hover{
    background: url("../../assets/playbar.png") -30px -130px no-repeat;
  }
  .btns .next:hover{
    background: url("../../assets/playbar.png") -110px -130px no-repeat;
  }


  .btns .play{
    display: block;
    float: left;
    width: 36px;
    height: 36px;
    margin-right: 8px;
    margin-top: 0;
    text-indent: -9999px;
  }
  .playTrue{
    background: url("../../assets/playbar.png") 0 -165px no-repeat;
  }
  .playFalse{
    background: url("../../assets/playbar.png") 0 -204px no-repeat;
  }
  .btns .next{
    display: block;
    float: left;
    width: 28px;
    height: 28px;
    margin-right: 8px;
    margin-top: 5px;
    text-indent: -9999px;
    background:  url("../../assets/playbar.png") -80px -130px no-repeat;
  }
  .progress{
    width:60%;
    padding-left:6%;
    padding-right:6%;
    height: 24px;
    /*margin:0 auto;*/
    position:relative  ;
  }
  .time span {
    position: absolute;
    top: 25%;
    font-size:12px;
    opacity: .8;
    color: #141824
  }
  #cur{
    left:0
  }
  #total{
    right:0
  }
  .oper {
     width: 60px;
     height: 36px;
  }
  .f-fl {
    height: 36px;
    line-height: 36px;
    display: flex;
    flex-direction: row;
    align-content: center;
  }
 .icn-add {
    background: url("../../assets/playbar.png") -88px -163px no-repeat ;
  }
  .icn-add:hover {
    background: url("../../assets/playbar.png") -88px -189px no-repeat ;
  }
  .icn-share{
    background: url("../../assets/playbar.png") -114px -163px no-repeat ;
  }
  .icn-share:hover{
    background: url("../../assets/playbar.png") -114px -189px no-repeat ;
  }
  .icn-vol {
    background: url("../../assets/playbar.png") -2px -248px no-repeat ;
  }
  .icn-vol:hover {
    background: url("../../assets/playbar.png") -31px -248px no-repeat ;
  }
  .icn-loop{
    background: url("../../assets/playbar.png") -3px -344px no-repeat ;
  }
  .icn-loop:hover{
    background: url("../../assets/playbar.png") -33px -344px no-repeat ;
  }
  .icn-list{
    background: url("../../assets/playbar.png") -42px -68px no-repeat ;
  }
  .icn-list :hover{
    background: url("../../assets/playbar.png") -42px -94px no-repeat ;
  }
  .tip {
    position: absolute;
    top: -51px;
    left: -65px;
    clear: both;
    width: 152px;
    height: 49px;
    background: url("../../assets/playbar.png") 0 -287px no-repeat;
    text-align: center;
    color: #fff;
    line-height: 37px;
  }
  .f-pr {
    position: relative;
    zoom: 1;
  }
  .m-vol {
    position: absolute;
    top: -113px;
    left: 9px;
    clear: both;
    width: 32px;
    height: 113px;
  }
 .icn-vol {
    background-position: -2px -248px;
  }
  .icn {
    float: left;
    width: 25px;
    height: 25px;
    margin: 5px 2px 0 5px;
    text-indent: -9999px;
  }
  .m-vol .barbg {
    position: absolute;
    top: -15px;
    padding-top: 5px;
    padding-right:5px;
    left: -10px;
    width: 32px;
    height: 120px;
    background-color: #333333;
    /*background: url("../../assets/playbar.png") 0 -503px no-repeat ;*/
  }
  .m-vol .vbg {
    padding: 4px 0;
    top: 7px;
  }
  .m-vol .vbg, .m-vol .curr {
    position: absolute;
    top: 8px;
    left: 9px;
    width: 4px;
    height: 93px;
  }
  .m-vol .curr {
    top: auto;
    bottom: 0;
    left: 0;
    background: url("../../assets/playbar.png") -40px bottom no-repeat;
    overflow: hidden;
  }
  .m-vol .btn {
    position: absolute;
    left: -8px;
    display: block;
    width: 18px;
    height: 20px;
    background: url("../../assets/iconall.png") -40px -250px no-repeat ;
    _background-position: 0 0;
    cursor: pointer;
  }
  .list {
    position: absolute;
    left: 50%;
    bottom: 45px;
    _bottom: 45px;
    width: 986px;
    _width: 982px;
    height: 301px;
    margin-left: -493px;
    _marign-left: -491px;
    font-size: 12px;
  }
  .listhd {
    background: url("../../assets/playlist_bg.png") 0 0 no-repeat;
    height: 40px;
  }

  .listhd,.listbd {
    padding: 0 5px;
  }
  .listhdc {
      position: relative;
      height: 40px;
    }
 .listbd {
    position: absolute;
    left: 0;
    top: 41px;
    width: 986px;
    _width: 972px;
    height: 250px;
    overflow: hidden;
   background: url("../../assets/playlist_bg.png") -1014px 0 repeat-y;
   _background: url("../../assets/playlist_bg.png") -1014px 0 repeat-y;
  }
 .imgbg {
    position: absolute;
    left: 2px;
    _left: 0;
    top: -1px;
    z-index: 1;
    width: 980px;
    height: auto;
    opacity: .2;
    filter: Alpha(opacity=20);
  }
  .msk {
    position: absolute;
    left: 2px;
    _left: 0;
    top: 0;
    z-index: 2;
    width: 558px;
    height: 260px;
    background: #121212;
    opacity: .5;
    filter: Alpha(opacity=50);
  }
  .listbdc {
    position: absolute;
    left: 2px;
    _left: 0;
    top: 0;
    z-index: 4;
    height: 260px;
    width: 553px;
    overflow: hidden;
  }
  .list .nocnt,.list .nocnt a {
    color: #aaa;
  }
  .list .nocnt {
    padding-top: 85px;
    text-align: center;
    line-height: 43px;
  }
  .list .nocnt .ico {
    float: none;
    display: inline-block;
    position: relative;
    top: -4px;
    width: 36px;
    height: 29px;
    margin-right: 3px;
    background: url("../../assets/playlist.png") -138px 0 no-repeat ;
    vertical-align: middle;
  }
   .listbd .bline {
    position: absolute;
    left: 555px;
    _left: 553px;
    top: -1px;
    z-index: 2;
    width: 6px;
    height: 260px;
    background: #000;
    opacity: .5;
    filter: Alpha(opacity=50);
  }
  .listbd .scrol {
    position: absolute;
    left: 0;
    top: 0px;
    width: 4px;
    border-radius: 5px;
    height: 100px;
    cursor: pointer;
    background: #868686;
    border: 1px solid #a6a6a6;
    opacity: .8;
    filter: Alpha(opacity=80);
  }
   .ask {
    position: absolute;
    right: 25px;
    top: 12px;
    cursor: pointer;
    z-index: 5;
  }
 .ico-ask {
    display: inline-block;
    width: 21px;
    height: 21px;
    /*background-position: 0 -50px;*/
   background:  url("../../assets/playlist_ask.png") no-repeat;
    text-indent: 0;
    _background: none;
    _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='../../assets/playlist_ask.png',sizingMethod='scale');
  }
  .upload {
    position: absolute;
    right: 12px;
    top: 40px;
    box-shadow: 0 2px 3px rgba(0,0,0,.75);
    width: 81px;
    z-index: 5;
    display: none;
  }
   .msk2 {
    position: absolute;
    left: 560px;
    _left: 560px;
    top: 0;
    z-index: 3;
    width: 420px;
    height: 250px;
    background: #121212;
    opacity: .01;
    filter: Alpha(opacity=1);
  }
  .listlyric {
    position: absolute;
    right: 40px;
    top: 0;
    z-index: 4;
    margin: 21px 0 20px 0;
    height: 219px;
    width: 354px;
    overflow: hidden;
  }
  .listbd .bline-1 {
    left: auto;
    right: 2px;
    _right: 0;
  }
   .listbd .bline {
    position: absolute;
    left: 555px;
    _left: 553px;
    top: -1px;
    z-index: 2;
    width: 6px;
    height: 260px;
    background: #000;
    opacity: .5;
    filter: Alpha(opacity=50);
  }
  .listhdc h4 {
    position: absolute;
    left: 25px;
    top: 0;
    height: 39px;
    line-height: 39px;
    font-size: 14px;
    color: #e2e2e2;
  }
  .listhdc .addall {
    left: 398px;
  }
  .listhdc .clear, .listhdc .addall {
    position: absolute;
    left: 490px;
    top: 10px;
    height: 15px;
    line-height: 15px;
    cursor: pointer;
  }
  .listhdc a {
    color: #ccc;
  }
   .listhdc .ico {
    float: left;
    margin: 1px 6px 0 0;
    *margin-top: 0;
  }
   .listhdc .ico {
    float: left;
    margin: 1px 6px 0 0;
    *margin-top: 0;
  }
   .ico {
    height: 20px;
  }
   .ico-add {
     width: 20px;
     background: url("../../assets/playlist.png") -24px 0 no-repeat;
  }
   .ico-add:hover,.addall:hover .ico-add{
     width: 20px;
     background: url("../../assets/playlist.png") -24px -20px no-repeat;
   }
   .ico {
    height: 20px;
  }
.listhdc .line {
    position: absolute;
    top: 13px;
    left: 477px;
    height: 15px;
    border-left: 1px solid #000;
    border-right: 1px solid #2c2c2c;
  }
  .listhdc .addall {
    left: 398px;
  }
   .listhdc .ico {
    float: left;
    margin: 1px 6px 0 0;
    *margin-top: 0;
  }

   .icn-del {
    width: 13px;
    /*background-position: -51px 0;*/
    background: url("../../assets/playlist.png") -51px 0 no-repeat;
  }
   .icn-del:hover, a:hover .icn-del {
     background: url("../../assets/playlist.png") -51px -20px no-repeat;
  }
   .ico {
    height: 20px;
  }
   .listhdc .close {
    position: absolute;
    top: 6px;
    right: 8px;
    width: 30px;
    height: 30px;
    overflow: hidden;
    text-indent: -999px;
    cursor: pointer;
    /*background-position: -195px 9px;*/
     background: url("../../assets/playlist.png") -195px 9px no-repeat;
  }
  .el-table .success-row {
    background: #f0f9eb;
  }
.playIcon{
  margin-right:10px ;
  font-weight: bold;font-size: 18px;
  cursor: pointer
}
  .playIcon:hover{
    color: white;
  }
  .playSlider{
    width: 100%;
    position: relative;
    top: -5px;
    display: flex;
    cursor: default;
    outline: none;
  }
</style>

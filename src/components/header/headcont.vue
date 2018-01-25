<template>
  <div class="headcont">
    <!--首页轮播-->
    <div class="lunbo">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide T_bannerone"></div>
          <div class="swiper-slide T_bannertwo"></div>
          <div class="swiper-slide T_bannertree"></div>
          <div class="swiper-slide T_bannerfour"></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
      <div class="channel">
        <div class="cate_channel">
          <el-tabs type="border-card">
            <el-tab-pane>
              <span slot="label"><i class="el-icon-date"></i>酒店</span>
              <!--酒店中的选项卡-->
              <el-tabs :tab-position="tabPosition" style="height: 200px;">
                <el-tab-pane label="国内酒店">
                  <div class="gnjd">
                    <p>目的地<el-input  placeholder="黄山市"></el-input></p>
                    <p>
                      入住-退房
                        <el-date-picker
                          type="daterange"
                          range-separator="至"
                          start-placeholder="开始日期"
                          end-placeholder="结束日期">
                        </el-date-picker>
                    </p>
                    <p>关键词<el-input  placeholder="位置/酒店/品牌"></el-input></p>
                    <p>
                      <el-button type="primary" icon="el-icon-search">搜索</el-button>
                      <el-button size="medium">地图搜索</el-button>
                    </p>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="国际酒店">
                  <div class="gnjd">
                    <p>目的地<el-input placeholder="首尔"></el-input></p>
                    <p>
                      入住-退房
                      <el-date-picker
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                      </el-date-picker>
                    </p>
                    <p>关键词<el-input placeholder="商圈/位置"></el-input></p>
                    <p>
                      <el-button type="primary" icon="el-icon-search">搜索</el-button>
                    </p>
                  </div>
                </el-tab-pane>
              </el-tabs>
            </el-tab-pane>
            <el-tab-pane label="消息中心">
              <span slot="label"><i class="el-icon-phone-outline"></i>机票</span>
              <el-tabs :tab-position="tabPosition" style="height: 200px;">
                <el-tab-pane label="国内机票">国内机票</el-tab-pane>
                <el-tab-pane label="国际机票">国际机票</el-tab-pane>
              </el-tabs>
            </el-tab-pane>
            <el-tab-pane label="角色管理">
              <span slot="label"><i class="el-icon-service"></i>火车票</span>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
    <!--手风琴效果-->
    <div class="sfq">
      <div class="sfq_cot">
        <ul class="sm">
          <li><a href="">
            <h3>园林酒店</h3>
          </a></li>
          <li><a href="">
            <h3>情侣酒店</h3>
          </a></li>
          <li><a href="">
            <h3>设计师酒店</h3>
          </a></li>
          <li><a href="">
            <h3>青年旅舍</h3>
          </a></li>
          <li><a href="">
            <h3>特色客栈</h3>
          </a></li>
          <li><a href="">
            <h3>海岛酒店</h3>
          </a></li>
          <li><a href="">
            <h3>海外温泉</h3>
          </a></li>
        </ul>
      </div>
    </div>
    <!--目的地指数-->
    <div class="public_content">
      <div class="destination">
        <div class="hometitle">
          <h2>
            目的地指数
            <span>覆盖全球75万家酒店，你想住的，我们都有</span>
          </h2>
        </div>
      </div>
      <!--选项卡-->
      <hometab :shuju="guonei"></hometab>
      <hometab :shuju="guowai"></hometab>
      <div class="destination tj">
        <div class="hometitle">
          <h2>
            超值特价票
          </h2>
        </div>
      </div>
      <!--特价机票选项卡-->
      <homepiao :shuju="jipiao"></homepiao>
    </div>
    <!--超值特价票-->
  </div>
</template>

<script>
  import hometab from '../tab';
  import homepiao from '../sparpreis';
  export default {
    name: "headcont",
    data() {
      return {
        tabPosition: 'top',
        guonei:{},
        guowai:{},
        jipiao:{}
      }
    },
    components:{
      hometab,
      homepiao
    },
    methods:{

    },
    created(){
      this.$http.get('../../../static/data/gounei.json').then((response) => {
        this.guonei=response.data.guonei;
        this.guowai=response.data.guowai;
        this.jipiao=response.data.jipiao;
        this.huochepiao=response.data.guowai;
      }).catch((error) =>{
        console.log(error);
      })
    },
    mounted(){
      //轮播
      var mySwiper = new Swiper ('.swiper-container', {
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        direction: 'horizontal',
        loop: true,
        effect : 'fade',
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          clickable :true,
        },
      })
    }
  }
</script>

<style lang="scss" scope>
  @import '../../assets/scss/tyys.scss';
  @import '../../assets/scss/headcont.scss';
</style>

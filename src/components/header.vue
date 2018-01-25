<template>
    <div id="headers">
      <div class="headers_top">
        <div class="logo">
          <a href="http://www.elong.com/"></a>
        </div>
        <div class="right">
          <div class="middle">
            <a href="">里程商城</a><b></b>
            <a href="">在线客服</a><b></b>
            <a href="">English<i></i></a>
          </div>
          <div class="service">
            <a href="">
              <i></i>
              <div class="style">
                <em>小程序</em><br>
                <em>体验更轻盈</em>
              </div>
              <div class="program">
              </div>
            </a>
            <a href="">
              <i></i>
              <div class="style">
                <em>手机版</em><br>
                <em>专享五折起</em>
              </div>
              <div class="program">
              </div>
            </a>
            <a href="">
              <i></i>
              <div class="style">
                <em>7×24 客服电话</em><br>
                <b><em>4009-333-333</em></b>
              </div>
              <div class="program">
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="nav_box">
        <div class="nav">
          <div class="nav_left" v-for="item in $router.options.routes">
            <div v-for="child in item.children" class="child">
              <router-link :to="{path:child.path}">
                {{child.alias}}
              </router-link>
            </div>
          </div>
          <div class="nav_right">
            <div class="content" v-for="item in $router.options.routes" v-if="item.tabs">
              <router-link :to="item.path">{{item.alias}}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "headers"
    }
</script>

<style lang="scss" scope>
@import '../assets/scss/tyys.scss';
@import '../assets/scss/headers.scss';
</style>

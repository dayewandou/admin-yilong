<template>
  <div class="hometab">
    <div class="tab_top">
      <h3>
        <a href="">
          {{shuju.logo+shuju.name}}
        </a>
        <span class="haha" v-for="item in shuju.content">
          {{item.name}}
        </span>
      </h3>
    </div>
    <div class="tab_end">
      <ul class="nei" v-for="item in shuju.content">
        <li v-for="child in item.content">
          <a href="">
            <div class="pic">
              <img :src="child.src" alt="">
              <span>{{child.h1}}</span>
            </div>
            <div class="txt">
              {{child.txt}}
            </div>
          </a>
        </li>
      </ul>
        <!--<ul class="nei">-->
          <!--<li>-->
            <!--<a href="">-->
              <!--<h1></h1>-->
              <!--<img  alt="">-->
              <!--<p></p>-->
            <!--</a>-->
          <!--</li>-->
        <!--</ul>-->
    </div>
  </div>
</template>

<script>
    export default {
      name: "hometab",
      props:['shuju'],
      data() {
        return {

        }
      },
      updated(){
          let title=document.querySelectorAll('.tab_top span');
          let content=document.querySelectorAll('.nei');
          content[0].style.zIndex=1;
          title[0].classList.add("active");
          for(let i=0;i<title.length;i++){
            title[i].onclick=function(){
              for(let j=0;j<content.length;j++){
                content[j].style.zIndex=0;
                title[j].classList.remove("active");
              }
              content[i].style.zIndex=1;
              title[i].classList.add("active");
            }
          }
      },
      created(){
      }
    }
</script>

<style lang="scss" scope>
  @import '../assets/scss/tyys.scss';
  @import '../assets/scss/hometab.scss';
</style>

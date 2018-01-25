<template>
  <div id="admin">
    <!--<baiDuMap></baiDuMap>-->
    <yl_header></yl_header>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import baiDuMap from './components/map';
  import header from './components/header'
  export default {
    name:'admin',
    components:{
      // baiDuMap,
      yl_header:header
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scope>

</style>

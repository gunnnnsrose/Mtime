<template>
  <div class="footerbar">
    <ul class="list">
      <router-link to="/" tag="li">首页</router-link>
      <router-link to="/buyticket" tag="li">购票</router-link>
      <router-link to="/mall" tag="li">商城</router-link>
      <router-link to="/find" tag="li">发现</router-link>
      <router-link to="/my" tag="li">我的</router-link>
    </ul>
    <ul class="info">
      <li>PC版</li><li>|</li>
      <li>客户端下载</li><li>|</li>
      <li>意见反馈</li><li>|</li>
      <li>帮助中心</li>
    </ul>
   <!--  <p>PC版&nbsp&nbsp|客户端下载|意见反馈|帮助中心</p> -->
    <div class="logo"></div>
  </div>
</template>

<script>
export default {
  name: 'footerbar',
  data () {
    return {
     
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footerbar{
  width:100%;
  height:1.65rem;
  background:#f6f6f6;
  .list{
    width:100%;
    height:.5rem;
    background:white;
    display: flex;
    justify-content:space-around;
    color: #0074c5;
    line-height: .5rem;
  }
  .info{
    width:100%;
    height:.5rem;
    line-height: .5rem;
    display: flex;
    justify-content:space-around;
    font-size: .12rem;
  }
  .logo{
    width:100%;
    height:.65rem;
    background:url(../assets/footer.jpg)no-repeat;
  }
}
</style>

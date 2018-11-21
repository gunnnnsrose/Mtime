<template>
  <div class="nav">
    <div class="logo"></div>
    <ul>
    	<router-link to="/home" tag="li" activeClass="active">首页</router-link>
    	<router-link to="/buyticket" tag="li" activeClass="active">购票</router-link>
    	<router-link to="/mall" tag="li" activeClass="active">商城</router-link>
    	<router-link to="/find" tag="li" activeClass="active">发现</router-link>
    	<router-link to="/my" tag="li" activeClass="active"><i class="iconfont icon-account"></i></router-link>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
     
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .nav{
  	width:100%;
  	height:.52rem;
  	background:#1c2635;
  	display: flex;

  	.logo{
		width:.65rem;
		height:.22rem;
		background:url(../assets/logo_mtime.png)no-repeat;
		background-size: cover;
		margin:.14rem;
  	}
  	ul{
  		color: #bbbbbb;
		display: flex;
		width:2.82rem;
		justify-content:space-around;
		line-height: .5rem;
		font-size: .14rem;
		height:100%;
		.active{
			color: white;
			border-bottom:2px solid white;
		}
  	}
  }
</style>

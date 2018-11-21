<template>
  <div>
    <div class="topbox">
      <div class="nowplaying">正在热映</div>
      <div class="comingsoon">即将上映</div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'home',
  data () {
    return {
     	
    }
  },
  mounted(){
  	axios.get("/Service/callback.mi/PageSubArea/GetFirstPageAdvAndNews.api?t=2018112112543558492").then(res=>{
  		console.log(res)
  	})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>

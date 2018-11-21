<template>
  <div id="app">
    <navbar></navbar>
     <router-view></router-view>
    <footerbar></footerbar>
  </div>
</template>

<script>

import navbar from "./components/navbar.vue"
import footerbar from "./components/footerbar.vue"
import router from "./router/index.js"
export default {
  name: 'App',
  components:{
    navbar,
    footerbar
  }
}
</script>

<style>
  html{font-size: 26.66666667vw;}
  *{margin: 0;padding: 0;box-sizing:border-box;}
  ul li{list-style: none;}
  body{font-size: .16rem;overflow-x:hidden;}
  a{text-decoration: none;}
  img{display: block;}
  .clear:after{content: "";display: block;clear: both;}
  section{position: relative;top: .5rem}
  html body{height:100%;}
  .fade-enter-active, .fade-leave-active {
   transition: all .3s;
   }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
     opacity: 0;
     
   }
</style>

<template>
<html>
  <header>
    <NavBarHeader/>
  </header>
  <footer>
    <NavBarFooter/>
  </footer>
</html>
</template>

<script>

import NavBarHeader from './components/NavBarHeader.vue'
import NavBarFooter from './components/NavBarFooter.vue'

export default {
  name:'App',
  components:{
    NavBarHeader,
    NavBarFooter
  
  }
}
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins");
*{
  font-family: "Poppins";
}
#app {
	background-color: #ffffff;
	font-size: medium;
  width: 100vw;
}
#main{
  width: 100vw;
}
</style>

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

#app {
	background-color: #ffffff;
	margin: 0;
	font-size: medium;
}
</style>

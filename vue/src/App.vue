<template>
<html>
  <header>
    <NavBarHeader/>
  </header>
  <main>
  </main>
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
	font-size: medium;
  margin: 0 0 0 0;
  padding:0 0 0 0;
}
#main{
  max-width: 100%;
}
</style>

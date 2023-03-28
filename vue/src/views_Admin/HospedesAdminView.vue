<template>
  <body>
    <header>
      <AdminNavBar />
    </header>
    <main>
      <h1>Lista de Usuários</h1>
      <ul>
        <li id="teste" class="serv serviceListResumo" ></li>
        <li class="serv serviceListResumo" id="adiciona1"></li>
        <li class="serv serviceListResumo" id="adiciona2"></li>
        <li class="serv serviceListResumo" id="adiciona3"></li>
        <li class="serv serviceListResumo" id="adiciona4"></li>
      </ul>
    </main>
  </body>
</template>

<script>
import AdminNavBar from "../components/AdminNavBar.vue";
import CadastroView from '../views/CadastroView.vue';


export default {
  name: "UsuariosAdmin",
  components: {
    AdminNavBar,
    CadastroView
  },
  methods:{
    getUserLocal(){
      document.querySelector("#teste").textContent = localStorage.getItem('quartoValor')
      console.log(localStorage.getItem('quartoValor'))
    }
    
    
  }
}
</script>

<style>

</style>
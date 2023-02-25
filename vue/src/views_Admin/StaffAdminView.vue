<template>
  <body>
    <header>
      <AdminNavBar />
    </header>
    <main>
      <h1>Lista de Funcionários</h1>
    </main>
  </body>
</template>

<script>
import AdminNavBar from "../components/AdminNavBar.vue";

export default {
    name: "StaffAdmin",
    components: {
      AdminNavBar
    }
}
</script>

<style>

</style>
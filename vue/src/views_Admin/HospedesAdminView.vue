<template>
  <body>
    <header>
      <AdminNavBar />
    </header>
    <main>
      <h1>Lista de Hópedes</h1>
    </main>
  </body>
</template>

<script>
import AdminNavBar from "../components/AdminNavBar.vue";

export default {
    name: "HospedesAdmin",
    components: {
      AdminNavBar
    }
}
</script>

<style>

</style>
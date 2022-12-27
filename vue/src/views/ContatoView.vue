<template>
  <main>
        <section>
            <form action="">
                <h1>Entre em contato conosco!</h1>

                <label for="nome">Nome:</label>
                <input name="nome" id="nome" placeholder="Seu nome" type="text">

                <label for="email">E-mail:</label>
                <input name="email" id="email" placeholder="Seu e-mail" type="email">

                <label for="telefone">Telefone (com DDD):</label>
                <input name="telefone" id="telefone" placeholder="Seu telefone" type="text">

                <label for="motivo">Motivo:</label>
                <select name="motivo" id="motivo">
                    <option value="motivo1">Motivo1</option>
                    <option value="motivo2">Motivo2</option>
                    <option value="motivo3">Motivo3</option>
                </select>

                <label for="comentarios">Comentários:</label>
                <textarea class="grande" name="comentarios" id="comentarios" placeholder="Seus comentários..."
                    type="text"></textarea>

                <button class="button" type="submit" value="Enviar">
                    <div class="button-text">Enviar</div>
                    <p class="button-arrow">→</p>
                </button>
            </form>
        </section>
    </main>
</template>
<script>
export default {
  name:'ContatoView'
}
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Poppins");
*{
  font-family: "Poppins";
}
</style>
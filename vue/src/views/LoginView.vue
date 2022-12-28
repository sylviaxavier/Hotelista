<template>
<html>
  <main>
    <section>
      <form class="login" action="">
        <h1>Faça seu login!</h1>
        <label for="email">E-mail:</label>
        <input
          name="email"
          id="email"
          placeholder="Seu e-mail"
          type="email"
          required
        />
        <label for="senha">Senha:</label>
        <input
          name="senha"
          id="senha"
          placeholder="Sua senha"
          type="password"
          required
        />
        <button class="button" type="submit" value="Enviar">
          <a class="button-text" href="">Confirmar</a>
          <p class="button-arrow">→</p>
        </button>
        <a href="#EsqueceuSenha">Esqueceu sua senha?</a>
        <router-link to="/cadastro">Não possui conta?</router-link>
      </form>
    </section>
  </main>
</html>
</template>

<script>

export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins");
*{
  font-family: "Poppins";
}
/* PADRÕES */
.button-wrap {
  margin: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.button {
  display: flex;
  padding: 1.5em 2.5em;
  align-items: center;
  text-align: center;
  flex: 0 0 auto;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  border: 1px solid #e0e0e0;
  justify-content: center;
  max-width: 25%;
  transition: 0.5s;
}

.button:hover {
  border-color: #c0c0c0;
}

.button-text {
  color: #333333;
  text-align: center;
  display: block;
  text-decoration: none;
}

.button-arrow {
  display: inline;
  padding-left: 1em;
  transition: 0.5s;
  margin: 0;
}

.button:hover .button-arrow {
  transform: translate3d(1em, 0, 0);
}

form,
.login {
  padding: 1em 5em;
  border: 1px solid #e0e0e0;
  margin: 10vh 15%;
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  text-align: flex-start;
  color: #333333;
}

form,
input,
select,
textarea {
  outline: 2px solid transparent;
}

form:hover,
input:hover,
select:hover,
textarea:hover {
  border: 1px solid #c0c0c0;
}

form:focus,
input:focus,
select:focus,
textarea:focus {
  outline: 2px solid #e0e0e0;
  border: 1px solid #c0c0c0;
}

form h1 {
  margin: 0;
  padding: 0;
  margin-bottom: 2vh;
}

label {
  font-size: medium;
  line-height: 5vh;
}

input,
select {
  color: #333333;
  max-width: 50%;
  margin: 0;
  padding: 0;
  margin-bottom: 3vh;
  padding: 0.25em 0.5em;
  text-align: flex-start;
  border: 1px solid #e0e0e0;
  transition: 0.5s;
}

textarea {
  max-width: 100%;
  height: 15vh;
  resize: vertical;
  padding: 0.25em 0.5em;
  border: 1px solid #e0e0e0;
  margin-bottom: 3vh;
  transition: 0.5s;
}

button.button {
  background-color: white;
  margin: 5vh 0;
  max-width: 30%;
  padding: 1em 2em;
}

form.login {
  text-align: center;
  align-items: center;
}

.white {
  color: white;
}

.black {
  color: #333333;
}
</style>
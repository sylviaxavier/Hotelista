<template>
<html>
<header>
    <nav>
      <div class="navbarLogin">
        <div class="navbar-wrap">
          <a class="navbar-logo">
			      <img
            class="navbar-logo"
            src="@/assets/logotipo/Hotelista_sem_fundo.png"
            alt="Logotipo Hotelista - Página home"/>
          </a>
          <h3>Sua Melhor Escolha de Vista</h3>
        </div>
      </div>
    </nav>
  </header>
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
        <router-link to="/cadastro">Cadastre-se</router-link>
      </form>
    </section>
  </main>
  <footer>
		<div class="footer">
		<p>atendimento@hotelista.com.br</p>
		<p>Rua Texperts, 01 | São Paulo | SP | 01001-001</p>
		<p>Telefone para contato: +55 11 3232-3232</p>
		<div class="midias-sociais">
			<a href="#Facebook" class="fa fa-facebook"></a>
			<a href="#Instagram" class="fa fa-instagram"></a>
			<a href="#Twitter" class="fa fa-twitter"></a>
			<a href="#Whatsapp" class="fa fa-whatsapp"></a>
		</div>
		<div class="copyright">
			<img
				src="@/assets/logotipo/Coderize_sem_fundo.png"
				alt="Coderize"
				width="100"
			/>
			<p>Coderize &copy;2022 - Todos os direitos reservados</p>
		</div>
		</div>
	</footer>
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
header{
	position: sticky;
	position: -webkit-sticky;
	margin-left: -1%;
	top: 0;
	z-index: 100;
	width: 100vw;
}
.navbarLogin {
	display: flex;
	font-size: 14px;
	color: #333333;
	background-color: #ffffff;
  border-bottom: 1px solid #333333;
  width: 100vw;
}

.navbar-wrap {
	display: flex;
	align-items: center;
  width: 100%;
  display: flex;
}
.navbar-logo {
	text-decoration: none;
	color: #333333;
	align-items: center;
	padding-left: 10em;
}

img.navbar-logo {
	width: 100%;
	height: auto;
}
/* PADRÕES */
h3 {
  color: #333333;
  font-size: xx-large;
  font-weight: normal;
  padding-right: 50%;
}

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

.hero {
  text-align: center;
  width: 100%;
  position: relative;
}

.hero img {
  width: 100vw;
  margin-right: 0%;
  border-bottom: 4px solid #333333;
  z-index: -1;
}

.hero-titulo {
  margin: 0;
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.hero-titulo-background {
  margin: 0;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
}

.hero-sobre {
  position: absolute;
  bottom: 15%;
  left: 10%;
  right: 10%;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 2em;
  font-size: medium;
}

.hero-opcoes {
  position: absolute;
  bottom: 5%;
  left: 10%;
  right: 10%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  font-size: medium;
  width: 80%;
  color: white;
}
/*FOOTER */
.footer {
	width: 100%;
	color: #333333;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 10vh;
	border-top: 2px solid #333333;
}

.footer a,
.footer p {
	color: #333333;
	text-decoration: none;
	list-style: none;
	list-style-type: none;
	margin: 0;
	padding: 0;
	line-height: 2em;
	transition: 0.5s;
}

footer .midias-sociais {
	padding: 1em 0;
	opacity: 1;
}

footer .fa {
	font-size: 24px;
	text-decoration: none;
	padding: 0.25em;
	margin: 0 0.1em;
	width: 1em;
	border-radius: 8px;
	color: #e0e0e0;
	background-color: #333333;
	text-align: center;
}

.fa-facebook:hover {
	background: #3b5998;
	color: white;
	opacity: 1;
}

.fa-instagram:hover {
	background: #c13584;
	color: white;
	opacity: 1;
}

.fa-twitter:hover {
	background: #55acee;
	color: white;
	opacity: 1;
}

.fa-whatsapp:hover {
	background: #25d366;
	color: white;
	opacity: 1;
}

.copyright {
	width: 100vw;
	padding: 2em 0;
	background-color: #333333;
	color: white;
	transition: 0.5s;
}

.copyright p {
	color: white;
}

.copyright img {
	padding: 1em;
	border: 1px solid #333333;
	transition: 0.5s;
}

.copyright:hover img {
	border: 1px solid #c0c0c0;
}
@media (max-width: 900px) and (orientation: portrait){
  img.navbar-logo{
    padding: 20% 60%;
    width: 4em;
  }
  .navbar-wrap{
    width: 100vw;
  }
  header h3{
    text-align: center;
    padding-right: 30%;
    font-size: 20px;
  }
}
@media (max-width: 600px) and (orientation: portrait){
  /*Header */
  header nav{
    width: 75%;
  }
  header h3{
    text-align: center;
    padding: 0 20% 0 20%;
  }
  img.navbar-logo{
    padding: 0 2%;
  }
	/* Form */
	.form-reservas {
		margin: 0;
	}

	.form-reservas div {
		margin: 0.75em 0;
	}

	.reservas-wrap {
		flex-direction: column-reverse;
		margin: 0 1em;
	}
	.reservas-quarto-wrap h2{
		text-align: center;
		margin-bottom: 10%;
	}
	.reservas-quarto-wrap img {
		max-width: 45%;
		margin-top: 40%;
		margin-left: 5em;
		margin-bottom: 30em;
		position: absolute;
		border-radius: 5%;
	}
	.reservas-quarto-wrap p {
		position: relative;
		max-height: 40%;
		text-align: justify;
		margin-top: 15em;
	}

	.reservas-resumo-wrap {
		max-width: 100%;
		margin-bottom: 2em;
	}

	.reservas-resumo {
		margin: 0;
	}

	.reservas-quartos {
		max-width: 100%;
	}

	.modal {
		width: 90%;
	}
  /* RODAPÉ */
	footer nav {
		width: 75%;
	}
}
</style>

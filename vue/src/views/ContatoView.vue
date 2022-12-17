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
.margin-top {
	margin-top: 20vh;
}

.margin-bottom {
	margin-bottom: 20vh;
}

h1 {
	color: #333333;
	font-size: xx-large;
	font-weight: normal;
	padding: 1rem;
	text-align: center;
}

.imagem-retrato {
	display: none;
}

.imagem-paisagem {
	display: block;
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
.reservas-resumo {
	padding: 1em 5em;
	border: 1px solid #e0e0e0;
	margin: 10vh 15%;
	transition: 0.5s;
	display: flex;
	flex-direction: column;
	text-align: start;
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
	text-align: start;
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

form a,
.reservas-resumo a {
	text-decoration: none;
	color: #a0a0a0;
	font-size: 14px;
	transition: 0.5s;
}

form a:hover,
.reservas-resumo a:hover {
	color: #333333;
	text-decoration: underline;
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
	width: 100%;
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

.hero-opcoes div {
	padding: 2em;
	text-align: justify;
	background-color: rgba(0, 0, 0, 0.5);
}
</style>
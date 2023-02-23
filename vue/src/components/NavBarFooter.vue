<template>
	<footer v-if="!$route.meta.hideFooter">
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
		<nav>
			<a class="active"><router-link to="/">Home</router-link></a><br />
			<a href=""><router-link to="/reservas">Reserve já</router-link></a><br />
			<a href=""><router-link to="/acomodacoes">Nossas Acomodações</router-link></a><br />
			<a href=""><router-link to="/Contato">Contato</router-link></a><br />
			<a href=""><router-link to="/Sobre">Sobre</router-link></a>
		</nav>
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
</template>

<script>
export default {
	name:'NavBarFooter'
}
</script>

<style>

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

footer nav {
	margin: 1em 0;
	width: 25%;
	border: 1px solid #e0e0e0;
	transition: 0.5s;
}

footer nav:hover {
	opacity: 0.9;
	border: 1px solid #c0c0c0;
}

footer a {
	text-transform: uppercase;
	text-decoration: underline;
}

footer a:hover {
	opacity: 0.7;
	text-decoration: none;
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

@media (max-width: 600px) and (orientation: portrait){
	/* RODAPÉ */
	footer nav {
		width: 75%;
	}
}
</style>
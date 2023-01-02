<template>
		<main id="main">
			<div class="headBanner">
			<h1 class="banner-titulo">Minha Reserva</h1>
			<section>
				<form class="form-reservas sombra-box" id="form-reservas" action="">
					<div>
						<label for="checkin">Data de <b>check-in</b></label>
						<input name="checkin" id="checkin" placeholder="Sua data de check-in" type="date" required>
					</div>
					<div>
						<label for="checkout">Data de <b>check-out</b></label>
						<input name="checkout" id="checkout" placeholder="Sua data de check-out" type="date" required>
					</div>
					<div>
						<label for="qntdPessoas">Quantidade de pessoas</label>
						<input name="qntdPessoas" id="qntdPessoas" placeholder="Ex.: 2" type="number" value="1" min="1"
							max="4" required>
					</div>
				</form>
			</section>
			</div>
			<section>
				<div class="reservas-wrap">
					<div class="reservas-quartos">
						<label class="reservas-quarto-wrap" for="quarto1" form="form-reservas">
							<input name="quarto-radio" id="quarto1" type="radio" required form="form-reservas">
							<div class="reservas-quarto-wrap-div">
								<img :src="imageQuartoSimples" alt="Quarto Simples">
								<div class="reservas-quarto">
									<h2 id="quartoTitulo">Quarto Simples</h2>
									<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae velit, aspernatur,
										corrupti ipsam aliquid et quibusdam amet, est dolor labore officiis totam laudantium
										sequi. Aliquam nam quaerat in provident nulla quia, quis enim fugit quo quidem
										consequuntur quas, vero fuga?</p>
									<span>R$<span id="quartoValor">99,99</span></span>
								</div>
							</div>
						</label>
						<label class="reservas-quarto-wrap" for="quarto2" form="form-reservas">
							<input name="quarto-radio" id="quarto2" type="radio" required form="form-reservas">
							<div class="reservas-quarto-wrap-div">
								<img :src="imageQuartoMedio" alt="Quarto Médio">
								<div class="reservas-quarto">
									<h2 id="quartoTitulo">Quarto Médio</h2>
									<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae velit, aspernatur,
										corrupti ipsam aliquid et quibusdam amet, est dolor labore officiis totam laudantium
										sequi. Aliquam nam quaerat in provident nulla quia, quis enim fugit quo quidem
										consequuntur quas, vero fuga?</p>
									<span>R$<span id="quartoValor">190,99</span></span>
								</div>
							</div>
						</label>
						<label class="reservas-quarto-wrap" for="quarto3" form="form-reservas">
							<input name="quarto-radio" id="quarto3" type="radio" required form="form-reservas">
							<div class="reservas-quarto-wrap-div">
								<img :src="imageQuarto4" alt="Quarto de Luxo">
								<div class="reservas-quarto">
									<h2 id="quartoTitulo">Quarto de Luxo</h2>
									<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae velit, aspernatur,
										corrupti ipsam aliquid et quibusdam amet, est dolor labore officiis totam laudantium
										sequi. Aliquam nam quaerat in provident nulla quia, quis enim fugit quo quidem
										consequuntur quas, vero fuga?</p>
									<span>R$<span id="quartoValor">249,99</span></span>
								</div>
							</div>
						</label>
					</div>
					<div class="reservas-resumo-wrap">
						<div class="reservas-resumo reservas-resumo">
							<h2>Sua Reserva:</h2>
							<div class="reservas-resumo-info">
								<div>
									<p>Quarto:</p>
									<p id="pquarto">__________</p>
								</div>
								<div>
									<p>Check-in:</p>
									<p id="pcheckin">__/__/____</p>
								</div>
								<div>
									<p>Check-out:</p>
									<p id="pcheckout">__/__/____</p>
								</div>
								<div>
									<p>Pessoas:</p>
									<p id="pessoas">1</p>
								</div>
							</div>
							<div>
								<a @click="showModal">Adicionar mais serviços
								</a>
								<ModalView
								v-show="isModalViewVisible"
								@close="closeModal"
								/>
							</div>
							<h3 id="totalServicos">Total: R$ 0,00</h3>
							<button class="button" type="submit" value="Continuar" form="form-reservas">
								<div class="button-text">Continuar</div>
								<p class="button-arrow">→</p>
							</button>
						</div>
					</div>
				</div>
			</section>
		</main>
</template>
<script>
import imageQuartoSimples from "../assets/quartos/simples.png"
import imageQuartoMedio from "../assets/quartos/medio.png"
import imageQuarto4 from "../assets/quartos/luxo.png"
import ModalView from "../components/ModalView.vue"

export default {
	name:'ReservasView',
	components: {
      ModalView,
    },
    data() {
      return {
        isModalViewVisible: false,
		imageQuartoSimples: imageQuartoSimples,
	  	imageQuartoMedio: imageQuartoMedio,
	  	imageQuarto4: imageQuarto4
      };
    },
    methods: {
      showModal() {
        this.isModalViewVisible = true;
		if(this.isModalViewVisible = true){
			document.getElementById('main').style.overflowY = 'disable';
		}
		
      },
      closeModal() {
        this.isModalViewVisible = false;
      }
    }

}
</script>
<style>
/*BANNER */ 
.headBanner {
	width: 100vw;
	height: 30vh;
    background-image: url(../assets/banner/recreacao.jpg);
	background-size:cover;
    background-position: 25% 75%;
}

.banner-section {
	height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
	
}

.banner-titulo {
	color: black;
}

.sombra-box{
	background-color:white;
	opacity: 90%;
}

/*FORMS*/

.form-reservas {
	margin: 0 20%;
	margin-bottom: 5vh;
}

.form-reservas div {
	display: flex;
	flex-direction: row;
	margin: 0.25em 0;
	justify-content: space-between;
}

.form-reservas label {
	line-height: 1.25em;
	font-size: medium;
	margin-right: 2em;
}

.form-reservas input {
	min-width: 30%;
	max-width: 100%;
	margin: 0;
}

.reservas-wrap {
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	padding: 5vh 0;
	margin: 0 1em 0 5em;
	border-top: 1px solid #e0e0e0;
}

.reservas-resumo-wrap {
	margin: 0;
	min-width: 50%;
}

.reservas-resumo {
	z-index: 90;
	margin: 0 2em;
	padding: 2em;
	position: sticky;
	position: -webkit-sticky;
	top: 5em;
}

.reservas-resumo .button {
	width: 100%;
	max-width: 100%;
}

.reservas-resumo-info div {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	border-bottom: 1px solid #e0e0e0;
}

.reservas-resumo-info p {
	margin: 0;
	padding: 1em 0;
}

.reservas-quartos {
	position: relative;
	display: flex;
	flex-direction: column;
	max-width: 75%;
	border-top: 1px solid #e0e0e0;
}

.reservas-quartos:before {
	content: " ";
	display: block;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	opacity: 0.05;
	background-image: url("https://wallpaperaccess.com/full/658113.png");
	background-repeat: no-repeat;
	background-position: 50% 0;
	background-size: cover;
}

.reservas-quarto-wrap {
	max-width: 100%;
	padding: 0.5em 1em;
	border: 2px solid white;
	border-top: 1px solid white;
	border-right: 1px solid white;
	border-bottom: 1px solid #e0e0e0;
	border-left: 1px solid white;
	cursor: pointer;
	transition: 0.5s;
	position: relative;
}

.reservas-quarto-wrap-div {
	display: flex;
	flex-direction: row;
	align-items: center;
}

.reservas-quarto-wrap img {
	max-width: 25%;
	height: auto;
	background-color: #c0c0c0;
	border-radius: 5%;
}

.reservas-quartos input[type="radio"] {
	flex-basis: 100%;
	position: absolute;
	opacity: 0;
	width: 0%;
	height: 0%;
	padding: 0;
	margin: 0;
	border-radius: 8px;
}

.reservas-quarto-wrap:has(input[type="radio"]:checked) {
	border: 1px solid #333333;
}

.reservas-quarto-wrap:has(input[type="radio"]:hover:not(:checked)) {
	border: 1px solid #c0c0c0;
}

.reservas-quarto {
	padding: 0 1em;
}

.reservas-margin-servicos {
	margin-top: 1rem;
	margin-bottom: 1rem;
}

.hide {
	display: none;
}
div a{
	cursor: pointer;
}

@media (max-width: 600px) and (orientation: portrait){
	/* RESERVAS */
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
}
</style>
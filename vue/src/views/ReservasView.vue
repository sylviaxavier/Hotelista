<template>
  <main>
		<h1>Minha Reserva</h1>
		<section>
			<form class="form-reservas" id="form-reservas" action="">
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
					<div class="reservas-resumo">
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
						<a onclick="closeOpenModal()" href="#Serviços">Adicionar
							mais serviços</a>

						<button class="button" type="submit" value="Continuar" form="form-reservas">
							<div class="button-text">Continuar</div>
							<p class="button-arrow">→</p>
						</button>
					</div>
				</div>
			</div>
			<div id="servicosModal" class="modal-wrap hide">
				<div class="modal">
					<div class="modal-header">
						<h2>Serviços Adicionais:</h2>
						<span class="modal-exit-btn" onclick="closeOpenModal()">&#xe5c9;</span>
					</div>
					<div class="res-serv">
						<div>
							<input class="reservas-margin-servicos" type="checkbox" id="servico01" name="servicos"
								onClick="servicos()">
							<label for="servico01">R$ <span name="servicoValor" id="pPessoa">20,50</span> - <span
									name="servicoNome">Café da manhã</span>*</label>
						</div>
						<div>
							<input class="reservas-margin-servicos" type="checkbox" id="servico02" name="servicos"
								onClick="servicos()">
							<label for="servico02">R$ <span name="servicoValor" id="pPessoa">30,00</span> - <span
									name="servicoNome">Almoço</span>*</label>
						</div>
						<div>
							<input class="reservas-margin-servicos" type="checkbox" id="servico03" name="servicos"
								onClick="servicos()">
							<label for="servico03">R$ <span name="servicoValor" id="pPessoa">40,00</span> - <span
									name="servicoNome">Jantar</span>*</label>
						</div>
						<div>
							<input class="reservas-margin-servicos" type="checkbox" id="servico04" name="servicos"
								onClick="servicos()">
							<label for="servico04">R$ <span name="servicoValor">15,00</span> - <span
									name="servicoNome">Limpeza diária</span></label>
						</div>
						<div>
							<input class="reservas-margin-servicos" type="checkbox" id="servico05" name="servicos"
								onClick="servicos()">
							<label for="servico05">R$ <span name="servicoValor" id="pPessoa">50,00</span> - <span
									name="servicoNome">Frigobar com variedades</span>*</label>
						</div>
						<p><b>*valores por pessoa, exceto limpeza diária.</b></p>
						<h3 id="totalServicos">Subtotal serviços: R$ 0,00</h3>
					</div>
				</div>
			</div>
			<div class="modal-wrap hide">
				<div class="modal">
					<div class="res-modal-desc">
						<div class="res-modal-desc-quarto">
							<img class="res-modal-img" src="" alt="">
							<div class="res-modal-img-desc">
								<h2>Título</h2>
								<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium at sint vel
									mollitia praesentium assumenda quam cum nesciunt vitae eum itaque minima dicta quis
									voluptatem minus sit debitis culpa modi aliquam eligendi, adipisci quisquam? Placeat
									quas sequi earum id officiis voluptatum, natus ratione quisquam aliquam, temporibus
									porro ipsum rem repudiandae.</p>
							</div>
						</div>
						<div class="res-modal-desc-info">
							<div class="res-modal-desc-pessoas">X pessoas</div>
							<div class="res-modal-desc-checkin">00/00/0000</div>
							<div class="res-modal-desc-checkout">00/00/0000</div>
						</div>
					</div>
					<div class="res-modal-itens">
						<div>
							<p>Quarto</p>
							<p>R$ 0000,00</p>
						</div>
						<div>
							<p>Pessoas</p>
							<p>R$ 0000,00</p>
						</div>
					</div>
					<div class="res-modal-btn button-wrap">
						<a class="button button-home" href="#Serviços">
							<div class="button-text">Continuar</div>
							<p class="button-arrow">→</p>
						</a>
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

export default {
	data: function(){
    return{
	  imageQuartoSimples: imageQuartoSimples,
	  imageQuartoMedio: imageQuartoMedio,
	  imageQuarto4: imageQuarto4
    }
  },
  name:'ReservasView'

}
</script>
<style>
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

.modal-wrap {
	/*display: hide;*/
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgba(0, 0, 0, 0.7);
	z-index: 110;
}

.modal {
	margin: 2% auto;
	padding: 0 1em;
	border: 1px solid #333333;
	width: 50%;
	height: 80%;
	background-color: white;
}

.modal-exit-btn {
	cursor: pointer;
	font-family: "Material Icons";
	vertical-align: middle;
	font-size: xx-large;
	color: #c0c0c0;
	margin-block: 0;
	transition: 0.5s;
	padding: 0;
}

.modal-exit-btn:hover {
	opacity: 0.7;
}

.modal {
	text-align: center;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
}

.modal-header {
	border-bottom: 1px solid #e0e0e0;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
}

.modal-header h2 {
	text-align: center;
	width: 90%;
}

.res-serv {
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 1em;
}

.res-serv div {
	display: flex;
	flex-direction: row-reverse;
	align-items: center;
	justify-content: space-between;
	width: 75%;
}

.res-serv div label {
	margin-left: 1rem;
}

.res-modal-desc {
	display: flex;
}

.res-modal-desc-quarto {
	max-width: 50%;
}

.res-modal-img {
	max-width: 25%;
}

.modal b {
	font-size: 14px;
	font-weight: normal;
	color: #c0c0c0;
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
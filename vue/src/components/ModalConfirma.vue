<template>
	<transition name="modal-fade">
    		<div id="resumoReservaModal" class="modal-backdrop">
				<div class="modal"      
					 role="dialog"
        			 aria-labelledby="modalTitle"
        			 aria-describedby="modalDescription">
      			 	 <header class="modal-header" id="modalTitle">
         				<slot name="header">
          			 	 <h3>Resumo da Reserva:</h3>
           			 	 <button type="button" class="btn-close" @click="closeOpenModalResumo">x</button>
         			 	</slot>
        			 </header>
					<section class="modal-body" id="modalDescription">
         				<slot name="body">
							<div class="modal-resumo-div">
								<p id="quartoModalResumo">:</p>
							</div>
							<div class="modal-resumo-div">
								<p id="checkinModalResumo"></p>
							</div>
							<div class="modal-resumo-div">
								<p id="checkoutModalResumo"></p>
							</div>
							<div class="modal-resumo-div">
								<p id="pessoasModalResumo"></p>
							</div>
							<div class="modal-resumo-border">
							</div>
							<div>
								<h4>Serviços Adicionais:</h4>
                <ul>
                  <li id="servico01"></li>
                  <li id="servico02">Tea</li>
                  <li id="servico03">Milk</li>
                </ul>  
							</div>
							<div class="button-wrap">
								<h4 id="totalModalResumo"></h4>
								<button id="btnConfirmarReserva" class="button" @click="closeOpenModalResumoConfirmar">
									<div class="button-text">Confirmar Reserva</div>
									<p class="button-arrow">→</p>
								</button>	
							</div>
					    </slot>
        			</section>
				</div>
			</div>
	</transition>
</template>

<script>

export default {
  name: "ModalConfirma",
  methods: {
    close() {
      this.$emit("close")
    },

	closeOpenModalResumo() {
		document.getElementById('resumoReservaModal').style.display = 'none';
    this.getdata()
},

closeOpenModalResumoConfirmar() {

		document.getElementById('resumoReservaModal').style.display =
		document.getElementById('resumoReservaModal').style.display === 'block' ? 'none' : 'block';
		document.getElementById('aMinhasReservas').style.display = 'block';
},
 pegarData(data) {
	data = data.replaceAll(/-/g, '');
	let ano = (data.slice(0, 4));
	let mes = (data.slice(4, 6));
	let dia = (data.slice(6, 8));

	return `${dia}/${mes}/${ano}`;
},

	getdata() {
		document.querySelector('#totalModalResumo').textContent = "Valor total da reserva: R$" + localStorage.getItem('totalReserva');
		document.querySelector('#quartoModalResumo').textContent = "Quarto: " + localStorage.getItem('nomeQuarto');
		document.querySelector('#checkinModalResumo').textContent = "Data do Check-in: " + this.pegarData(localStorage.getItem('checkin'));
    document.querySelector('#checkoutModalResumo').textContent = "Data do Check-out: " + this.pegarData(localStorage.getItem('checkout'));
		document.querySelector('#pessoasModalResumo').textContent = "Número de hóspedes: " + localStorage.getItem('qtdePessoas')
    document.querySelector('#servico01').textContent = "Add1: " + localStorage.getItem('n');
    
	}
},
    mounted(){
    this.getdata()
  }
}
</script>

<style scoped>

.modal-backdrop {
  position: fixed;
  top: 10%;
  bottom: 0;
  left: 30%;
  right: 0;
  /*background-color: rgba(0, 0, 0, 0.7);*/
  display: fixed;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  text-align: center;
  overflow-x: hidden;
}

.modal-header {
  padding: 5px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #e0e0e0;
  color: #161414;
  justify-content: space-between;
}
.modal-header h3 {
  text-align: center;
  width: 100%;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
  overflow: hidden;
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
.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: xx-large;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #c0c0c0;
}
.button:hover {
	border-color: #c0c0c0;
}
.button-text {
  color: #333333;
  text-align: center;
  display: block;
  text-align: center;
}
.button-arrow {
  display: inline;
  transition: 0.5s;
  margin: 0.3%;
}
.button:hover .button-arrow {
	transform: translate3d(1em, 0, 0);
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
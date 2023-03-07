<template>
<h1>MINHAS RESERVAS</h1>
<div>
    <h2 class ="texto" id="quarto">Quarto: </h2>
    <p class="texto" id="chekin">Data do Chek-in: </p>
    <p class="texto" id="chekout">Data do Check-out: </p>
    <p class="texto" id="pessoas">Número de hóspedes: </p>
    <p class="texto" id="totalReserva">Número de hóspedes: </p>
    <p class="texto" id="totalReserva">Valor total da reserva: R$ </p>
</div>

<div>
    <h2 class ="texto" id="quarto">Serviços Adicionais: </h2>
</div>
  
</template>

<script>
export default {
    name: "MinhasReservasView",

    data() {
      return {

      };
    },

    methods: {
		pegarData(data) {
			data = data.replaceAll(/-/g, '')
			let ano = (data.slice(0, 4))
			let mes = (data.slice(4, 6))
			let dia = (data.slice(6, 8))
			return `${dia}/${mes}/${ano}`
		},

	    getdata() {
		    document.querySelector('#quarto').textContent = "Quarto: " + localStorage.getItem('nomeQuarto');
		    document.querySelector('#checkin').textContent = "Data do Check-in: " + this.pegarData(localStorage.getItem('checkin'));
            document.querySelector('#checkout').textContent = "Data do Check-out: " + this.pegarData(localStorage.getItem('checkout'));
		    document.querySelector('#pessoasModalResumo').textContent = "Número de hóspedes: " + localStorage.getItem('qtdePessoas')
            document.querySelector('#servico01').textContent = "Add1: " + localStorage.getItem('n');
            document.querySelector('#totalReserva').textContent = "Valor total da reserva: R$" + localStorage.getItem('totalReserva');
	
	    }

    },

    mounted(){
        this.getdata()
    }
}


</script>

<style>

.texto {
    text-align: center;
    text-transform: uppercase;
    
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
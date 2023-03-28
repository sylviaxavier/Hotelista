<template>
<body>
  <main>
    <h1>Minhas Reservas</h1>
    <section>
        <p class ="centro" id="quarto">Quarto: </p>
        <p class="centro" id="chekin">Data do Chek-in: </p>
        <p class="centro" id="chekout">Data do Check-out: </p>
        <p class="centro" id="pessoas">Número de hóspedes: </p>
        <p class="centro" id="totalReserva">Número de hóspedes: </p>
        <p class="centro" id="totalReserva">Valor total da reserva: </p>
        <p class ="centro" id="quarto">Serviços Adicionais: </p>
    </section>
  </main>
</body>

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
           
        document.querySelector('#totalReserva').textContent = "Valor total da reserva:" + localStorage.getItem('totalReserva');
	    }
    }
}


</script>

<style>
.centro {
  text-align: center;
}
</style>
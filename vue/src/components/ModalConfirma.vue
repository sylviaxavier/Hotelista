<template>
    		<div id="resumoReservaModal" class="modal-wrap hide">
				<div class="modal">
					<div class="modal-header">
						<h2>Resumo da Reserva:</h2>
						<span class="modal-exit-btn" onclick="closeOpenModalResumo()">&#xe5c9;</span>
					</div>
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
							</div>
							<div class="modal-resumo-footer">
								<h4 id="totalModalResumo"></h4>
								<button id="btnConfirmarReserva" class="btn-confirmar-reserva" type="submit" value="Confirmar" form="form-reservas" onclick="closeOpenModalResumoConfirmar()">Confirmar reserva</button>	
							</div>
				</div>
			</div>
</template>

<script>
export default {
  name: "ModalView",
  methods: {
    close() {
      this.$emit("close")
    },
  }
}
</script>
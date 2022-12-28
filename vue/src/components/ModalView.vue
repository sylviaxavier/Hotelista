<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="modal-header"
          id="modalTitle"
        >
          <slot name="header">
            <h2>Serviços Adicionais:</h2>
            <button
              type="button"
              class="btn-close"
              @click="close"
            >
              x
            </button>
          </slot>
        </header>

        <section
          class="modal-body"
          id="modalDescription"
        >
          <slot name="body">
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
          </slot>
        </section>
      </div>
    </div>
  </transition>
</template>
<script>
  export default {
    name: 'ModalView',
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>
<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
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
    height: 80%;
    text-align: center;
    overflow-x: hidden;
  }

  .modal-header {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #e0e0e0;
    color: #161414;
    justify-content: space-between;
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

  .modal-body {
    position: relative;
    padding: 20px 10px;
    overflow: hidden;
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

  .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease;
  }

  .modal b {
    font-size: 14px;
    font-weight: normal;
    color: #c0c0c0;
  }
</style>

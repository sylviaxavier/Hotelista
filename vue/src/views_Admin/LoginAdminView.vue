<template>
  <main>
    <section>
      <h1>Entre na aréa administrativa dos funcionários!</h1>
      <form action="" method="post">
        <fieldset>
          <legend>Descrição Completa</legend>

          <label for="number">Código:</label><br />
          <input type="number" id="number" name="number" required /><br />

          <label for="name">Nome:</label> <br />
          <input type="name" id="name" name="name" required /> <br />

          <label for="number">Tempo de Empresa:</label> <br />
          <input type="number" id="number" name="number" required /> <br />

          <hr />
          <label for="cargo">Atividade atual:</label> <br />
          <label>
            <input type="checkbox" id="recepcao" name="cargo" /> Recepção
            <br />
          </label>
          <label for="">
            <input type="checkbox" id="restaurante" name="cargo" /> Restaurante
            <br />
          </label>
          <label for="">
            <input type="checkbox" id="garagem" name="cargo" /> Garagem
            <br />
          </label>
          <label for="">
            <input type="checkbox" id="quarto" name="cargo" /> Serviço de Quarto
            <br />
          </label>
          <label for="">
            <input type="checkbox" id="gerencia" name="cargo" /> Gerência
            <br />
          </label>
          <label for="">
            <input type="checkbox" id="concierge" name="cargo" /> Concierge
            <br />
          </label>

          <label for="">
            <input type="checkbox" id="supervisor" name="cargo" /> Supervisor de
            Andar
          </label>

          <hr />

          <label for="ferias"
            >Férias <br />
            <input type="radio" id="sim" name="ferias" /> Sim
            <input checked type="radio" id="nao" name="ferias" /> Não
            <br />
          </label>

          <label for="afastamento"
            >Afastamento Médico <br />
            <input type="radio" id="sim" name="afastamento" /> Sim
            <input checked type="radio" id="nao" name="afastamento" /> Não
            <br />
          </label>
          <button class="button" type="submit" value="Enviar">
            <a class="button-text">
              <router-link to="/homeAdmin">Confirmar </router-link>
            </a>

            <p class="button-arrow">→</p>
          </button>
        </fieldset>
      </form>
    </section>
  </main>
</template>

<script>
export default {
  name: "LoginAdmin",
};
</script>

<style>

</style>

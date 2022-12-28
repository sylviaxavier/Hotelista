<template>
  <main>
    <section>
      <form action="">
        <h1>Cadastro de Usuários</h1>

        <label id="nomeLabel" for="nome">Nome:</label>
        <input name="nome" id="nome" placeholder="Seu nome" type="text" />

        <label id="emaillabel" for="tempo">Email:</label>
        <input
          name="email"
          id="email"
          placeholder="Qual é o seu email"
          type="text"
        />

        <label id="telefonelabel" for="telefone">Telefone:</label>
        <input
          name="telefone"
          id="telefone"
          placeholder="Qual é o seu telefone"
          type="text"
        />

        <label id="nascimentolabel" for="nascimento">Data de Nascimento:</label>
        <input
          name="nascimento"
          id="nascimento"
          placeholder="Qual é a data de nascimento"
          type="text"
        />

        <label id="nacionalidadelabel" for="nacionalidade"
          >Nacionalidade:</label
        >
        <input
          name="nacionalidade"
          id="nacionalidade"
          placeholder="Qual é a sua nacionalidade"
          type="text"
        />

        <label for="genero">Gênero:</label>
        <select name="genero" id="genero">
          <option value="genero1">Selecione seu gênero</option>
          <option value="genero2">Homem</option>
          <option value="genero3">Mulher</option>
          <option value="genero4">Pessoa não-binária</option>
          <option value="genero5">Prefiro não informar</option>
        </select>

        <label id="endereço" for="endereço">Endereço:</label>
        <input
          name="endereço"
          id="endereço"
          placeholder="Qual é a sua endereço"
          type="text"
        />

        <label for="notificação">Notificações por email:</label>
        <select name="notificação" id="notificação" required>
          <option value="notificação1">Sim</option>
          <option value="notificação2">Não</option>
        </select>

        <label for="comentarios">Comentários:</label>
        <textarea
          class="grande"
          name="comentarios"
          id="comentarios"
          placeholder="Seus comentários..."
          type="text"
        ></textarea>

        <button class="button" type="submit" value="Enviar" onclick="enviar()">
          <div class="button-text">Enviar</div>
          <p class="button-arrow">→</p>
        </button>
        <router-link to="/login">Já possui conta?</router-link>
      </form>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style></style>

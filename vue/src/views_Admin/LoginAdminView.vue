<template>
  <main>
        <section>
            <article id="admin_f">
                <h1>Aréa administrativa de funcionários</h1>
                <form action="" method="post">
                    <fieldset>
                        <legend>Descrição Completa</legend>
                        <ul>
                            <li>
                                <label for="number">Código</label><br />
                                <input type="number" id="number" name="number" required><br />
                            </li>
                            <li>
                                <label for="name">Nome</label> <br />
                                <input type="name" id="name" name="name" required> <br />
                            </li>
                            <li>
                                <label for="number">Tempo de Empresa</label> <br />
                                <input type="number" id="number" name="number" required> <br />
                            </li>
                            <hr />
                            <li>
                                <label for="cargo">Atividade atual</label> <br />
                                <input type="checkbox" id="recepcao" name="cargo">Recepção <br />
                                <input type="checkbox" id="restaurante" name="cargo">Restaurante <br />
                                <input type="checkbox" id="garagem" name="cargo">Garagem <br />
                                <input type="checkbox" id="quarto" name="cargo">Serviço de Quarto <br />
                                <input type="checkbox" id="gerencia" name="cargo">Gerência <br />
                                <input type="checkbox" id="concierge" name="cargo">Concierge <br />
                                <input type="checkbox" id="supervisor" name="cargo">Supervisor de Andar <br />
                            </li>
                            <hr />
                        
                            <li>
                                <label for="ferias">Férias</label> <br />
                                <input type="radio" id="sim" name="ferias"> Sim
                                <input checked type="radio" id="nao" name="ferias"> Não
                            </li>
                            <li>
                                <label for="afastamento">Afastamento Médico</label> <br />
                                <input type="radio" id="sim" name="afastamento"> Sim
                                <input checked type="radio" id="nao" name="afastamento"> Não
                            </li> <br />
                            
                            <li>
                                <a href="">
                                    <button>Enviar</button>
                                </a>
                            </li>
                        </ul>
                    </fieldset>
                </form>
            </article>
        </section>
    </main>
</template>

<script>
export default {

}
</script>

<style>

</style>
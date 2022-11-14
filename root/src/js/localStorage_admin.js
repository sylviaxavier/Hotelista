console.log ('localStoage')

const botao = document.querySelector ("#botao")
const codigo = document.querySelector ("#codigo")
const nome = document.querySelector ("#nome")
const tempo = document.querySelector ("#tempo")
const atividade = document.querySelector ("#atividade")
const ferias = document.querySelector ("#ferias")
const afastamento = document.querySelector ("#afastamento")
const comentarios = document.querySelector ("#comentarios")
botao.onclick=function (){

    localStorage.setItem('code', codigo.value)
    localStorage.setItem('name', nome.value)
    localStorage.setItem('time', tempo.value)
    localStorage.setItem('activit', atividade.value)
    localStorage.setItem('vacation', ferias.value)
    localStorage.setItem('getout', afastamento.value)
    localStorage.setItem('comments', comentarios.value)
}

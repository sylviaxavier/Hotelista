let codigo = document.querySelector ("#codigo")
let codigoLabel = document.querySelector ("#codigoLabel")
let validCodigo = false


let nome = document.querySelector ("#nome")
let nomeLabel = document.querySelector ("#nomeLabel")
let validNome = false

let tempo = document.querySelector ("#tempo")
let tempoLabel = document.querySelector ("#tempoLabel")
let validTempo = false


let atividade = document.querySelector ("#atividade")
let validAtividade = false

let ferias = document.querySelector ("#ferias")
let validFerias = false

let afastamento = document.querySelector ("#afastamento")
let validAfastamento = false

let comentarios = document.querySelector ("#comentarios")
let validComentarios = false

let botao = document.querySelector ("#botao")

codigo.addEventListener('keyup', () => {
    if(codigo.value.length <=4){
        codigoLabel.setAttribute('style', 'color: red')
    } else {
        codigoLabel.setAttribute('(style)', 'color: green')
    }
})
nome.addEventListener('keyup', () => {
    if(nome.value.length <=10){
        nomeLabel.setAttribute('style', 'color: red')
    } else {
        nomeLabel.setAttribute('style', 'color: green')
    }
})


function cadastrar(){
    if (validCodigo && validNome && validTempo && validAtividade && validAfastamento && validComentarios) {
        
    } else {
        alert('Há algum campo vazio')
    }
}

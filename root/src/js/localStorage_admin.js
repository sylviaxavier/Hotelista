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
    if(codigo.value.length <=5){
        codigoLabel.setAttribute('style', 'color: red')
        validCodigo = false
    } else {
        codigoLabel.setAttribute('style', 'color: green')
        validCodigo = true

    }
})

nome.addEventListener('keyup', () => {
    if(nome.value.length <=10){
        nomeLabel.setAttribute('style', 'color: red')
        validNome = false
    } else {
        nomeLabel.setAttribute('style', 'color: green')
        validNome = true
    }
})


function enviar(){
    if (validCodigo || validNome || validTempo || validAtividade || validAfastamento || validComentarios) {
        let listaUser =  JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push ({
            codigoCad: codigo.value,
            nomeCad: nome.value,
            tempoCad: tempo.value,
            atividadeCad: atividade.value,
            afastamentoCad: afastamento.value,
            comentariosCad: comentarios.value
        })

        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        alert('Cadastro realizado com sucesso!')
        
    } else {
        alert('Há algum campo vazio!')
    }
}


let nome = document.querySelector ("#nome")
let nomeLabel = document.querySelector ("#nomeLabel")
let validNome = false

let email = document.querySelector ("#email")
let emailLabel = document.querySelector ("#emailLabel")
let validEmail = false

let telefone = document.querySelector ("#telefone")
let telefoneLabel = document.querySelector ("#telefonelLabel")
let validTelefone = false

let nascimento = document.querySelector ("#nascimento")
let nascimentoLabel = document.querySelector ("#nascimentoLabel")
let validNascimento = false

let nacionalidade = document.querySelector ("#nacionalidade")
let nacionalidadeLabel = document.querySelector ("#nacionalidadeLabel")
let validNacionalidade = false

let genero = document.querySelector ("#genero")
let validGenero = false

let endereço = document.querySelector ("#endereço")
let endereçoLabel = document.querySelector ("#endereçoLabel")
let validEndereço = false

let notificação = document.querySelector ("#notificação")
let validNotificação = false

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
    if (validNome || validEmail || validTelefone || validNascimento || validNacionalidade || validGenero || validEndereço || validNotificação || validComentarios) {
        let listaUser =  JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push ({
            nomeCad: nome.value,
            emailCad: email.value,
            telefoneCad: telefone.value,
            nascimentoCad: nascimento.value,
            nacionalidadeCad: nacionaidade.value,
            generoCad: genero.value,
            endereçoCad: endereço.value,
            notificaçãoCad: notificação.value,
            comentariosCad: comentarios.value
        })

        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        alert('Cadastro realizado com sucesso!')
        
    } else {
        alert('Há algum campo vazio!')
    }
}
    let listaUser =  JSON.parse(localStorage.getItem('listaUser'))

    let lista = document.querySelector('#lista')

    lista.innerHTML = `Segue lista abaixo: ${listaUser.codigoCad}`
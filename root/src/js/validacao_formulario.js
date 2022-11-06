function validar(){
    var Email = document.getElementById("Email")
    var Senha = document.getElementById("Senha")

    if (Email.value == ""){
        alert("E-mail não informado");
        Email.focus();
        return;
    }
    if (Senha.value == ""){
        alert("Senha não informada");
        Senha.focus();
        return;
    }

}
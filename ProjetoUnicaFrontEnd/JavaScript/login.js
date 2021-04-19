function validateEmail(){
    var email = document.querySelector('#campo_email');
    var error = document.querySelector('#error')

    if(!email.checkValidity()){
        error.innerHTML = "Email Inválido";
    }
    else{
        return true;
    }
return false;
}
function msgEmail(){
    var error = document.querySelector('#campo_email');
    if(error.innerHTML = "Email inválido"){
        error.innerHTML = " ";
    }
}
function validatePassword(){
    if(document.getElementById("campo_password").value== ''){
    alert("Insira sua senha de acesso");
    document.getElementById("campo_password").focus();
    window.open("http://127.0.0.1:5500/login.html")
    }
    else{
        return true;
    }
    return false;
}
function loginCompleted(){
    var mail = validateEmail();
    var password = validatePassword();
    if (mail == true && password == true) {
        alert("Bem vindo de volta ao Mundo Doce.  ")
    }
    else{
        alert("Não foi possível fazer login. Verifique suas credenciais de acesso. ")
    }
    
}
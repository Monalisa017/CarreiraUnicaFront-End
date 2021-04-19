function selection(){
    document.getElementById("formulario").hidden = false;
    if(cpf.checked == true){
        displayForm();
    }
    else if(cnpj.checked == true){
        displayForm();
    }
    else
        displayForm();
        
}
window.addEventListener("load", selection);
function displayForm(){
    var cpf = document.getElementById("cpf");
    var cnpj = document.getElementById("cnpj");

    if(cpf.checked == true){
        document.getElementById("form_cnpj").hidden = true;
    }
    else if(cnpj.checked == true){
        document.getElementById("form_cpf").hidden = true;
    }
    else{
        document.getElementById("formulario").hidden = true;
    }
}
function clearForm(){
    document.getElementById("input_cep").value=("");
    document.getElementById("input_logradouro").value=("");
    document.getElementById("input_bairro").value=("");
    document.getElementById("input_cidade").value=("");
    document.getElementById("input_estado").value=("");
}
function meu_callback(conteudo){
    if(!("erro" in conteudo)){
        document.getElementById("input_logradouro").value=(conteudo.logradouro);
        document.getElementById("input_bairro").value=(conteudo.bairro);
        document.getElementById("input_cidade").value=(conteudo.localidade);
        document.getElementById("input_estado").value=(conteudo.uf);
    }
    else{
        clearForm();
        alert("CEP não encontrado. ")
    }
}
function searchCEP(valor){
    var cep = valor.replace(/\D/g,'');

    if(cep != ""){
        var validateCEP = /^[0-9]{8}$/;

        if (validateCEP.test(cep)){
            document.getElementById("input_logradouro").value=("...");
            document.getElementById("input_bairro").value=("...");
            document.getElementById("input_cidade").value=("...");
            document.getElementById("input_estado").value=("...");

            var script = document.createElement('script');
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';
            document.body.appendChild(script);
        }
        else{
            clearForm();
            alert("Formato de CEP inválido. ");
        }
    }
    else{
        clearForm();
    }
}
function validateNumber(){
    if(document.getElementById("input_numero").value == ""){
        document.getElementById("input_numero").focus();
    }
    else{
        return true;
    }
}
function validateCPF(cpf){
    if(cpf != ""){
        var caracter = /^\d+$/;

        if(caracter.test(cpf) && cpf.length == 11){
            return true; 
        }
        else{
            document.getElementById("campo_cpf").focus(); 
        }
    }
    else{
        
        document.getElementById("campo_cpf").focus();
    }
    return false
}
function validateCNPJ(cnpj){
    if(cnpj != ""){
        var caracter = /^\d+$/;

        if(caracter.test(cnpj) && cnpj.length == 14){
            return true; 
        }
        else{
            document.getElementById("campo_cnpj").focus(); 
        }
    }
    else{
        
        document.getElementById("campo_cnpj").focus();
    }
    return false
}
function registrationCompleted(){
    var cpf = validateCPF();
    var cnpj = validateCNPJ();
    var number = validateNumber();
    if(cpf != true && cnpj != true && number != true){
        alert("Verifique se todos os campos foram preenchidos corretamente! ");
    }
    else{
        alert("Seja Bem Vindo ao Mundo Doce. O seu cadastro foi realizado com sucesso");
    }
}

 



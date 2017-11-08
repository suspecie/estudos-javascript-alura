//Alterando conteúdo do h1
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//Calculando  IMC
var pacientes = document.querySelectorAll(".paciente");
for (var i=0; i < pacientes.length; i++){
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var tdImc = paciente.querySelector(".info-imc");
    
    //Validando se o peso e altura sao validas
    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);
    
    if (!pesoValido) {
        console.log("Peso inválido!");
        pesoValido = false;
        tdImc.textContent = "Peso inválido";
        /* como boa pratica é importante separar o css do js entao ao inves de pegar a cor aqui
        vamos definir uma nova classe no css e acessa-la atraves do js
        paciente.style.backgroundColor = "lightCoral"; // modifica cor do fundo
        paciente.style.color = "white"; // modifica cor da fonte*/
        paciente.classList.add("paciente-invalido"); //adicona uma classe css isso eh bom na hora de mudar a cor
    }
    
    if (!alturaValida) {
        console.log("Altura inválida!");
        alturaValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido"); //adicona uma classe css isso eh bom na hora de mudar a cor
        
    }
    
    if (alturaValida && pesoValido) {
        var imc = calculaImc(peso, altura); // 100 / (2.0 * 2.0) = 25
    }
        
}


function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validaPeso(peso){
    if (peso >= 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.0){
        return true;
    }else{
        return false;
    }
}
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
    var pesoValido = true;
    var alturaValida = true;
    
    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido!");
        pesoValido = false;
        tdImc.textContent = "Peso inválido";
        /* como boa pratica é importante separar o css do js entao ao inves de pegar a cor aqui
        vamos definir uma nova classe no css e acessa-la atraves do js
        paciente.style.backgroundColor = "lightCoral"; // modifica cor do fundo
        paciente.style.color = "white"; // modifica cor da fonte*/
        paciente.classList.add("paciente-invalido"); //adicona uma classe css isso eh bom na hora de mudar a cor
    }
    
    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida!");
        alturaValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido"); //adicona uma classe css isso eh bom na hora de mudar a cor
        
    }
    
    if (alturaValida && pesoValido) {
        var imc = peso / (altura * altura); // 100 / (2.0 * 2.0) = 25
        tdImc.textContent = imc.toFixed(2);    
    }
        
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(){
    event.preventDefault(); // previne os comportamentos padrões dos usuarios no browser
    
    //pegando o form do html para o js
    var form = document.querySelector("#form-adiciona");

    //acesso aos inputs através do name form.altura (vai mostrar o name do campo que for igual a altura)
    // para pegar o value vc faz form.altura.value
    
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    //criando a tr
    var pacienteTr =  document.createElement("tr");

    //criando td
    var pesoTd = document.createElement("td");
    pesoTd.textContent = peso;

    var nomeTd = document.createElement("td");
    nomeTd.textContent = nome;
    
    var alturaTd = document.createElement("td");
    alturaTd.textContent = altura;
    
    var gorduraTd = document.createElement("td");
    gorduraTd.textContent = gordura;
    
    var imcTd = document.createElement("td");


    //adicionando os filhos (td) dentro da tr(pai)
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    


});


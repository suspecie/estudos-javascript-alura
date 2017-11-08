
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(){
    event.preventDefault(); // previne os comportamentos padrões dos usuarios no browser
    
    //pegando o form do html para o js
    var form = document.querySelector("#form-adiciona");

    //criando o paciente
    var paciente = obtemPacienteDoFormulario(form);

    //criando o a tr
    var pacienteTr = montaTr(paciente);
    

    //adiciona paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    //limpa os dados do form
    form.reset();
});


function obtemPacienteDoFormulario(form){

    //objeto que tem todos os dados do meu paciente
    //os objetos sao coisas que representam coisas do mundo real que possuem caracteristicas em comum
    // para usar o objeto em alguma parte do codigo usar paciente.nome por exemplo.
    var paciente = {
        nome: form.nome.value, // isso é uma propridade: valor eu estou atribuindo no nome o valor do form
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente){

    //criando a tr
    var pacienteTr =  document.createElement("tr");
    pacienteTr.classList.add("paciente");

    //acesso aos inputs através do name form.altura (vai mostrar o name do campo que for igual a altura)
    // para pegar o value vc faz form.altura.value
    //adicionando os filhos (td) dentro da tr(pai)

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));


    return pacienteTr;

}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}
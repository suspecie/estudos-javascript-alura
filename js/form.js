
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(){
    event.preventDefault(); // previne os comportamentos padrões dos usuarios no browser
    
    //pegando o form do html para o js
    var form = document.querySelector("#form-adiciona");

    //criando o paciente
    var paciente = obtemPacienteDoFormulario(form);

    //criando o a tr
    var pacienteTr = montaTr(paciente);

    //adicionando mensagem de erro
    var erros = validaPaciente(paciente);

    if(erros.length > 0){
        exibeMensagensErro(erros);

        //mostra mensagem na tag span
        //var mensagemErro = document.querySelector("#mensagem-erro");
        //mensagemErro.textContent = erro;
        //se o paciente for invalido fazemos com que a mensagem seja exibida
        //porem o paciente nao seja adicionado na tabela, por isso damos um return vazio assim ele sai da funcao
        return;
    }




    //adiciona paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    //limpa os dados do form
    form.reset();

    //limpando a ul de erro
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
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

//essa funcao vai testar as propriedades do paciente sao validas
function validaPaciente(paciente){

    //criando array de erros
    var erros = [];

    if (paciente.nome.length == 0){
        erros.push("O nome não pode ser vazio");
    }

    if (!validaPeso(paciente.peso)) {
        //adiciona no array
        erros.push("Peso é inválido"); 
    }

    //o js tb entende ifs simples quando colocamos tudo em uma unica linha, então para economizar linha podemos fazer o seguinte
    if (!validaAltura(paciente.altura)) erros.push("Altura é inválida");

    if(paciente.gordura.length == 0){
        erros.push("Gordura não pode ser vazia");
    }

    if(paciente.peso.length == 0){
        erros.push("Peso não pode ser em branco");
    }

    if(paciente.altura.length == 0){
        erros.push("Altura não pode ser em branco");
    }


    return erros;

}

function exibeMensagensErro(erros){
    var ul = document.querySelector("#mensagens-erro");

    //controla o html interno
    //isso faz com que fiquem aparecendo trocentas mensagens de erro
    ul.innerHTML = "";

    //foreach ele ja sabe qual o tamanho
    // para cada item do array vc vai passar 1 parametro que no caso nomeamos de erro
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });

}


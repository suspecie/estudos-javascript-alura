//botao que busca os dados de uma api por ajax - requisicao js 
//JSON é um JavaScript Object Notation, é um jeito de transportar pela web, e pode ser transformado facilmente em um objeto javascript
var botaoAdicionar = document.querySelector("#buscar-paciente");

botaoAdicionar.addEventListener("click", function(){
    //XMLHttpRequest é um objeto do javascript responsavel por fazer requisicoes http
    var xhr = new XMLHttpRequest();

    //ensinando o qu o XMLHttpRequest tem que fazer

    //requisicao GET é a mesma coisa de abrir uma nova aba e digitou o endereço
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    //O addEventListener ajuda a ficar ouvindo se a resposta ja foi carregada
    //qndo a sua resposta estiver load(carregada), vc executa uma funcao no caso mostrar os dados da api
    //depois que ele enviar a requisicao ele vai ficar ouvindo e quando ela carregar vai mostrar o dados no console.
    xhr.addEventListener("load", function(){

        var erroAjax = document.querySelector("#erro-ajax");

        //verificando os retornos da requisicao deram certo ou nao
        //erro 200 retorna success, ou seja que deu certo
        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            //mostra o texto da resposta
            var resposta = xhr.responseText;
            //console.log(resposta);
            //mostra o tipo da variavel
            // console.log(typeof resposta); 

            //O parse transforma em um objeto javascript ou seja, ele vai ler um JSON e vai devolver um objeto javascript
            var pacientes = JSON.parse(resposta);
            
            pacientes.forEach(function(paciente) {
                    //adiciona o paciente na tabela
                    adicionaPacienteNaTabela(paciente);
            });
        } else {
           //se retornar um erro diferente de 200 vai mostrar o erro no console.
           console.log(xhr.status);
           console.log(xhr.responseText);
          
           erroAjax.classList.remove("invisivel");

        }       
    })

   //pega a requisicao e envia ela, como se tivesse apertado o enter depois de ter digirtado o endereço 
   xhr.send();



});
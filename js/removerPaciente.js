var pacientes = document.querySelectorAll(".paciente");


/**
 * Para resolver o problema da remoção de pacientes, vamos nos aproveitar de uma característica do JavaScript chamada Event Bubbling, ou "borbulhamento" de eventos. Quando escutamos um evento no JavaScript, esse evento na verdade não acontece só no dono do evento (no nosso caso, na linha do paciente), ele acontece também no pai do paciente, no pai do pai do paciente, e assim vai subindo.
 * Dentro da função, perguntamos ao pai qual filho foi clicado, porque é ele que será removido. Desta vez não podemos utilizar o this, porque o dono do evento é a tabela, logo ela acabará sendo removida. Para descobrir qual filho foi clicado, utilizamos o event como parâmetro na função
 * Ele irá nos dizer quem foi clicado, quem foi o alvo, usando a propriedade target. Enquanto o this é o dono do evento, o event.target será quem sofreu propriamente o evento.
 * Para selecionarmos o pai de um elemento, trabalharemos com a propriedade parentNode
 * Agora, mesmo que adicionarmos novos pacientes, no momento em que ele receber um duplo clique, o evento irá subir até chegar na tabela. Esta por sua vez, estará escutando. Desta forma, o paciente será removido.

Quando clicamos em qualquer filho, o evento consegue chegar até o pai (table). Essa estratégia é muito boa para economizarmos código, deixando-o o mais sucinto.
 */
var tabela = document.querySelector("table");
tabela.addEventListener("dblclick", function(event){
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode; // TR  = paciente = remover
    paiDoAlvo.classList.add("fadeOut");

    //time out para esperar o fadeOut acontecer para remover
    setTimeout(function(){
        paiDoAlvo.remove();
    }, 500);
    
});


/*pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        //quem foi clicado é o dono do evento para ter acesso ao dono do evento ou seja o this
        //palavra de contexto que é quem acionou o evento
        //aqui na verdade estou falando que o paciente foi clicado 
        this.remove();
    });
});*/
var campoFiltro = document.querySelector("#filtrar-tabela");

//evento de digitação
campoFiltro.addEventListener("input", function(){

    //pegando todos os nomes dos pacientes da tabela
    var pacientes = document.querySelectorAll(".paciente");

    //se tiver algo digitado faz o for se nao, remove a class invisivel, para o backspace funcionar
    if (this.value.length > 0){
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
    
            //expressao regular tb chamada de Regex, é uma forma de busca cada letra dentro de uma palavra
            //ela precisa de dois parametros:
            //o primeiro é o que a gente quer que ele busque, no caso eu quero que busque o conteudo do meu texto entao uso o this.value
            // o segundo é se aceitamos buscar por maiusculo ou minusculo, o "i" é o case insensitive
            //O primeiro parâmetro que devemos passar para o construtor é o padrão (o texto da expressão regular, o que deve ser buscado) e o segundo parâmetro são uma ou mais flags (representando como queremos que a expressão regular busque). Por exemplo, podemos definir que não queremos que haja distinção entre letras maiúsculas e minúsculas, através da flag i.
            var expressaoRegular = new RegExp(this.value, "i");
            //a funcao test vai retornar verdadeiro ou falso, ela vai testar a expressao regular.
            if(!expressaoRegular.test(nome)) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }

            //exemplo de busca sem expressao regular
            //if( nome != this.value) {
                //paciente.classList.add("invisivel");
            //}else{
                //paciente.classList.remove("invisivel");
            //}
        }
    }else{
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});
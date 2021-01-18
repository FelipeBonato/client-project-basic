var campos = [
    document.querySelector('#data'),        //0
    document.querySelector('#valor'),       //1
    document.querySelector('#quantidade')   //2  
];

console.log(campos); // Verificando o conteúdo da Array

//precisamos de tbory, pois ele receberá a tr que vamos construir
var tbody = document.querySelector('table tbody');

// buscar oformulário através da classe .form e associa com a funcao de evento submit, que será chamada quando o usuário submiter o formulário
document.querySelector('.form').addEventListener('submit', function(event){

    //cancelando a submissão do formulário(submit atualizaa página e zera os dados)
    event.preventDefault();
    
    var tr = document.createElement('tr');

    //iterando cada um dos elementos da array
    campos.forEach(function(campo) {
        //cria um td sem informações
        var td = document.createElement('td');
        //atribui o valor do campo à td
        td.textContent = campo.value;
        //adiciona a td na tr  ... Pai e filho
        tr.appendChild(td);
    });
    
    // nova td que armazenará o volume da negociação
    var tdVolume = document.createElement('td')
    //as posicoes 1 e 2 do array armazenam os campos de quantidade
    //e valor, respectivamente
    tdVolume.textContent = campos[1].value * campos[2].value;
    // adicionando a td que faltava à tr
    tr.appendChild(tdVolume);

    // adicionando a tr
    tbody.appendChild(tr);
    console.log(tbody)

    campos[0].value = '';
    campos[1].value = '1';
    campos[2].value = '0';
    campos[0].focus();
    
});

function resumo() {
                
    var nome, telefone, email;

    nome = document.getElementById("nome").value;
    telefone = document.getElementById("telefone").value;
    email = document.getElementById("email").value;
    

    document.getElementById("resumo").innerHTML = 
    `<div class="alert alert-secondary resumo">
     <h2> Reveja seus dados e pedido: </h2><br>
    Cliente: ${nome}, Telefone: ${telefone}, Email: ${email} <br>
    Pedido: <br>
    Prato principal: ${pratoPrincipal()}  <br>
    Acompanhamentos: ${acompanhamentos()}<br>
    </div>`
}

function pratoPrincipal(){
    return ` ${getRadioValor('prato_principal')}`;
   
   }
   
   function getRadioValor(name){
    var rads = document.getElementsByName(name);
    var escolhido;
    
    for(var i = 0; i < rads.length; i++){
     if(rads[i].checked){
      escolhido = rads[i].value;
     }
    }

    if(escolhido == 0){
        return "Bife acebolado"; 
    }
    else if (escolhido == 1){
        return "Peito de frango grelhado";
    }
    else if(escolhido == 2){
        return "Carne de panela";
    } else{
        return "Nenhuma opção selecionada";
    }
}

function acompanhamentos(){
    return `${getCheckBoxValor('option_a')}`;

    function getCheckBoxValor(name){
        var rads = document.getElementsByName(name);
    }
}
  
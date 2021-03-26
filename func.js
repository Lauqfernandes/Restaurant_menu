var total = 0;

function resumo() {
                
    var nome, telefone, email;

    total = 0;

    nome = document.getElementById("nome").value;
    telefone = document.getElementById("telefone").value;
    email = document.getElementById("email").value;

    document.getElementById("resumo").innerHTML = 
    `<div class="alert alert-secondary resumo">
    <h2> Reveja seus dados e pedido: </h2>
     
    <h3>Dados pessoais: </h3>
    Cliente: ${nome}, Telefone: ${telefone}, Email: ${email} <br><br>
    
    <h3>Pedido: </h3>
    <h5>Prato principal:</h5>${pratoPrincipal('prato_principal')}<br><br>
    <h5>Acompanhamentos:</h5> ${acompanhamentos('option_a')}<br>

    <h2>Total: </h2>
    <h3>R$${total},00</h3>

    
    <button onclick="Limpar()" type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    Confirmar
    </button>

    <button onclick="Limpar()" class="btn btn-danger">Limpar tudo</button>

    </div>`
}
   
function  pratoPrincipal(name){
    var rads = document.getElementsByName(name);
    var escolhido, vbf=35, vpf = 30, vcp=32;
    
    for(var i = 0; i < rads.length; i++){
     if(rads[i].checked){
      escolhido = rads[i].value;
     }
    }

    if(escolhido == 0){
        total = total + vbf;
        return `Bife acebolado................R$${vbf}`; 
    }
    else if (escolhido == 1){
        total = total + vpf;
        return `Peito de frango grelhado................R$${vpf}`;
    }
    else if(escolhido == 2){
        total = total + vcp;
        return `Carne de panela................R$${vcp}`;
    } else{
        return "Nenhuma opção selecionada";
    }
}


function acompanhamentos(name){
    var checkboxes = document.getElementsByName(name);
    var escolhidos = [];
    var va = 10, vs = 8, vb=10, vm = 12, count = 0; 
    
    for(var i = 0; i < checkboxes.length; i++){
        if(checkboxes[i].checked){
            count++;
            if(checkboxes[i].value == 0){
                total = total + va;
                escolhidos.push(`Arroz................. R$${va},00 <br>`);
            }
            else if(checkboxes[i].value == 1){
                total = total + vs;
                escolhidos.push(`Salada................. R$${vs},00 <br>`);
            }
            else if(checkboxes[i].value == 2){
                total = total + vb;
                escolhidos.push(`Batata frita................. R$${vb},00 <br>`);
            }
            else{
                total = total + vm;
                escolhidos.push(`Maionese................. R$${vm},00 <br>`);
            }
        }
    }

    if(count == 0){
        escolhidos.push(`Nenhuma opção selecionada<br>`);
    }

    return escolhidos;
        
}

function Limpar(){
    total = 0;
    document.querySelector('form').reset();
    document.getElementById("resumo").innerHTML = ""
    
}
/*

function salada(){
    return `${getCheckBoxValor('option_a')}`;

    function getCheckBoxValor(name){
        var checkboxes = document.getElementsByName(name);

        if(checkboxes[1].checked){
            return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z" fill="rgba(6,254,110,1)"/></svg>
            ....................................R$5,00`;
        }
        else{
            return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-11.414L9.172 7.757 7.757 9.172 10.586 12l-2.829 2.828 1.415 1.415L12 13.414l2.828 2.829 1.415-1.415L13.414 12l2.829-2.828-1.415-1.415L12 10.586z" fill="rgba(249,11,11,1)"/></svg>`;
        }
    }
}

function fritas(){
    return `${getCheckBoxValor('option_a')}`;

    function getCheckBoxValor(name){
        var checkboxes = document.getElementsByName(name);

        if(checkboxes[2].checked){
            return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z" fill="rgba(6,254,110,1)"/></svg>
            ....................................R$10,00`;
        }
        else{
            return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-11.414L9.172 7.757 7.757 9.172 10.586 12l-2.829 2.828 1.415 1.415L12 13.414l2.828 2.829 1.415-1.415L13.414 12l2.829-2.828-1.415-1.415L12 10.586z" fill="rgba(249,11,11,1)"/></svg>`;
        }
    }
}

function maionese(){
    return `${getCheckBoxValor('option_a')}`;

    function getCheckBoxValor(name){
        var checkboxes = document.getElementsByName(name);

        if(checkboxes[3].checked){
            return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z" fill="rgba(6,254,110,1)"/></svg>
            ....................................R$6,00`;
        }
        else{
            return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-11.414L9.172 7.757 7.757 9.172 10.586 12l-2.829 2.828 1.415 1.415L12 13.414l2.828 2.829 1.415-1.415L13.414 12l2.829-2.828-1.415-1.415L12 10.586z" fill="rgba(249,11,11,1)"/></svg>`;
        }
    }
}

function valor(){

    if(getRadioValor('prato_principal') == 0){
        return "R$ 35.00";
    }
    else if(getRadioValor('prato_principal') == 1){
        return "R$ 30,00";
    }
    else if(getRadioValor('prato_principal') == 2){
        return "R$ 32,00";
    }
    else{
        return "????";
    }

    function getRadioValor(name){
        var rads = document.getElementsByName(name);
        var escolhido;
        
        for(var i = 0; i < rads.length; i++){
         if(rads[i].checked){
          escolhido = rads[i].value;
         }
        }
        return escolhido;
    }

    

} 

/*
if(pratoPrincipal() === "Peito de frango grelhado"){
    return vpf;
}
else if(pratoPrincipal() === "Carne de panela"){
    return vcp;
}
*/
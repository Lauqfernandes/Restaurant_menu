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
    var escolhido, vbf=28, vpf = 25, vcp=27;
    
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
    var va = 8, vs = 8, vb=10, vm = 12, count = 0; 
    
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

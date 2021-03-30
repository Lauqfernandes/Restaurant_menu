var total = 0;

function resumo() {
                
    var nome, telefone, email;

    total = 0;

    nome = document.getElementById("nome").value;
    telefone = document.getElementById("telefone").value;
    email = document.getElementById("email").value;

    if(nome === "" || telefone === "" || email === "")
    {
        alert("Os dados pessoais devem ser digitados!!!");
    }
    else{

        document.getElementById("resumo").innerHTML = 
        `<div class="alert alert-secondary resumo">
        <h2> Reveja seus dados e pedido: </h2>
         
        <h3>Dados pessoais: </h3><br>
        Cliente: ${nome}, Telefone: ${telefone}, Email: ${email} <br><br>
        
        <h3>Pedido: </h3><br>
        <h5>Prato principal:</h5>${pratoPrincipal('prato_principal')}<br><br>
        <h5>Acompanhamentos:</h5> ${acompanhamentos('option_a')}
    
        <br><br><h2>Total: </h2>
        <h3>R$${total},00</h3>
    
        
        <button onclick="Limpar()" type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Confirmar
        </button>
    
        <button onclick="Limpar()" class="btn btn-danger">Limpar tudo</button>
    
        </div>`

    }
}
   
function  pratoPrincipal(name){
    var rads = document.getElementsByName(name);
    var escolhido, vbf=28, vpf = 25, vcp=27;
    
    let pratoEscolhido = [
        {nome: "Bife acebolado", preço:vbf},
        {nome: "Peito de frango grelhado", preço:vpf},
        {nome: "Carne de panela", preço:vcp},
    ]

    for(var i = 0; i < rads.length; i++){
     if(rads[i].checked){
      escolhido = rads[i].value;
     }
    }

    total = total + pratoEscolhido[escolhido].preço;

    return `<br>${pratoEscolhido[escolhido].nome}..................R$${pratoEscolhido[escolhido].preço},00`;
}


function acompanhamentos(name){
    var checkboxes = document.getElementsByName(name);
    var escolhidos = [];
    var va = 8, vs = 8, vb=10, vm = 12, count = 0; 

    let acompanhamentosEscolhidos = [
        {nome: "Arroz", preço:va},
        {nome: "Salada", preço:vs},
        {nome: "Batata frita", preço:vb},
        {nome: "Maionese", preço:vm},
    ]
    
    for(var i = 0; i < checkboxes.length; i++){
        if(checkboxes[i].checked){
            count++;
            escolhidos.push(`<br>${acompanhamentosEscolhidos[i].nome}........................R$${acompanhamentosEscolhidos[i].preço},00`);
            total = total + acompanhamentosEscolhidos[i].preço;
        }
    }

    if(count == 0){
        escolhidos.push(`<br>Nenhuma opção selecionada<br>`);
    }

    return escolhidos;
        
}

function Limpar(){
    total = 0;
    document.querySelector('form').reset();
    document.getElementById("resumo").innerHTML = ""
}
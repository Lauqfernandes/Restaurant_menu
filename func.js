var total = 0;

function resumo() {
                
    var nome, telefone, email;

    total = 0;

    nome = document.getElementById("nome").value;
    telefone = document.getElementById("telefone").value;
    email = document.getElementById("email").value;

    if(nome === "" || telefone === "" || email === "")
    {
        document.getElementById("resumo").innerHTML = 
        "Os dados pessoais devem ser digitados!!!";
    }
    else{

        document.getElementById("resumo").innerHTML = 
        `<div">
        <h2> Reveja seus dados e pedido: </h2><br>
         
        <h3>Dados pessoais: </h3><br>
        Cliente: ${nome}<br>
        Telefone: ${telefone}<br> 
        Email: ${email} <br><br>
        
        <h3>Pedido: </h3><br>
        <h5>Prato principal:</h5>${pratoPrincipal('prato_principal')}<br><br>
        <h5>Acompanhamentos:</h5> ${acompanhamentos('option_a')}<br><br>

        <h3>Convênio</h3>
        Convenio: ${desconto("option_b")}
    
        <br><br><h2>Total: </h2>
        <h3>R$${total}</h3>

        
        <button type="button" data-bs-dismiss="modal" onclick="limpar()" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#mymodal2">
        Confirmar
        </button>
    
        </div>`
    }
}
   
function pratoPrincipal(name){
    var rads = document.getElementsByName(name);
    var escolhido;
    
    let pratosCadastrados = [
        {nome: "Bife acebolado", preço:28},
        {nome: "Peito de frango grelhado", preço:25},
        {nome: "Carne de panela", preço:27},
    ]

    for(var i = 0; i < rads.length; i++){
     if(rads[i].checked){
      escolhido = rads[i].value;
     }
    }

    total = total + pratosCadastrados[escolhido].preço;

    return `<br>${pratosCadastrados[escolhido].nome}..................R$${pratosCadastrados[escolhido].preço}`;
}


function acompanhamentos(name){
    var checkboxes = document.getElementsByName(name);
    var escolhidos = [];
    var  count = 0; 

    let acompanhamentosCadastrados = [
        {nome: "Arroz", preço:8},
        {nome: "Salada", preço:8},
        {nome: "Batata frita", preço:10},
        {nome: "Maionese", preço:12},
    ]
    
    for(var i = 0; i < checkboxes.length; i++){
        if(checkboxes[i].checked){
            count++;
            escolhidos.push(`<br>${acompanhamentosCadastrados[i].nome}........................R$${acompanhamentosCadastrados[i].preço}`);
            total = total + acompanhamentosCadastrados[i].preço;
        }
    }

    if(count == 0){
        escolhidos.push(`<br>Nenhuma opção selecionada<br>`);
    }

    return escolhidos;
}

function limpar(){
    total = 0.00;
    document.querySelector('form').reset();
    document.getElementById("resumo").innerHTML = ""
}

function desconto(name){
    var select = document.getElementsByName(name);
    var escolhido;
    
    let conveniosCadastrados = [
        {nome: "Nenhum", desconto: 0},
        {nome: "Empresa X", desconto: 0.10},
        {nome: "Empresa Y", desconto: 0.15},
    ]

    for(var i = 0; i < select.length; i++){
        if(select[i].selected){
            escolhido = select[i].value;
        }
    }

    totalDesconto = total * conveniosCadastrados[escolhido].desconto

    total = total - (totalDesconto);

    return `${conveniosCadastrados[escolhido].nome}, Desconto de: R$${totalDesconto}`;

}




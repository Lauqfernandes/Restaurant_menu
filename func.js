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
        `<div resumo">
        <h2> Reveja seus dados e pedido: </h2><br>
         
        <h3>Dados pessoais: </h3><br>
        Cliente: ${nome}<br>
        Telefone: ${telefone}<br> 
        Email: ${email} <br><br>
        
        <h3>Pedido: </h3><br>
        <h5>Prato principal:</h5>${pratoPrincipal('prato_principal')}<br><br>
        <h5>Acompanhamentos:</h5> ${acompanhamentos('option_a')}<br><br>

        <h3>Convênio</h3>
        Convenio: ${Desconto("option_b")}
    
        <br><br><h2>Total: </h2>
        <h3>R$${total}</h3>

        
        <button type="button" data-bs-dismiss="modal" onclick="Limpar()"  class="btn btn-success" data-bs-toggle="modal" data-bs-target="#mymodal2">
        Confirmar
        </button>
    
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

    return `<br>${pratoEscolhido[escolhido].nome}..................R$${pratoEscolhido[escolhido].preço}`;
}


function acompanhamentos(name){
    var checkboxes = document.getElementsByName(name);
    var escolhidos = [];
    var va = 8.00, vs = 8.00, vb=10.00, vm = 12.00, count = 0; 

    let acompanhamentosEscolhidos = [
        {nome: "Arroz", preço:va},
        {nome: "Salada", preço:vs},
        {nome: "Batata frita", preço:vb},
        {nome: "Maionese", preço:vm},
    ]
    
    for(var i = 0; i < checkboxes.length; i++){
        if(checkboxes[i].checked){
            count++;
            escolhidos.push(`<br>${acompanhamentosEscolhidos[i].nome}........................R$${acompanhamentosEscolhidos[i].preço}`);
            total = total + acompanhamentosEscolhidos[i].preço;
        }
    }

    if(count == 0){
        escolhidos.push(`<br>Nenhuma opção selecionada<br>`);
    }

    return escolhidos;
}

function Limpar(){
    total = 0.00;
    document.querySelector('form').reset();
    document.getElementById("resumo").innerHTML = ""
}

function Desconto(name){
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

    totalDesconto = total*conveniosCadastrados[escolhido].desconto

    total = total - (totalDesconto);

    return `${conveniosCadastrados[escolhido].nome}, Desconto de: R$${totalDesconto}`;

}




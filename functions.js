
function enviarOrcamento() {
    alert("teste")
    let data = document.getElementById("dados_form");
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let telefone = document.getElementById("telefone").value
    let mensagem = document.getElementById("mensagem").value
    let sobre_nos = document.getElementById("sobre_nos").value

    if(nome.length <= 2 || nome.length >= 50){
        // aqui voce poem oq vai mudar caso o nome seja invalido
        return alert("deu erro aq paizao" + nome) // ele retorna os erros, para implementar uma mensagem coloque nos return aq 
    };
    if(!email.includes("@") || !email.includes(".com")){
        // aqui voce poem oq vai mudar caso o nome seja invalido
        return alert("erro" + email)
    }
    if(telefone.length < 9 || telefone.length > 15){
        // aqui voce poem oq vai mudar caso o nome seja invalido
        return alert("erro no telefone" + telefone)

    }
    if(mensagem.length > 155 || mensagem.length < 3){
        // aqui voce poem oq vai mudar caso o nome seja invalido
        return alert("opa paezao erro na mensagem " + mensagem)
    }}

    // o popup caso tudo esteja correto voce começa a fazer aqui 





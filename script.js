function converter() {
    // Coleta os valores dos campos no momento do clique
    let valorDigitado = document.getElementById("valorEmReais").value;
    let moedaSelecionada = document.getElementById("moedaEscolhida").value;

    // Converte o valorDigitado para número
    valorDigitado = parseFloat(valorDigitado);

    let resultadoConversao;

    // Verifica a moeda selecionada
    if (moedaSelecionada === "dolar") {
        // Calcula o valor convertido se Dólar
        resultadoConversao = valorDigitado * 5.57;
        document.getElementById("resultado").innerText = `R$${valorDigitado} em Dólar é igual a $${resultadoConversao.toFixed(2)}`;
    } else if (moedaSelecionada === "euro") {
        // Calcula o valor convertido se Euro
        resultadoConversao = valorDigitado * 6.07;
        document.getElementById("resultado").innerText = `R$${valorDigitado} em Euro é igual a €${resultadoConversao.toFixed(2)}`;
    } else if (moedaSelecionada === "peso") {
        // Calcula o valor convertido se Peso Argentino
        resultadoConversao = valorDigitado * 165.74;
        document.getElementById("resultado").innerText = `R$${valorDigitado} em Peso Argentino é igual a $${resultadoConversao.toFixed(2)}`;
    } else {
        resultadoConversao = "Moeda não suportada";
    }

}

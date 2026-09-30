function buscarDolar() {

    fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL")

        .then(response => response.json())

        .then(data => {

            const dolar = data.USDBRL;

            const valorAtual = parseFloat(dolar.bid);
            const maiorValor = parseFloat(dolar.high);
            const menorValor = parseFloat(dolar.low);

            document.getElementById("valorAtual").innerText =
                "R$ " + valorAtual.toFixed(2);

            document.getElementById("maiorValor").innerText =
                "R$ " + maiorValor.toFixed(2);

            document.getElementById("menorValor").innerText =
                "R$ " + menorValor.toFixed(2);

            const horario = new Date().toLocaleTimeString("pt-BR");

            document.getElementById("ultimaAtualizacao").innerText =
                "Última atualização: " + horario;
        })

        .catch(error => {

            console.error("Erro ao buscar a cotação:", error);

            document.getElementById("valorAtual").innerText =
                "Erro ao carregar";

            document.getElementById("maiorValor").innerText =
                "Erro";

            document.getElementById("menorValor").innerText =
                "Erro";
        });
}


// Busca a cotação assim que a página abre
buscarDolar();


// Atualiza a cotação a cada 10 segundos
setInterval(buscarDolar, 10000);


// Adicionando evento de clique
element('botaoJogar').onclick = () => {

    // Pegando os valores do jogadores
    const jogadorCara = element("jogadorCara").value
    const jogadorCoroa = element("jogadorCoroa").value

    // Retornando para ver se os campos names estão vazios
    if (jogadorCara == "" || jogadorCoroa == "") {
        return alert("Digite os nomes") // Return para não executar o restante do código
    }

    const valor = Math.random();

    let imagem = "";
    let nomeVencedor = ""

    // Estrutura de repetição
    if (valor > 0.5) {
        // Preenchendo variavel com SRC
        imagem = "cara.jpg"
        nomeVencedor = jogadorCoroa
    } else {
        imagem = "coroa.png"
        nomeVencedor = jogadorCara
    }

    // Criando caminho para a variavel imagem com Template String
    const caminhoImagem = `./images/${imagem}`

    // Modificando o caminho com a extensão .src
    element('imagemMoeda').src = caminhoImagem
    alert(nomeVencedor)
}

function element(id) {
    return document.getElementById(id)
}
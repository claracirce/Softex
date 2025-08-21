function mostrarSaudacao(){
    let nome = "Clara";

    const paragrafo = document.getElementById("mensagem");

    paragrafo.textContent = `Olá, ${nome}! Seja bem-vindo(a)!`;
    paragrafo.textContent += `Obrigada pela visita!`;
}
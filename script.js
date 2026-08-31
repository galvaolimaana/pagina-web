const botoes = document.querySelectorAll(".curtir");

botoes.forEach(function(botao) {

    botao.addEventListener("click", botaoClicado);

});


function botaoClicado(event) {

    console.log("Fui clicado!");

    const botao = event.currentTarget;

    const texto = botao.querySelector("span");

    texto.textContent = Number(texto.textContent) + 1;

}

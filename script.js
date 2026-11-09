const botao = document.getElementById("botao");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", function () {
  mensagem.innerText = "Obrigado por visitar meu cartão!";
});

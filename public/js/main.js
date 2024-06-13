let frase = $(".frase").text();
let numPalavras = frase.split(" ").length;
let tamanhoFrase = $("#tamanhoDaFrase");
let btnReniciar = $("#btn-reniciar");
let campo = $(".campo-digitacao");
let tempoRestante = $("#tempo-digitacao").text();

$(document).ready(function () {
  atualizaTamanhoFrase();
  contadorLetras();
  contadorTempo();
});

function atualizaTamanhoFrase() {
  tamanhoFrase.text(numPalavras);
}

function contadorLetras() {
  campo.on("input", () => {
    let conteudo = campo.val();
    let qtdCaracteres = conteudo.length;
    let qtdPalavras = conteudo.split(/\S+/).length - 1;

    $("#contador-palavras").text(qtdPalavras);
    $("#contador-caracteres").text(qtdCaracteres);
  });
}

function contadorTempo() {
  campo.one("focus", () => {
    let cronometroID = setInterval(function () {
      tempoRestante--;
      $("#tempo-digitacao").text(tempoRestante);
      if (tempoRestante < 1) {
        campo.attr("disabled", true);
        clearInterval(cronometroID);
      }
    }, 1000);
  });
}

btnReniciar.click(() => {
  campo.attr("disabled", false);
  campo.val("");
  $("#contador-palavras").text(0);
  $("#contador-caracteres").text(0);
  $("#tempo-digitacao").text(10);
  contadorTempo();
});

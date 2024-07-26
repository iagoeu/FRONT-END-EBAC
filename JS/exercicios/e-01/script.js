// function obtermedia() {
//   var a = parseInt(document.getElementById("a").value);
//   var b = parseInt(document.getElementById("b").value);
//   var c = parseInt(document.getElementById("c").value);

//   var media = (a + b + c) / 3;

//   document.getElementById("resultado").innerText = "Resultado " + media;
// }

function calculoMedia(notas) {
  var soma = 0;
  for (c = 0; c < notas.length; c++) {
    soma += notas[c];
  }
  media = soma / notas.length;
  return media;
}

function aprovacao(notas) {
  let media = calculoMedia(notas);

  let condicao = media >= 7 ? "aprovado" : "reprovado";

  return condicao;
}

console.log();

console.log("Media: " + calculoMedia([8, 8]));
console.log(aprovacao(calculoMedia([8, 8])));

console.log("Media: " + calculoMedia([8, 8, 2, 7, 8, 9]));
console.log(aprovacao(calculoMedia([8, 4])));

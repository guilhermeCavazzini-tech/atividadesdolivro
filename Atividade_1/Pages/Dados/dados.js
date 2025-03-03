let canvas1 = document.getElementById("dados1");
let ctx1 = canvas1.getContext("2d");
let canvas2 = document.getElementById("dados2");
let ctx2 = canvas2.getContext("2d");

var ganhou = 0;
var perdeu = 0;
var first = true;
var numerossorteados = [];

function limparCanvas(ctx, canvas) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function desenharPontos(ctx, pontos) {
  ctx.beginPath();
  pontos.forEach(([x, y]) => {
    ctx.arc(x, y, 20, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.beginPath();
  });
}

const pontosDados = [
  [],
  [[100, 100]], // 1
  [
    [40, 40],
    [160, 160],
  ], // 2
  [
    [40, 40],
    [160, 160],
    [100, 100],
  ], // 3
  [
    [40, 40],
    [160, 160],
    [40, 160],
    [160, 40],
  ], // 4
  [
    [40, 40],
    [160, 160],
    [40, 160],
    [160, 40],
    [100, 100],
  ], // 5
  [
    [40, 40],
    [160, 160],
    [40, 160],
    [160, 40],
    [40, 100],
    [160, 100],
  ], // 6
];

function sorteio() {
  limparCanvas(ctx1, canvas1);
  limparCanvas(ctx2, canvas2);

  let sorteio1 = Math.floor(Math.random() * 6) + 1;
  let sorteio2 = Math.floor(Math.random() * 6) + 1;

  desenharPontos(ctx1, pontosDados[sorteio1]);
  desenharPontos(ctx2, pontosDados[sorteio2]);

  sum = sorteio1 + sorteio2;

  console.log("Numeros sorteados" + numerossorteados);

  if (first == true) {
    result(sum);
    console.log(sum + " first");
    first = false;
  } else {
    resultsecond(sum);
    console.log(sum + " second");
  }
}

function result(sum) {
  switch (sum) {
    case 7:
    case 11:
      Vitorias();
      break;
    case 2:
    case 3:
    case 12:
      Derrotas();
      break;
  }
}

function resultsecond(sum) {
  if (numerossorteados.includes(sum)) {
    Vitorias();
    console.log(numerossorteados);
  }
  switch (sum) {
    case 7:
      Derrotas();
      console.log(numerossorteados);
      first = true;
      break;
  }
}

function Vitorias() {
  ganhou++;
  console.log(numerossorteados);
  document.getElementById("ganhou").innerHTML = ganhou;
}

function Derrotas() {
  perdeu++;
  document.getElementById("perdeu").innerHTML = perdeu;
}

window.onload = function () {
  desenharPontos(ctx1, pontosDados[0]);
  desenharPontos(ctx2, pontosDados[0]);
};

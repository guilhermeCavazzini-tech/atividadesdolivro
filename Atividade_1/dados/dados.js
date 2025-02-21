let canvas1 = document.getElementById("dados1");
let ctx1 = canvas1.getContext("2d");
let canvas2 = document.getElementById("dados2");
let ctx2 = canvas2.getContext("2d");

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
}

window.onload = function () {
  desenharPontos(ctx1, pontosDados[4]);
  desenharPontos(ctx2, pontosDados[6]);
};

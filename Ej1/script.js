const divTablero = document.querySelector(".tablero");

const MAX_FIL = 9;
const MAX_COL = 13;

for (let fila = 0; fila < MAX_FIL; fila++) {
  divTablero.innerHTML += `
    <div class="row">${agregarCol()}</div>`;
}

function agregarCol() {
  let columnas = "";
  for (let col = 0; col < MAX_COL; col++) {
    columnas += `<div class="col casilla"></div>`;
  }
  return columnas;
}

/* const MIN = 1;
const MAX = 100;

const MAX_COL = 10;
const MAX_FIL = 10;

const matriz = [];

let num = MIN;

for (let fila = 0; fila < MAX_FIL; fila++) {
  matriz.push([]);
  for (let col = 0; col < MAX_COL; col++) {
    matriz[fila][col] = num;
    num++;
    if (num > MAX) {
      fila = MAX_FIL;
      col = MAX_COL;
    }
  }
}

console.table(matriz); */
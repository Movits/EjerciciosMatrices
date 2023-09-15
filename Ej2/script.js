const divTablero = document.querySelector(".tablero");
const inputFilas = document.querySelector("#filas");
const inputColumnas = document.querySelector("#columnas");

let color = [0,1];

function crearTablero() {
  const MAX_FIL = parseInt(inputFilas.value);
  const MAX_COL = parseInt(inputColumnas.value);

  let tablero = "";

  for (let fila = 0; fila < MAX_FIL; fila++) {
    tablero += `
      <div class="row">${agregarCol(fila,MAX_COL)}</div>`;
  }
  divTablero.innerHTML = tablero;
  cambiarColor();
}

function agregarCol(fila,max_col) {
  let columnas = "";
  for (let col = 0; col <max_col; col++) {
    let coloresTablero = (fila+col) % 2 === 0 ? 'casilla0' : 'casilla1';
    let numero = fila*max_col + col + 1;
    columnas += `<div onclick="alertCasilla(${numero})" class="col ${coloresTablero}"></div>`;
  }
  return columnas;
}

function alertCasilla(numero){
  alert("hola"+ numero);
}






/* setInterval(() => {
    document.querySelectorAll(".casilla").forEach((casilla) => {
        casilla.style.backgroundColor = `rgb(${cambiarColor(255)}, ${cambiarColor(255)}, ${cambiarColor(255)})`;
    });
}, 100);

function cambiarColor(max) {
    return Math.floor(Math.random() * max);
} */
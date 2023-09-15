const divTablero = document.querySelector(".tablero");

const MAX_FIL = 5;
const MAX_COL = 5;

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







/* setInterval(() => {
    document.querySelectorAll(".casilla").forEach((casilla) => {
        casilla.style.backgroundColor = `rgb(${cambiarColor(255)}, ${cambiarColor(255)}, ${cambiarColor(255)})`;
    });
}, 100);

function cambiarColor(max) {
    return Math.floor(Math.random() * max);
} */
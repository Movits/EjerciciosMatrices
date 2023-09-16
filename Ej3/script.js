const divTablero = document.querySelector("#tablero");

const MAX_FILA = 7;
const MAX_COL = 7;

const POS_INICIAL_COL = 3;
const POS_INICIAL_FILA = 3;

const ARRIBA = "w";
const ABAJO = "s";
const IZQUIERDA = "a";
const DERECHA = "d";

document.addEventListener("keydown", function(event) {
    alert(event.key);
});

/* Genera el Tablero de la pagina */
function generarMatriz() {
    divTablero.innerHTML = "";    
    for (let fila = 0; fila < MAX_FILA; fila++) {
        divTablero.innerHTML += `
            <div class="row">
                ${ agregarColumnas(fila) }
            </div>
        `;
    }
    agregarJugador(POS_INICIAL_FILA, POS_INICIAL_COL);
}


/* Agrega el jugador en la posicion indicada */
function agregarJugador(fila, col) {
    let jugador = document.querySelector(`#casilla-${fila + "-" + col}`);
    jugador.innerHTML = `<span>J</span>`;
    jugador.classList.add("jugador");
}

/* Genera las casillas correspondientes a la fila actual */
function agregarColumnas(fila) {
    let columnasGeneradasHtml = "";
    for (let columna = 0; columna < MAX_COL; columna++) {
        columnasGeneradasHtml += `
            <div id="casilla-${fila+"-"+columna}" class="col casilla"></div>`;
        }
    return columnasGeneradasHtml;
}

generarMatriz();
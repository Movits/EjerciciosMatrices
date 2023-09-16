const divTablero = document.querySelector("#tablero");
const inputFila = document.querySelector("#fila");
const inputCol = document.querySelector("#col");

/* const MAX_FILA = 3;
const MAX_COL = 5; */

let cantCasillas = 0;

function generarMatriz() {
    let maxFila = parseInt(inputFila.value);
    cantCasillas = 0;
    divTablero.innerHTML = "";    
    for (let fila = 0; fila < maxFila; fila++) {
        /* matriz.push([])    */ 
        divTablero.innerHTML += `
            <div class="row">
                ${ agregarColumnas() }
            </div>
        `
    }
}

function agregarColumnas() {
    let maxFila = parseInt(inputCol.value);
    let columnasGeneradasHtml = "";
    for (let columna = 0; columna < maxFila; columna++) {
        if (cantCasillas%2 == 0) {
            columnasGeneradasHtml += `
                <div id="negra" onclick="detectar(this)" class="col casilla casilla-1">
                </div>
            `;
        } else {
            columnasGeneradasHtml += `
                <div id="blanca" onclick="detectar(this)" class="col casilla casilla-0">
                </div>
            `;
        }
        cantCasillas++;
    }
    cantCasillas++;
    return columnasGeneradasHtml;
}

/**
 * detecta la casilla
 * @param {HTMLDivElement} elemento casilla
 */
function detectar(elemento) {
    elemento.style.backgroundColor = "red";
    alert(elemento.id);
    console.log(elemento.id);
}
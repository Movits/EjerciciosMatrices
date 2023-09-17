const divTablero = document.querySelector("#tablero");

const MAX_FILA = 7;
const MAX_COL = 7;

/* Posicion Inicial Jugador */
const POS_INICIAL_COL = 3;
const POS_INICIAL_FILA = 3;

/* Posicion Casilla Ganaste */
const POS_GANASTE_COL = 3;
const POS_GANASTE_FILA = 0;

/* Posicion Inicial Enemigo */
const POS_INICIAL_ENEMIGO_COL = 3;
const POS_INICIAL_ENEMIGO_FILA = 6;

/* Teclas movimiento */
const ARRIBA = "w";
const ABAJO = "s";
const IZQUIERDA = "a";
const DERECHA = "d";

let posJugador = [POS_INICIAL_FILA, POS_INICIAL_COL];
let posCasillaGanaste = [POS_GANASTE_FILA, POS_GANASTE_COL];
let posEnemigo = [POS_INICIAL_ENEMIGO_FILA, POS_INICIAL_ENEMIGO_COL];

/* Verifica si la posicion esta dentro del tablero */
function limiteTablero(fila, col) {
    return fila >= 0 && fila < MAX_FILA && col >= 0 && col < MAX_COL;
}


/* Evento que se ejecuta cuando se presiona una tecla */
document.addEventListener("keydown", function(event) {

    let jugador = document.querySelector(`#casilla-${posJugador[0] + "-" + posJugador[1]}`);
    jugador.innerHTML = ``;
    jugador.classList.remove("jugador");

    let nuevaFila = posJugador[0];
    let nuevaCol = posJugador[1];

    switch (event.key) {
        case ARRIBA:
            nuevaFila--;
            break;

        case ABAJO:
            nuevaFila++;
            break;

        case IZQUIERDA:
            nuevaCol--;
            break;

        case DERECHA:
            nuevaCol++;
            break;
    }

    /* Verifica si el movimiento esta dentro del limite y actualiza posicion */
    if (limiteTablero(nuevaFila, nuevaCol)) {
        posJugador[0] = nuevaFila;
        posJugador[1] = nuevaCol;
    }

    agregarJugador(posJugador[0], posJugador[1]);

    /* Verificar si el jugador gana o pierde el juego */
    if (posJugador[0] == posCasillaGanaste[0] && posJugador[1] == posCasillaGanaste[1]) {
        setTimeout(() => {
            alert("Ganaste");
            location.reload();
        }, 10);
    }

    if (posJugador[0] == posEnemigo[0] && posJugador[1] == posEnemigo[1]) {
        setTimeout(() => {
            alert("Perdiste");
            location.reload();
        }, 100);
    }
});

/* Movimiento del enemigo */
function movimientoEnemigo() {
    setInterval(() => {
        let enemigo = document.querySelector(`#casilla-${posEnemigo[0] + "-" + posEnemigo[1]}`);
        enemigo.innerHTML = ``;
        enemigo.classList.remove("enemigo");

        let direccion = Math.floor(Math.random() * 4);

        switch(direccion) {
            case 0: // Arriba
                if(limiteTablero(posEnemigo[0] - 1, posEnemigo[1])) {
                    posEnemigo[0]--;
                }
                break;
            case 1: // Abajo
                if(limiteTablero(posEnemigo[0] + 1, posEnemigo[1])) {
                    posEnemigo[0]++;
                }
                break;
            case 2: // Izquierda
                if(limiteTablero(posEnemigo[0], posEnemigo[1] - 1)) {
                    posEnemigo[1]--;
                }
                break;
            case 3: // Derecha
                if(limiteTablero(posEnemigo[0], posEnemigo[1] + 1)) {
                    posEnemigo[1]++;
                }
                break;
        }

        if ((posEnemigo[0] == posCasillaGanaste[0] && posEnemigo[1] == posCasillaGanaste[1]) 
            || !limiteTablero(posEnemigo[0], posEnemigo[1])) {
            return;
        }

        agregarEnemigo(posEnemigo[0], posEnemigo[1]);

        if (posJugador[0] == posEnemigo[0] && posJugador[1] == posEnemigo[1]) {
            setTimeout(() => {
                alert("Perdiste");
                location.reload();
            }, 100);
        }
        
    }, 500);
}

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
    posicionCasillaGanaste(POS_GANASTE_FILA, POS_GANASTE_COL)
    agregarEnemigo(POS_INICIAL_ENEMIGO_FILA, POS_INICIAL_ENEMIGO_COL);
}



/* Agrega el jugador en la posicion indicada */
function agregarJugador(fila, col) {
    let jugador = document.querySelector(`#casilla-${fila + "-" + col}`);
    jugador.innerHTML = `<span>J</span>`;
    jugador.classList.add("jugador");
}

/* Agregar un enemigo */
function agregarEnemigo(fila, col) {
    let enemigo = document.querySelector(`#casilla-${fila + "-" + col}`);
    enemigo.innerHTML = `<span>E</span>`;
    enemigo.classList.add("enemigo");
}

/* Agrega la casilla ganaste en la posicion indicada */
function posicionCasillaGanaste(fila, col) {
    let casillaGanaste = document.querySelector(`#casilla-${fila + "-" + col}`);
    casillaGanaste.innerHTML = `<span>G</span>`;
    casillaGanaste.classList.add("ganaste");
    
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
movimientoEnemigo();
const matrix = [];

let contador = 1;
const contadorMax = 200;

for (let i = 0; i < 1; i++) {
  matrix.push([]); // Push una fila para cada iteración
  for (let j = 0; j < 1; j++) {
    while (contador <= contadorMax) {
      matrix[i].push(contador); // Push el valor del contador en la fila
      contador++; // Incrementar el contador en cada iteración
    }
  }
  console.log(matrix[i].join(' ')); // Junta los valores de la fila con un espacio
}

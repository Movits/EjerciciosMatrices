const matrix = [];

let contador = 1;

for (let i = 0; i < 10; i++) {
  matrix.push([]); // Push una fila para cada iteración
  for (let j = 0; j < 10; j++) {
    matrix[i].push(contador); // Push el valor del contador en la fila
    contador++; // Incrementar el contador en cada iteración
  }
  console.log(matrix[i].join(' ')); // Junta los valores de la fila con un espacio
}

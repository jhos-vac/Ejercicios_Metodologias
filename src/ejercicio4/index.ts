/**
 * EJERCICIO 4
 * - Ordenar una lista de números usando burbuja
 * - Buscar un número con búsqueda binaria
 * - Retornar la posición o -1 si no existe
 */

export function ordenarBurbuja(lista: number[]): number[] {
  const arr = [...lista];
  const n = arr.length;
  //escribir el codigo
  
const numeros: number[] = [45, 12, 89, 23, 67, 5, 90, 34];
const numeroBuscado: number = 23;

// ORDENAMIENTO BURBUJA

for (let i = 0; i < numeros.length - 1; i++) {
  
    for (let j = 0; j < numeros.length - 1 - i; j++) {

        // Guardamos valores asegurando que NO son undefined
        const actual: number = numeros[j]!;
        const siguiente: number = numeros[j + 1]!;
// Comparar y swap si es necesario
        if (actual > siguiente) {
    // Intercambiar
            numeros[j] = siguiente;
    // Reasignar el valor actual
            numeros[j + 1] = actual;
        }
    }
}

// BÚSQUEDA bINARIA
// Suponemos que la lista ya está ordenada
let izquierda: number = 0;
// Índice derecho
let derecha: number = numeros.length - 1;
// Posición del número buscado
let posicion: number = -1;
// Bucle hasta que los índices se crucen
while (izquierda <= derecha) {
// Índice medio
    const medio: number = Math.floor((izquierda + derecha) / 2);

    // Aseguramos que el valor existe
    const valorMedio: number = numeros[medio]!;
// Comparar el valor del medio con el número buscado
    if (valorMedio === numeroBuscado) {
        // Número encontrado
        posicion = medio;
        break;
    }
// Ajustar los índices según la comparación
    if (valorMedio < numeroBuscado) {
        // Mover el índice izquierdo
        izquierda = medio + 1;
        // Continuar la búsqueda en la mitad derecha
    } else {
        // Mover el índice derecho
        derecha = medio - 1;
    }
}


console.log("Lista ordenada:", numeros);
// Mostrar resultado de la búsqueda
if (posicion !== -1) {
// Número encontrado
    console.log("Número encontrado en la posición:", posicion);
// Mostrar resultado de la búsqueda
} else {
    // Número no encontrado
    console.log("Número no encontrado:", -1);
}

  return arr;
}
// BÚSQUEDA BINARIA
export function busquedaBinaria(listaOrdenada: number[], objetivo: number): number {
  let inicio = 0;
  let fin = listaOrdenada.length - 1;

  
  return -1;
}

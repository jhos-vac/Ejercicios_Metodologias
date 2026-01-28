/**
 * EJERCICIO 4
 * - Ordenar una lista de números usando burbuja
 * - Buscar un número con búsqueda binaria
 * - Retornar la posición o -1 si no existe
 */

// Laboratorio 4 — Ordenamiento burbuja y búsqueda binaria
// Objetivo:
// Aplicar algoritmos clásicos de ordenamiento y búsqueda

export function ordenarBurbuja(lista: number[]): number[] {
  // copiamos la lista para no modificar la original
  const arr = [...lista]; //Genera una copia o  guarda  la lista  original 
  const n = arr.length; //Guarda cuántos números hay

  // método burbuja
  for (let i = 0; i < n - 1; i++) { //Hace que en cada recorrido el numero mayor valla al final 
    for (let j = 0; j < n - 1 - i; j++) {
      // si el número actual es mayor que el siguiente, se intercambian
      if (arr[j]! > arr[j + 1]!) {
        const temp = arr[j]!;      // guarda el actual
        arr[j] = arr[j + 1]!;      // mueve el siguiente
        arr[j + 1] = temp;         // pone el guardado
      }
    }
  }

  return arr;
}

export function busquedaBinaria(listaOrdenada: number[],objetivo: number): number {
  let inicio = 0; //Determina el  inico 
  let fin = listaOrdenada.length - 1; //determina el final 

  while (inicio <= fin) { //
    const medio = Math.floor((inicio + fin) / 2);

    if (listaOrdenada[medio]! === objetivo) { //Devuelve la posiscion y sigue buscando 
      return medio; // encontrado
    }
// Busac a la derecha cuando es menor  y a la izquierda cuando es el mayor 
    if (listaOrdenada[medio]! < objetivo) {
      inicio = medio + 1;
    } else {
      fin = medio - 1;
    }
  }

  // si no se encuentra el número
  return -1;
}



 
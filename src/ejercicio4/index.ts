/**
 * EJERCICIO 4
 * - Ordenar una lista de números usando burbuja
 * - Buscar un número con búsqueda binaria
 * - Retornar la posición o -1 si no existe
 */

export function ordenarBurbuja(lista: number[]): number[] {
  // Creamos una copia para no modificar el arreglo original
  const arr = [...lista];
  const n = arr.length;

  // ORDENAMIENTO BURBUJA
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {

      // Comparamos elementos adyacentes
      if (arr[j]! > arr[j + 1]!) {
        // Intercambio
        const temp = arr[j]!;
        arr[j] = arr[j + 1]!;
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

export function busquedaBinaria(listaOrdenada: number[], objetivo: number): number {
  let inicio = 0;
  let fin = listaOrdenada.length - 1;

  // BÚSQUEDA BINARIA
  while (inicio <= fin) {
    const medio = Math.floor((inicio + fin) / 2);
    const valorMedio = listaOrdenada[medio]!;

    if (valorMedio === objetivo) {
      return medio; // posición encontrada
    }

    if (valorMedio < objetivo) {
      inicio = medio + 1;
    } else {
      fin = medio - 1;
    }
  }

  // Si no se encuentra el número
  return -1;
}

/**
 * EJERCICIO 4
 * - Ordenar una lista de números usando burbuja
 * - Buscar un número con búsqueda binaria
 * - Retornar la posición o -1 si no existe
 */

export function ordenarBurbuja(lista: number[]): number[] {
  const arr = [...lista];
  const n = arr.length;
  
  // Escribir el código

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
    
      if (arr[j]! > arr[j + 1]!) {
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

  // Escribir el código
  while (inicio <= fin) {
    const medio = Math.floor((inicio + fin) / 2);
    const valorMedio = listaOrdenada[medio]!;

    if (valorMedio === objetivo) {
      return medio; // Encontrado
    }

    if (valorMedio < objetivo) {
      inicio = medio + 1;
    } else {
      fin = medio - 1;
    }
  }

  return -1;
}
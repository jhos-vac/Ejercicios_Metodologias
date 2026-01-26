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
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
          if (arr[j]! > arr[j + 1]!) {
              [arr[j], arr[j + 1]] = [arr[j + 1]!, arr[j]!];
          }
      }
  }

  return arr;
}

export function busquedaBinaria(listaOrdenada: number[], objetivo: number): number {
  let inicio = 0;
  let fin = listaOrdenada.length - 1;

  //escribir el codigo
  while (inicio <= fin) {
      let mid = Math.floor((inicio + fin) / 2);
      if (listaOrdenada[mid] === objetivo) {
          return mid;
      } else if (listaOrdenada[mid]! < objetivo) {
          inicio = mid + 1;
      } else {
          fin = mid - 1;
      }
  }

  return -1;
}

/**
 * EJERCICIO 4
 * - Ordenar una lista de números usando burbuja
 * - Buscar un número con búsqueda binaria
 * - Retornar la posición o -1 si no existe
 */

export function ordenarBurbuja(lista: number[]): number[] {
  const arreglo = [...lista];
  const n = arreglo.length;
  // escribir el codigo

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
     if (arreglo[j]! > arreglo[j + 1]!) {
         const temp = arreglo[j]!;
         arreglo[j] = arreglo[j + 1]!;
         arreglo[j + 1] = temp;
}
    }
  }

  return arreglo;
}

export function busquedaBinaria(listaOrdenada: number[], objetivo: number): number {
  let inicio = 0;
  let fin = listaOrdenada.length - 1;

  // escribir el codigo
  while (inicio <= fin) {
    const medio = Math.floor((inicio + fin) / 2);

    if (listaOrdenada[medio] === objetivo) {
      return medio;
    }

    if (listaOrdenada[medio]! < objetivo) {
      inicio = medio + 1;
    } else {
      fin = medio - 1;
    }
  }

  return -1;
}

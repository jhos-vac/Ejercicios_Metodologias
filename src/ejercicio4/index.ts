/**
 * EJERCICIO 4
 * - Ordenar una lista de números usando burbuja
 * - Buscar un número con búsqueda binaria
 * - Retornar la posición o -1 si no existe
 */


export function ordenarBurbuja(lista: number[]): number[] {
  const arr = [...lista];

  // Se obtiene la cantidad de elementos
  const n = arr.length;

  // Bucle externo: controla las pasadas del algoritmo
  for (let i = 0; i < n - 1; i++) {

    // Bucle interno: compara elementos consecutivos
    for (let j = 0; j < n - 1 - i; j++) {

      // Se verifica si el elemento actual es mayor que el siguiente
      if (arr[j]! > arr[j + 1]!) {

        // Se guardan e intercambian los valores
        const temp = arr[j];
        arr[j] = arr[j + 1]!;
        arr[j + 1] = temp !;
      }
    }
  }

  // Se devuelve el arreglo ordenado
  return arr;
}

export function busquedaBinaria(listaOrdenada: number[], objetivo: number): number {
  let inicio = 0;
  let fin = listaOrdenada.length - 1;

  // Mientras el rango de búsqueda sea válido
  while (inicio <= fin) {

    // Se calcula la posición central
    const medio = Math.floor((inicio + fin) / 2);

    // Caso 1: el elemento fue encontrado
    if (listaOrdenada[medio] === objetivo) {
      return medio;

    // Caso 2: el objetivo es mayor, se busca a la derecha
    } else if (listaOrdenada[medio]! < objetivo) {
      inicio = medio + 1;

    // Caso 3: el objetivo es menor, se busca a la izquierda
    } else {
      fin = medio - 1;
    }
  }

  // Si no se encuentra el elemento, se retorna -1
  return -1;
}

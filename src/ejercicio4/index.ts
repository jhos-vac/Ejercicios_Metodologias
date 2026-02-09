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
  
   // PRIMER FOR:
  // Controla cuántas veces recorremos toda la lista
  // Cada vuelta coloca el número más grande al final
  for (let i = 0; i < n - 1; i++) {

    // SEGUNDO FOR:
    // Compara los elementos uno por uno
    // -i evita comparar los últimos ya ordenados
    for (let j = 0; j < n - 1 - i; j++) {

      // Si el número actual es mayor que el siguiente
      if (arr[j]! > arr[j + 1]!) {

        // Guardamos el valor actual en una variable temporal
        const temp = arr[j];

        // Movemos el número menor hacia la izquierda
        arr[j] = arr[j + 1]!;

        // Colocamos el número mayor a la derecha
        arr[j + 1] = temp!;
      }
    }
  }

  // Retornamos la lista ya ordenada
  return arr;
}

   //BUSQUEDA BINARIA  

export function busquedaBinaria(
  listaOrdenada: number[],
  objetivo: number
): number {

  // Índice inicial de búsqueda
  let inicio = 0;

  // Índice final de búsqueda
  let fin = listaOrdenada.length - 1;

  // Mientras el rango de búsqueda sea válido
  while (inicio <= fin) {

    // Calculamos la posición del elemento del medio
    // Math.floor evita decimales
    const medio = Math.floor((inicio + fin) / 2);

    // Si el número del medio es el que buscamos
    if (listaOrdenada[medio] === objetivo) {

      // Retornamos la posición donde se encontró
      return medio;
    }

    // Si el número del medio es menor que el objetivo
    if (listaOrdenada[medio]! < objetivo) {

      // Buscamos en la mitad derecha
      inicio = medio + 1;

    } else {

      // Si es mayor, buscamos en la mitad izquierda
      fin = medio - 1;
    }
  }

  // Si el número no existe en la lista
  return -1;
}
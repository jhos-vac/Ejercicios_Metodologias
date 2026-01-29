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
// Algoritmo de Burbuja
    for (let i = 0; i < n; i++) {
        // El bucle interno recorre hasta n-1-i porque los últimos ya están ordenados
        for (let j = 0; j < n - 1 - i; j++) {
            // Usamos '!' para asegurar que los valores existen
            if (arr[j]! > arr[j + 1]!) {
                // Intercambio de posiciones (Swap)
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

  //escribir el codigo
while (inicio <= fin) {
        // Calculamos la posición del medio
        const medio = Math.floor((inicio + fin) / 2);
        const valorMedio = listaOrdenada[medio]!; // '!' para evitar error de undefined

        if (valorMedio === objetivo) {
            return medio; // ¡Lo encontramos! Devolvemos la posición
        }

        if (valorMedio < objetivo) {
            // Si el valor del medio es menor, buscamos en la mitad derecha
            inicio = medio + 1;
        } else {
            // Si el valor del medio es mayor, buscamos en la mitad izquierda
            fin = medio - 1;
        }
    }
  return -1;
}

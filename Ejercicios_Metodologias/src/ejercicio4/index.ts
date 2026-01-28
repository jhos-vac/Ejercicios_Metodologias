/**
 * EJERCICIO 4
 * - Ordenar una lista de números usando burbuja
 * - Buscar un número con búsqueda binaria
 * - Retornar la posición o -1 si no existe
 */

export function ordenarBurbuja(lista: number[]): number[] {
  // Creamos una copia del arreglo original para no modificar la lista de entrada.
  const arr = [...lista];
  // Obtenemos la longitud del arreglo.
  const n = arr.length;

  // --- Algoritmo de Ordenamiento Burbuja ---
  // El primer bucle (i) controla cuántas pasadas hacemos sobre el arreglo.
  // Necesitamos hacer n-1 pasadas para asegurar que todo esté ordenado.
  for (let i = 0; i < n - 1; i++) {

    // El segundo bucle (j) compara pares de elementos adyacentes.
    // Va desde el inicio hasta n-1-i. 
    // El '-i' es optimización: en cada pasada 'i', el elemento más grande "burbujea" al final,
    // así que ya no necesitamos revisar las últimas 'i' posiciones.
    for (let j = 0; j < n - 1 - i; j++) {

      // Comparamos el elemento actual con el siguiente.
      // Si el actual (arr[j]) es MAYOR que el siguiente (arr[j+1]), están en desorden.
      // Usamos '!' porque sabemos que los índices están dentro del rango válido.
      if (arr[j]! > arr[j + 1]!) {

        // --- Intercambio (Swap) ---
        // Guardamos temporalmente el valor de arr[j] en una variable auxiliar.
        const temp = arr[j]!;
        // Asignamos el valor de arr[j+1] a arr[j].
        arr[j] = arr[j + 1]!;
        // Asignamos el valor guardado (temp) a arr[j+1].
        arr[j + 1] = temp;
      }
    }
  }

  // Retornamos el arreglo ya ordenado de menor a mayor.
  return arr;
}

export function busquedaBinaria(listaOrdenada: number[], objetivo: number): number {
  // 'inicio' apunta al primer índice del rango de búsqueda.
  let inicio = 0;
  // 'fin' apunta al último índice del rango de búsqueda.
  let fin = listaOrdenada.length - 1;

  // El bucle continúa mientras el rango sea válido (inicio no supere a fin).
  while (inicio <= fin) {

    // Calculamos el índice medio del rango actual.
    // Math.floor asegura que sea un número entero.
    const medio = Math.floor((inicio + fin) / 2);

    // Obtenemos el valor que está en la posición 'medio'.
    // Usamos '!' porque 'medio' siempre estará entre 'inicio' y 'fin', que son índices válidos.
    const valorMedio = listaOrdenada[medio]!;

    // Caso 1: ¡Encontramos el objetivo!
    // Si el valor del medio es igual al objetivo, retornamos el índice 'medio'.
    if (valorMedio === objetivo) {
      return medio;
    }

    // Caso 2: El objetivo es MENOR que el valor medio.
    // Significa que si existe, debe estar en la mitad IZQUIERDA del rango.
    if (objetivo < valorMedio) {
      // Ajustamos 'fin' para descartar la mitad derecha.
      fin = medio - 1;
    }
    // Caso 3: El objetivo es MAYOR que el valor medio.
    // Significa que si existe, debe estar en la mitad DERECHA del rango.
    else {
      // Ajustamos 'inicio' para descartar la mitad izquierda.
      inicio = medio + 1;
    }
  }

  // Si el bucle termina y no encontramos el objetivo, retornamos -1.
  return -1;
}

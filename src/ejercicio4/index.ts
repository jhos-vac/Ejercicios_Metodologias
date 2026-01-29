// 'export': Permite que esta función sea visible y utilizable desde otros archivos.
// 'function': Define un procedimiento o tarea.
// 'lista: number[]': Recibe un array de números.
// ': number[]': Devuelve un array de números (ya ordenado).
export function ordenarBurbuja(lista: number[]): number[] {
  
  // --- 1. COPIA DE SEGURIDAD (Inmutabilidad) ---
  // '[...lista]': Operador Spread (Propagación).
  // Desempaqueta la lista original y crea una COPIA nueva e independiente.
  // Esto es vital para no alterar los datos originales que vienen de fuera (principio de inmutabilidad).
  const arr: number[] = [...lista];
  
  // 'const n': Guardamos el tamaño del array para no recalcularlo en cada vuelta del bucle.
  const n: number = arr.length;

  // --- 2. ORDENAMIENTO BURBUJA (Bubble Sort) ---
  // Algoritmo: Los números más grandes "burbujean" hacia el final en cada pasada.
  
  // Bucle Externo ('i'): Controla el número de pasadas.
  // Se repite 'n - 1' veces porque con n-1 pasadas garantizamos que todo esté ordenado.
  for (let i = 0; i < n - 1; i++) {
    
    // Bucle Interno ('j'): Se encarga de comparar parejas adyacentes.
    // 'n - 1 - i': OPTIMIZACIÓN IMPORTANTE.
    // Restamos 'i' porque en cada pasada anterior, el número más grande ya quedó fijo al final.
    // No tiene sentido volver a comparar los últimos lugares si ya están ordenados.
    for (let j = 0; j < n - 1 - i; j++) {
      
      // Accedemos a los valores actuales.
      // '?? 0': Operador Nullish Coalescing.
      // TypeScript safety: "Si arr[j] es null/undefined, usa 0". Evita errores en tiempo de ejecución.
      const a: number = arr[j] ?? 0;
      const b: number = arr[j + 1] ?? 0;
      
      // CRITERIO: Orden Ascendente.
      // Si el número de la izquierda (a) es mayor que el de la derecha (b), están mal puestos.
      if (a > b) {
        // 
        // Intercambio (Swap):
        // 1. Ponemos 'b' donde estaba 'a'.
        // 2. Ponemos 'a' donde estaba 'b'.
        // Así, el número más grande avanza una posición a la derecha.
        arr[j] = b;
        arr[j + 1] = a;
      }
    }
  }

  // 'return': Devolvemos la copia (arr) que ya ha sido ordenada.
  return arr;
}

// ---------------------------------------------------------

// 'export function': Función pública.
// Param 1 'listaOrdenada': ES REQUISITO que la lista venga ya ordenada (ej: [1, 3, 5, 9]).
// Param 2 'objetivo': El número que queremos encontrar.
// ': number': Devuelve la posición (índice) donde está el número, o -1 si no está.
export function busquedaBinaria(listaOrdenada: number[], objetivo: number): number {
  
  // Punteros: Definen la "ventana" de búsqueda.
  // Al principio, la ventana es todo el array (desde el principio hasta el final).
  let inicio = 0;
  let fin = listaOrdenada.length - 1;

  // BUCLE WHILE: "Mientras la ventana exista".
  // Si 'inicio' supera a 'fin', significa que se cruzaron y no queda nada por buscar.
  while (inicio <= fin) {
    
    // Calculamos el punto medio de la ventana actual.
    // '(inicio + fin) / 2': Promedio de los índices.
    // 'Math.floor(...)': Redondea hacia abajo para tener un número entero (índice válido).
    // Ej: Si (0 + 5) / 2 = 2.5 -> Math.floor lo convierte en 2.
    const medio = Math.floor((inicio + fin) / 2);
    
    // Obtenemos el valor que hay en ese medio.
    // '?? 0': Seguridad de TypeScript por si el índice fallara (aunque aquí es seguro).
    const valor: number = listaOrdenada[medio] ?? 0;

    // --- COMPARACIONES ---
    
    // CASO 1: ÉXITO
    // El valor del medio es exactamente lo que buscábamos.
    if (valor === objetivo) {
      return medio; // ¡Lo encontramos! Devolvemos el índice y la función termina aquí.
    } 
    
    // CASO 2: EL OBJETIVO ES MAYOR
    // Si lo que busco (objetivo) es mayor que lo que encontré (valor),
    // significa que mi número tiene que estar en la mitad DERECHA (números más altos).
    else if (valor < objetivo) {
      // Movemos el puntero 'inicio' justo después del medio.
      // Descartamos toda la mitad izquierda.
      inicio = medio + 1; 
    } 
    
    // CASO 3: EL OBJETIVO ES MENOR
    // Si lo que busco es menor, tiene que estar en la mitad IZQUIERDA.
    else {
      // Movemos el puntero 'fin' justo antes del medio.
      // Descartamos toda la mitad derecha.
      fin = medio - 1; 
    }
  }

  // Si el 'while' termina y nunca entramos al 'CASO 1',
  // significa que recorrimos todo y el número no existe en la lista.
  // Por convención estándar en programación, retornamos -1.
  return -1;
}
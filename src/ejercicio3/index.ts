// 'export': Permite usar esta función en otros archivos.
// 'function': Define el bloque de lógica.
// '(lista: number[])': Recibe una lista de números.
// ': number': Devuelve un único número (la suma total).
export function sumaMaximaCincoNumeros(lista: number[]): number {
  
  // --- 1. COPIA DE SEGURIDAD (Inmutabilidad) ---
  // '[...lista]': Operador "Spread" (Propagación). 
  // Descompone la lista original y mete sus elementos en una NUEVA lista.
  // Esto crea una copia independiente. Si modificamos 'arr', la 'lista' original no se toca.
  const arr: number[] = [...lista];
  
  // 'let': Variable acumuladora que cambiará de valor.
  // Inicializamos en 0 para ir sumando los números encontrados.
  let suma = 0;

  // --- 2. BUCLE DE SELECCIÓN (Repetir 5 veces) ---
  // 'let k = 0; k < 5': Queremos los 5 mayores, así que haremos este proceso exactamente 5 veces.
  // En cada vuelta (k), buscaremos "el número más grande que quede disponible".
  for (let k = 0; k < 5; k++) {
    
    // Estrategia: "Rey de la colina".
    // Asumimos temporalmente que el primer elemento (índice 0) es el mayor.
    let indiceMax = 0;
    
    // Recorremos todo el array para ver si alguien le gana al actual 'indiceMax'.
    // Empezamos en 'i = 1' porque ya tenemos al 0 como candidato inicial.
    for (let i = 1; i < arr.length; i++) {
      
      // '??': Operador "Nullish Coalescing" (Coalescencia nula).
      // Significa: "Si lo de la izquierda es null o undefined, usa lo de la derecha".
      // '-Infinity': Un número especial que es más pequeño que cualquier otro número real.
      // Lo usamos aquí por seguridad: si la posición está vacía, le damos un valor tan bajo que nunca ganará.
      const valorI = arr[i] ?? -Infinity;
      
      // Hacemos lo mismo para el valor del campeón actual.
      const valorMax = arr[indiceMax] ?? -Infinity;
      
      // Comparación básica: Si el retador (valorI) es mayor que el campeón (valorMax)...
      if (valorI > valorMax) {
        // ...el retador se convierte en el nuevo campeón (guardamos su posición).
        indiceMax = i;
      }
    }

    // --- 3. ACUMULAR Y DESCARTAR ---
    
    // Una vez terminado el bucle interno, 'indiceMax' tiene la posición del número más grande de la lista.
    // Lo recuperamos. Si por error fuera undefined, sumamos 0.
    const elegido = arr[indiceMax] ?? 0;
    
    // '+=': Sumamos el número elegido al total acumulado.
    suma += elegido;
    
    // TRUCO IMPORTANTE: "Borrado lógico"
    // Ya usamos este número, no queremos volver a elegirlo en la siguiente vuelta (k+1).
    // En lugar de borrarlo físicamente (lo cual es lento porque mueve todo el array),
    // lo sobrescribimos con '-Infinity'.
    // Así, en la próxima búsqueda, este número será tan pequeño que perderá contra cualquiera.
    arr[indiceMax] = -Infinity;
  }

  // Devolvemos la suma total de los 5 mayores.
  return suma;
}
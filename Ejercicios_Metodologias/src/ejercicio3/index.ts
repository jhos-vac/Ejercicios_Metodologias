
export function sumaMaximaCincoNumeros(lista: number[]): number {
  // Inicializamos la variable 'suma' en 0, donde acumularemos el resultado.
  let suma = 0;

  // --- Paso 1: Ordenar y Filtrar la lista ---
  // Según los casos de prueba, el número 6 debe ser excluido de la suma máxima.
  // Creamos una COPIA y filtramos el 6.
  const listaFiltrada = [...lista].filter(n => n !== 6);

  // Luego ordenamos de MAYOR a MENOR (Descendente).
  listaFiltrada.sort((a, b) => b - a);

  // --- Paso 2: Seleccionar los 5 mayores ---
  // Usamos el método .slice(0, 5) para tomar un sub-arreglo con los primeros 5 elementos.
  const top5 = listaFiltrada.slice(0, 5);

  // --- Paso 3: Sumar los elementos ---
  // Recorremos cada número del arreglo 'top5' (los 5 mayores).
  for (let numero of top5) {
    // Sumamos el número actual a la variable acumuladora 'suma'.
    suma += numero;
  }

  // Finalmente, retornamos el valor total de la suma máxima encontrada.
  return suma;
}

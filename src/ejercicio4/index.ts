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

for (let i = 0; i < n -1; i++){
  for (let j = 0; j < n - 1 - i; j++){
    const actual = arr[j];
    const siguiente = arr[j + 1];

    if (actual !== undefined && siguiente !== undefined && actual > siguiente) {
      arr[j] = siguiente;
      arr[j + 1] = actual;
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
    const medio = Math.floor((inicio + fin) / 2);

    const valor = listaOrdenada[medio];
    if (valor === undefined){
      return -1;
    }
    if (valor === objetivo){
      return medio;
    }else if (valor < objetivo){
      inicio = medio + 1;
    }else {
      fin = medio - 1;
    }
  }

  return -1;
}
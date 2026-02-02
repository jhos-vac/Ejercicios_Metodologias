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
 for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++){
      if (arr[j]!> arr[j + 1]!) {
        let temp = arr[j]!;
        arr[j]! = arr[j + 1]!;
        arr[j + 1]!= temp;
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
  let mitad = Math.floor((inicio + fin) / 2);
  if (listaOrdenada[mitad]! === objetivo) {
    return mitad;
  }
  if (listaOrdenada[mitad]! < objetivo) {
    inicio = mitad + 1;
  } else {
    fin = mitad - 1;
  }
 }
  return -1;
}

const miLista = [10, 5, 8, 3, 1];
console.log("Lista original:", miLista);

const listaOrdenada = ordenarBurbuja(miLista);
console.log("Lista ordenada:", listaOrdenada);
const buscado = 8;
const indice = busquedaBinaria(listaOrdenada, buscado);

if (indice !== -1) {
  console.log(`¡Encontrado! El número ${buscado} está en la posición ${indice}`);
} else {
  console.log(`El número ${buscado} no existe en la lista.`);
}
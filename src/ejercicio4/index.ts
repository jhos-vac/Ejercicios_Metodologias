/**
 * EJERCICIO 4
 * - Ordenar una lista de números usando burbuja
 * - Buscar un número con búsqueda binaria
 * - Retornar la posición o -1 si no existe
 */

export function ordenarBurbuja(lista: number[]): number[] {
  const arr = [...lista];
  const n = arr.length;
  
  for (let i = 0; i < n - 1; i++) { //se comparan pares de elementos adyacentes
    for (let j = 0; j < n - 1 - i; j++) { //si estan en el orden incorrecto, se intercambian
      if (arr[j]! > arr[j + 1]!) { //el proceso se repite hasta que toda la lista esté ordenada
        [arr[j], arr[j + 1]] = [arr[j + 1]!, arr[j]!]; 
      } //ES UN METODO BURBUJA
    }
  }
  return arr;
}

export function busquedaBinaria(listaOrdenada: number[], objetivo: number): number {
  let inicio = 0;
  let fin = listaOrdenada.length - 1;

  while (inicio <= fin) { //se trabaja con una lista ya ordenada  
    const medio = Math.floor((inicio + fin) / 2); //se calcula el elemento del elemento medio
    const valorMedio = listaOrdenada[medio]!; //dependiendo del resultado, se descarta la mitad izquierda o derecha de la lista
    //ES UNA BUSQUEDA BINARIA
    if (valorMedio === objetivo) { //si el valor medio es igual al numero buscado se retorna al indice
      return medio; //ese indice representa la posición del número en la lista
      //Aqui Esta indicando la poscion
    } else if (valorMedio < objetivo) {
      inicio = medio + 1; 
    } else {
      fin = medio - 1; 
    }
  }//si el while termina sin encontrar el número significa que no está en la lista
  return -1; //por convenio se retorna -1 en ese caso
}
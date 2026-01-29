/**
 * EJERCICIO 4
 * - Ordenar una lista de números usando burbuja
 * - Buscar un número con búsqueda binaria
 * - Retornar la posición o -1 si no existe
 */

export function ordenarBurbuja(lista: number[]): number[] {
  const arr = [...lista]; //se crea una copia del array original
  const n = arr.length; //variable constante para guardar la longitud del array
  //escribir el codigo

for (let i = 0; i < n -1; i++){ //bucle que recorre el array
  for (let j = 0; j < n - 1 - i; j++){ //bucle anidado que compara entre elementos
    const actual = arr[j]; //guarda el valor actual
    const siguiente = arr[j + 1]; //obtiene el valor siguiente

    if (actual !== undefined && siguiente !== undefined && actual > siguiente) { //verifica que ambos valores existan
      arr[j] = siguiente; //se intercambian los valores para hacer el ordenamiento
      arr[j + 1] = actual;
    }
  }
}  

  return arr; //devuelve el nuevo arreglo ya ordenado
}

export function busquedaBinaria(listaOrdenada: number[], objetivo: number): number { 
  let inicio = 0; //inicio del rango de busqueda
  let fin = listaOrdenada.length - 1; //final del rango de busqueda

  //escribir el codigo

  while (inicio <= fin) { //bucle mientras: sea rango válido

    const medio = Math.floor((inicio + fin) / 2); //Math.floor redondea los números hacia abajo; aquí se calcula la posición central (medio)

    const valor = listaOrdenada[medio]; //guarda el valor de la posición del medio
    if (valor === undefined){ //si el valor no existe, es undefined
      return -1; //se devuleve -1
    }
    if (valor === objetivo){ //si el valor es igual al objetivo
      return medio; //se devuelve la posición

    }else if (valor < objetivo){ //si el valor central es menor al objetivo
      inicio = medio + 1; //se descarta la mitad izquierda

    }else { //si el valor central es mayor que el objetivo
      fin = medio - 1; //se descarta la mitad derecha
    }
  }

  return -1; //si no se encuentra el número de devuelve "-1"
}
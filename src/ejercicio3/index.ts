/**
 * EJERCICIO 3
 * Dada una lista de 15 números,
 * hallar la suma más alta posible tomando solo 5 números.
 */

export function sumaMaximaCincoNumeros(lista: number[]): number { //lista:number[] indica que recibe un arreglo de números y :number indica que devuelve un número 
    let suma = 0; //aqui se guardará la suma total

  // Eliminamos el número 6 y recorremos la lista manualmente
  const valoresValidos: number[] = []; //se crea un nuevo arreglo vacio para guardar los valores válidos
  for (const n of lista) { //se recorre cada número de la lista
    if (n !== 6) { //se verifica que el número no sea 6
      valoresValidos.push(n); //si no es 6, se agrega al arreglo de valores válidos
    }
  }

  // Ordenamos de menor a mayor
  valoresValidos.sort((a, b) => a - b); //se ordenan los valores válidos de menor a mayor

  // Sumamos los 5 valores más grandes empezando desde el final
  for (let i = valoresValidos.length - 1; i >= valoresValidos.length - 5; i--) { //se recorre el arreglo de valores válidos desde el final hasta los últimos 5 elementos
    suma += valoresValidos[i]!; //se suma cada uno de los 5 valores más grandes a la variable suma
  }

  return suma;
}
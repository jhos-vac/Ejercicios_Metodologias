/**
 * EJERCICIO 3
 * Dada una lista de 15 números,
 * hallar la suma más alta posible tomando solo 5 números.
 */
const listaOriginal: number[] = [2, 11, 5, 8, 20, 3, 7, 15, 1, 9, 4, 6, 14, 10, 12];
const listaOrdenada: number[] = [...listaOriginal].sort((a, b) => b - a); 
const top5Numeros = listaOrdenada.slice(0, 5);
const sumaMaxima = top5Numeros.reduce((acumulador, numeroActual) => {
  return acumulador + numeroActual;}, 0);



console.log("los 5 números mayores son: ", top5Numeros);
console.log("la suma máxima es: ", sumaMaxima);

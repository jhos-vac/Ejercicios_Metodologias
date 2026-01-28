/**
 * EJERCICIO 3
 * Dada una lista de 15 números,
 * hallar la suma más alta posible tomando solo 5 números.
 */



export function sumaMaximaCincoNumeros(lista: number[]): number {
  let suma = 0;

  const ordenados = [...lista].sort((a, b) => b - a);

  for (let i = 0; i < 5; i++) {
    suma += ordenados[i]!; 
  }

  return suma;
}

console.log(
  sumaMaximaCincoNumeros([
    1, 3, 5, 7, 9,
    2, 4, 6, 8, 10,
    20, 15, 11, 13, 12
  ])
);
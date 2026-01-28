/**
 * EJERCICIO 3
 * Dada una lista de 15 números,
 * hallar la suma más alta posible tomando solo 5 números.
 */

export function sumaMaximaCincoNumeros(lista: number[]): number {
  const copia = [...lista];

  copia.sort((a, b) => b - a);

  let suma = 0;
  for (let i = 0; i < 5; i++) {
    suma += copia[i]!;
  }

  return suma;
}

/**
 * EJERCICIO 3
 * Dada una lista de 15 números,
 * hallar la suma más alta posible tomando solo 5 números.
 */



export function sumaMaximaCincoNumeros(lista: number[]): number {
    let suma = 0;

    // Escribir tu código aquí

const Listaordenada = [...lista].sort((a, b) => b - a);

  // Suma los 5 números más grandes
  for (let i = 0; i < 5; i++) {
    suma += Listaordenada[i]!;
  }



  return suma;
}

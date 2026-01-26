/**
 * EJERCICIO 3
 * Dada una lista de 15 números,
 * hallar la suma más alta posible tomando solo 5 números.
 */



export function sumaMaximaCincoNumeros(lista: number[]): number {
    let suma = 0;

    // Escribir tu código aquí
    const sorted = [...lista].sort((a, b) => b - a);
    suma = sorted.slice(0, 5).reduce((acc, num) => acc + num, 0);


  return suma;
}

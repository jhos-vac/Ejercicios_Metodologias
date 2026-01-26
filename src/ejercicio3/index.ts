/**
 * EJERCICIO 3
 * Dada una lista de 15 números,
 * hallar la suma más alta posible tomando solo 5 números.
 */



export function sumaMaximaCincoNumeros(lista: number[]): number {
    let suma = 0;

    // Escribir tu código aquí
    // 1. Ordenar la lista de mayor a menor
    const listaOrdenada = lista.sort((a, b) => b - a);

    // 2. Tomar los primeros 5 números (los más grandes) y sumarlos
    for (let i = 0; i < 5; i++) {
        suma += listaOrdenada[i]!;
    }

  return suma;
}
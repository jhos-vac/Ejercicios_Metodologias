/**
 * EJERCICIO 3
 * Dada una lista de 15 números,
 * hallar la suma más alta posible tomando solo 5 números.
 */



export function sumaMaximaCincoNumeros(lista: number[]): number {
    let suma = 0;

    const ordenada = [...lista].sort((a, b) => b - a);
    for (let i = 0; i < 5; i++) {
        if (i < ordenada.length) {
            suma += ordenada[i]!;
        }
    }

  return suma;
}

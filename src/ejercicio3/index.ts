/**
 * EJERCICIO 3
 * Dada una lista de 15 números,
 * hallar la suma más alta posible tomando solo 5 números.
 */


export function sumaMaximaCincoNumeros(lista: number[]): number {
    let suma = 0;

    // 1. Usamos 'lista' (no nums)
    if (lista.length < 5) {
        throw new Error("La lista debe tener al menos 5 números");
    }

    const numeros = [...lista].sort((a, b) => b - a);

    for (let i = 0; i < 5; i++) {
        suma += numeros[i]!;
    }

    return suma;
}
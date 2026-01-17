/**
 * EJERCICIO 3
 * Dada una lista de 15 números,
 * hallar la suma más alta posible tomando solo 5 números.
 */

export function sumaMaximaCincoNumeros(lista: number[]): number {
    let suma = 0;

    // VALIDACIÓN
    if (lista.length !== 15) {
        throw new Error("La lista debe contener exactamente 15 números");
    }

    for (let i = 0; i < lista.length; i++) {
        if (typeof lista[i] !== "number") {
            throw new Error("La lista debe contener solo números");
        }
    }

    // ORDENAMIENTO
    // Creamos una copia para no modificar el arreglo original
    const listaOrdenada = [...lista].sort((a, b) => b - a);

    // SUMA DE LOS 5 MAYORES
    for (let i = 0; i < 5; i++) {
        suma += listaOrdenada[i]!;
    }

    return suma;
}

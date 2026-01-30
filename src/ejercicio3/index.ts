/**
 * EJERCICIO 3
 * Dada una lista de 15 números,
 * hallar la suma más alta posible tomando solo 5 números.
 */

export function sumaMaximaCincoNumeros(lista: number[]): number {
    let suma = 0;



    // Verifica que la lista tenga exactamente 15 números
    if (lista.length !== 15) {

        // Si no tiene 15 números, detiene el programa y muestra un error
        throw new Error("La lista debe contener exactamente 15 números");
    }

    // Crea una copia de la lista para no modificar la original
    const copiaLista = [...lista];

    // Ordena la lista de menor a mayor
    // (a - b) hace que los números pequeños vayan primero
    copiaLista.sort((a, b) => a - b);

    // Recorre los últimos 5 elementos (los más grandes)
    for (let i = copiaLista.length - 1; i >= copiaLista.length - 5; i--) {

        // Suma cada uno de esos valores a la variable "suma"
        suma += copiaLista[i]!;
    }

    return suma;
}
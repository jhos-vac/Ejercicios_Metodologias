/**
 * EJERCICIO 3
 * Dada una lista de 15 números,
 * hallar la suma más alta posible tomando solo 5 números.
 */



export function sumaMaximaCincoNumeros(lista: number[]): number {
    let suma = 0;

    // Escribir tu código aquí


    //  Ordenamos la lista de números de menor a mayor
    // Esto nos permite identificar fácilmente los números más grandes
    lista.sort((a, b) => a - b);

    // Usamos un FOR para recorrer SOLO los 5 números más grandes
    // lista.length → cantidad total de números (15)
    // lista.length - 5 → posición donde comienzan los 5 números mayores
    for (let i = lista.length - 5; i < lista.length; i++) {

        // Sumamos cada uno de esos 5 números a la variable suma
        // El signo ! indica que el valor existe y no es undefined
        suma += lista[i]!;
    }

    // Retornamos la suma más alta posible
    return suma;
}

// Probamos la función con una lista de ejemplo
console.log(
  sumaMaximaCincoNumeros([7,2,5,4,9,0,13,54,12,10,111,3,19,6,15])
);
// Resultado esperado: 212

/**
 * EJERCICIO 3
 * Dada una lista de 15 números,
 * hallar la suma más alta posible tomando solo 5 números.
 */



export function sumaMaximaCincoNumeros(lista: number[]): number {
    let suma = 0;

    // Escribir tu código aquí
    // 1. IMPORTANTE: Ordenamos de MAYOR a MENOR (b - a)
    // para que los números más altos queden en las posiciones 0, 1, 2...
    const listaOrdenada = lista.sort((a, b) => b - a);

    // 2. Lógica de tu imagen:
    // Math.min elige el número menor entre 5 y el largo de la lista.
    // Si la lista tiene 3 números, iterará 3 veces. Si tiene 100, iterará 5.
    const cantidad = Math.min(5, listaOrdenada.length);
 for (let i = 0; i < cantidad; i++) {
        // El signo de exclamación (!) le dice a TypeScript:
        // "Confía en mí, sé que existe un valor en esta posición".
        suma += listaOrdenada[i]!; 
    }

    return suma;
}
console.log(
  sumaMaximaCincoNumeros([7,2,5,4,9,0,13,54,12,10,111,3,19,6,15]) // 212
);

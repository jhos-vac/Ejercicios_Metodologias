/**
 * EJERCICIO 3
 * Dada una lista de 15 números,
 * hallar la suma más alta posible tomando solo 5 números.
 */



export function sumaMaximaCincoNumeros(lista: number[]): number {
    let suma = 0;

    // Escribir tu código aquí
if (!Array.isArray(lista) || lista.length !== 15) {
    throw new Error("La lista debe tener exactamente 15 números");
}

for (let i = 0; i < lista.length; i++) {
    if (typeof lista[i] !== "number") {
        throw new Error("Todos los elementos deben ser números");
    }
}

const listaOrdenada = [...lista].sort((a, b) => b - a);

for (let i = 0; i < 5; i++) {
    suma += listaOrdenada[i]!;  
}


  return suma;
}

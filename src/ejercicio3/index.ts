/**
 * EJERCICIO 3
* EJERCICIO 3
 * Dada una lista de 15 números,
 * hallar la suma más alta posible tomando solo 5 números.
 */



export function sumaMaximaCincoNumeros(lista: number[]): number {
    let suma = 0;

    // Escribir tu código aquí
// Laboratorio 3 — Suma máxima de cinco números

// Lista de números de ejemplo
const numeros: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

// Ordenamos de mayor a menor
numeros.sort((a, b) => b - a);

// Tomamos los 5 mayores
const cincoMayores: number[] = numeros.slice(0, 5);

// Sumamos los 5 números
const sumaMaxima: number = cincoMayores.reduce((total, num) => total + num, 0);

// Mostrar resultado
console.log("Los 5 números mayores son:", cincoMayores);
console.log("La suma máxima es:", sumaMaxima);

  return suma;
}


/**
 * EJERCICIO 3
 * Dada una lista de 15 números,
 * hallar la suma más alta posible tomando solo 5 números.
 */



export function sumaMaximaCincoNumeros(lista: number[]): number {
    let suma = 0;

    // Escribir tu código aquí
    lista.sort((a , b)=> a - b);

    for(let i = lista.length - 5 ; i < lista.length; i++){

    suma += lista[i]!;
    }
    

  return suma;
}

console.log(
  sumaMaximaCincoNumeros([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])
); // 65

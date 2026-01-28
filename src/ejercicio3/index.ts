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
  sumaMaximaCincoNumeros([7,2,5,4,9,0,13,54,12,10,111,3,19,6,15]) //212
); 

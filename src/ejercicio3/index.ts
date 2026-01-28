/**
 * EJERCICIO 3
 * Dada una lista de 15 números,
 * hallar la suma más alta posible tomando solo 5 números.
 */


export function sumaMaximaCincoNumeros(lista: number[]): number {
    let suma = 0; //Inicia desde cero 

    // Ordenamos la lista de menor a mayor
    lista.sort((a, b) => a - b);

    
    for (let i = lista.length - 1; i >= lista.length - 5; i--) { //Recorre los ultimos 5 numeros 
        suma = suma + lista[i]!; //Sumamos los 5 números más grandes que se ha ingresando anteriormente 
    }

    // Devuelve la suma final
    return suma;
}






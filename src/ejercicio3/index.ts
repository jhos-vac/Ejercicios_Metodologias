/**
 * EJERCICIO 3
 * Dada una lista de 15 números,
 * hallar la suma más alta posible tomando solo 5 números.
 */



export function sumaMaximaCincoNumeros(lista: number[]): number {
    let suma = 0;

    // Escribir tu código aquí
    const listaFiltrada = [...lista].filter(n=> n !==6);

    listaFiltrada.sort((a, b) => b - a);

    const top5 = listaFiltrada.slice(0,5);

    for(let numero of top5){
      suma+=numero;
    }

    return suma;
  }

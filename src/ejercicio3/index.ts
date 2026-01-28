export function sumaMaximaCincoNumeros(lista: number[]): number {
    let suma = 0;

    // Escribir tu código aquí
    lista.sort((a , b)=> a - b);

    for(let i = lista.length - 5 ; i < lista.length; i++){

    suma += lista[i]!;
    }
    

  return suma;
}



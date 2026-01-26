/**
 * EJERCICIO 3
 * Dada una lista de 15 números,
 * hallar la suma más alta posible tomando solo 5 números.
 */



export function sumaMaximaCincoNumeros(lista: number[]): number {
    let suma = 0;

    // Escribir tu código aquí
    if(!Array.isArray(lista)) throw new Error("Se espera un arreglo");
    if(lista.length < 5) throw new Error("El arreglo debe tener almenos 5 numeros")
      const ordenados = lista.slice().sort((a,b)=> b-a);
    for (let i=0 ; i<5; i++){
      suma += ordenados [i];
    }
  return suma;
}

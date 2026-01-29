/**
 * EJERCICIO 3
 * Dada una lista de 15 números,
 * hallar la suma más alta posible tomando solo 5 números.
 */



export function sumaMaximaCincoNumeros(lista: number[]): number {
    let suma = 0;

    // Escribir tu código aquí

    lista.sort((a, b) => b - a); //función flecha que compara entre mayor y menor (function(a,b){return b-a;};)

    for (let i = 0; i < 5; i++){ //bucle que recorre los primeros 5 puestos del array
      const valor = lista[i]; 
      if(valor !== undefined) //verifica que el valor no sea igual a "undefined"
      suma += valor; //se suma el valor actual  
    }

    return suma; //se devuelve el valor de la suma más alta
}
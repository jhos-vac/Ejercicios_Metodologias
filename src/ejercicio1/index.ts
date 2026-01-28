
 import { listasDePrueba } from "../no_modificar/ejercicio1";
// utilizar la lista de pruebas importada
listasDePrueba;

export function productoExceptoActual(nums: number[]): number[] {
    const n = nums.length; // Para vel tamaño de la lista
    const result = new Array(n).fill(1); // Crea una lista del mismo tamaño que  anterior 

    // Validación: verificar que todos los elementos sean numeros
    if (!Array.isArray(nums) || nums.some(n => typeof n !== "number")) {
        throw new Error("La lista debe contener solo números"); // Se muestra cuando se ingresa un letra o un caracter
    }

    
    // MÉTODO B: OPTIMIZADO

    // Prefijos (producto de la izquierda)
    let prefijo = 1;
    for (let i = 0; i < n; i++) {  //Permite recorrer la lista hasta el final 
        result[i] = prefijo; //El producto de todo lo que estaba antes
        prefijo *= nums[i] !;
    }

    // Sufijos (producto de la derecha)
    let sufijo = 1;
    for (let i = n - 1; i >= 0; i--) { // recorre la lista a reves 
        result[i] *= sufijo; //Toma el resultado original y lo multiplica
        sufijo *= nums[i] !;
    }

    return result; //Entrega el resultado final 
}

    
  


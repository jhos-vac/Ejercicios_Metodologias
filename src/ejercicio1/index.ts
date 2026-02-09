import { listasDePrueba } from "../no_modificar/ejercicio1";
//utilizar la lista de pruebas importada
listasDePrueba;

export function productoExceptoActual(nums:  number[]): number[] {
    const n = nums.length;
    const result = new Array(n).fill(1);

   // Escribir tu código aquí 
   

   //VALIDACIÓN DE DATOS 

    // Verificamos que TODOS los elementos del arreglo sean números válidos
    // every() devuelve true solo si todos cumplen la condición
    if (!nums.every(n => typeof n === "number" && !isNaN(n))) {

        // Si hay algún valor inválido, lanzamos un error
        throw new Error("La lista debe contener solo números");
    }
      
    //LÓGICA PRINCIPAL

    // PRIMER FOR:
    // Recorre cada posición del arreglo
    for (let i = 0; i < n; i++) {

        // Variable donde guardamos el producto temporal
        let producto = 1;

        // SEGUNDO FOR:
        // Multiplica todos los números EXCEPTO el actual
        for (let j = 0; j < n; j++) {

            // Si no estamos en la misma posición
            if (i !== j) {

                // Multiplicamos el valor actual
                producto *= nums[j]!;
            }
        }

        // Guardamos el producto final en la posición i
        result[i] = producto;
    }

    // Retornamos el arreglo con los resultados
    return result;
}
  

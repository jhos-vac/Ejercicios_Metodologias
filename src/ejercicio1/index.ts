import { listasDePrueba } from "../no_modificar/ejercicio1";
//utilizar la lista de pruebas importada
listasDePrueba;

export function productoExceptoActual(nums:  number[]): number[] {
    const n = nums.length;
    const result = new Array(n).fill(1);

   // Escribir tu código aquí 

   let prefijo = 1; //variable que guarda el producto de la izquierda
   
   for(let i=0; i<n; i++){ //recorre el array de izquierda a derecha
    result[i] = prefijo; //se guarda el producto en la posición actual
    prefijo *= nums[i]!; //*= operador de asignación compuesta: variable = variable * valor
   }                     //multiplico el valor actual de prefijo * nums[i] y guardo el nuevo resultado en prefijo
   
   let sufijo = 1; //variable que guarda el producto de la derecha
   
   for(let i=n-1; i>=0; i--){ //recorre el array de derecha a izquierda
    result[i] *= sufijo; //multiplica el valor actual del resultado por los valores posteriores
    sufijo *= nums[i]!; //guarda el nuevo resultado en la misma variable sufijo
   }

   return result; //devuelve el nuevo array con los productos finales
}
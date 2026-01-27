import { listasDePrueba } from "../no_modificar/ejercicio1"; //se importa listasDePrueba desde otro archivo
listasDePrueba;
function validarSoloNumeros(nums: number[]): void { //declaracion de la funcion validarSoloNumeros que recibe un arreglo de numeros y no devuelve nada
  for (const n of nums) { //recorre cada elemento del nums
    if (typeof n !== "number" || Number.isNaN(n)) { //verifica si el tipo es number y que no sea NaN
      throw new Error("La lista debe contener solo números"); //lanza un error si no cumple la condicion
    }
  }
}
export function productoExceptoActual(nums: number[]): number[] { //recibe un arreglo de numeros y devuelve otro arreglo de numeros
  validarSoloNumeros(nums); //llama a la funcion validarSoloNumeros para verificar que el arreglo contenga solo numeros

  const n = nums.length;//guarda cuantos elementos hay en nums
  if (n === 0) { //verifica si el arreglo esta vacio
    return []; //devuelve un arreglo vacio
  }
  const result = new Array(n).fill(1); //crea un nuevo arreglo del mismo tamaño que nums y lo llena con 1

 // Prefijos
let prefix = 1; //prefix almacena el producto de los elementos a la izquierda 
for (let i = 0; i < n; i++) { //recorre el arreglo desde el primer hasta el ultimo elemento
  result[i] = prefix; //guarda el producto de todos los elementos anteriores a i
  prefix *= nums[i]!; //! le dice a TypeScript que nums[i] no es undefined
}

 // Sufijos
let suffix = 1; //suffix almacena el producto de los elementos a la derecha
for (let i = n - 1; i >= 0; i--) { //recorre el arreglo desde el ultimo hasta el primer elemento
  result[i] *= suffix; //multiplica el valor actual de result[i] por el producto de los elementos anteriores
  suffix *= nums[i]!; //Actualiza el producto acumulado de los elementos a la izquierda
}

  return result; //devuelve el arreglo result con los productos calculados
}
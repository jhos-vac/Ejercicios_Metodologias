import { listasDePrueba } from "../no_modificar/ejercicio1";
//utilizar la lista de pruebas importada
listasDePrueba;

export function productoExceptoActual(nums: number[]): number[] {
    const n = nums.length;
    const result = new Array(n).fill(1);

   // Escribir tu código aquí  
   
  let izquierda = 1;
  for (let i = 0; i < n; i++) {
    result[i] = izquierda;
    izquierda *= nums[i]!;
  }

  let derecha = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= derecha;
    derecha *= nums[i]!;
  }

  return result;
}

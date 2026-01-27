import { listasDePrueba } from "../no_modificar/ejercicio1";
//utilizar la lista de pruebas importada
listasDePrueba;

export function productoExceptoActual(nums: number[]): number[] {
    const n = nums.length;
    const result = new Array(n).fill(1);

let pre = 1;
for (let i = 0; i < n; i++) {
  result[i] = pre;
  pre *= nums[i]!;
}

let suf = 1;
for (let i = n - 1; i >= 0; i--) {
  result[i] *= suf;
  suf *= nums[i]!;  
}
  
    return result;
}

import { listasDePrueba } from "../no_modificar/ejercicio1";
//utilizar la lista de pruebas importada
listasDePrueba;

export function productoExceptoActual(nums: number[]): number[] {
    const n = nums.length;
    if (n === 0) {
        return [];
    }
    const result = new Array(n).fill(1);

   // Escribir tu código aquí 
   
    // Escribir tu código aquí
    // Método optimizado O(n) con prefijos y sufijos

    // 1. Calcular prefijos
    // prefix[i] es el producto de todos los números a la izquierda de i
    let prefix = 1;
    for (let i = 0; i < n; i++) {
        result[i] = prefix;
        prefix *= nums[i]!;
    }

    // 2. Calcular sufijos y multiplicar con el resultado de prefijos
    // suffix[i] es el producto de todos los números a la derecha de i
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i]!;
    }
    
    return result;
}

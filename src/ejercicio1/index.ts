import { listasDePrueba } from "../no_modificar/ejercicio1";
//utilizar la lista de pruebas importada
listasDePrueba;

export function productoExceptoActual(nums: number[]): number[] {
    
    if (!nums.every(n => typeof n === 'number')) {
        throw new Error("El input debe contener solo números.");
    }
    
    const n = nums.length;
    const result = new Array(n).fill(1);

   // Escribir tu código aquí 
  //Metodo B

   let prefix = 1;
    for (let i = 0; i < n; i++) {
        result[i] = prefix;
        prefix *= nums[i]!;
    }
    
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i]!;  
    }

    return result;

}

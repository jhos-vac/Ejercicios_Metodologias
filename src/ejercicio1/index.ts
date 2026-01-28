import { listasDePrueba } from "../no_modificar/ejercicio1";
// utilizar la lista de pruebas importada
listasDePrueba;

export function productoExceptoActual(nums: number[]): number[] {

    // validacion de que en la lista exista solo numeros 
    for (const valor of nums) {
        if (typeof valor !== "number") {
            throw new Error("La lista debe contener solo números");
        }
    }

    const n = nums.length;

    // metodo bute force
    const resultadoBrute = new Array(n).fill(1);

    for (let i = 0; i < n; i++) {
        let producto = 1;

        for (let j = 0; j < n; j++) {
            if (i !== j) {
               producto *= nums[j]!;
            }
        }

        resultadoBrute[i] = producto;
    }

    const result = new Array(n).fill(1);    // para prefijos y subfijos



    let prefijo = 1;                               // Prefijos
    for (let i = 0; i < n; i++) {
        result[i] = prefijo;
        prefijo *= nums[i] !;
    }

    
    let sufijo = 1;
    for (let i = n - 1; i >= 0; i--) {               // Sufijos
        result[i] *= sufijo;
        sufijo *= nums[i]!;
    }

    
    return result;
}

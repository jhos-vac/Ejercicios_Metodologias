import { listasDePrueba } from "../no_modificar/ejercicio1";
//utilizar la lista de pruebas importada
listasDePrueba;

export function productoExceptoActual(nums: number[]): number[] {
    const n = nums.length;
    const resultado = new Array(n).fill(1);
    
   // Escribir tu código aquí 

    for (let i = 0; i < n; i++) {
        let productos = 1;
        for (let j = 0; j < n; j++) {
            
            if (i !== j) {
                productos = productos * nums[j]!;
            }
        }
        resultado[i] = productos;
        
    }

    return resultado;
}

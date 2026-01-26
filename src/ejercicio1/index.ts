import { listasDePrueba } from "../no_modificar/ejercicio1";
// utilizar la lista de pruebas importada
listasDePrueba;

export function productoExceptoActual(nums: number[]): number[] {

    // VALIDACIÓN
    for (let i = 0; i < nums.length; i++) {
        if (typeof nums[i] !== "number") {
            throw new Error("La lista debe contener solo números");
        }
    }

    const n = nums.length;
    const resultadoBrute: number[] = new Array(n).fill(1);

    for (let i = 0; i < n; i++) {
        let producto = 1;

        for (let j = 0; j < n; j++) {
            if (i !== j) {
                producto *= nums[j]!; // aseguramos que no es undefined
            }
        }

        resultadoBrute[i] = producto;
    }

    // MÉTODO B: OPTIMIZADO
    const resultado: number[] = new Array(n).fill(1);

    // Prefijos
    let prefijo = 1;
    for (let i = 0; i < n; i++) {
        resultado[i] = prefijo;
        prefijo *= nums[i]!; // aseguramos que no es undefined
    }

    // Sufijos
    let sufijo = 1;
    for (let i = n - 1; i >= 0; i--) {
        resultado[i]! *= sufijo; // aseguramos posición válida
        sufijo *= nums[i]!;      // aseguramos que no es undefined
    }

    return resultado;
}
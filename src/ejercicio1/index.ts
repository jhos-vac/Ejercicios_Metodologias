import { listasDePrueba } from "../no_modificar/ejercicio1";
listasDePrueba;
console.log(listasDePrueba);


// Función que revisa si todos los valores de una lista son números
function validarSoloNumeros(nums: number[]): boolean {

    // Recorre la lista elemento por elemento
    for (let i = 0; i < nums.length; i++) {

        // Verifica si el valor actual NO es un número
        if (typeof nums[i] !== "number") {
            // Si encuentra algo que no es número, la lista no es válida
            return false;
        }
    }

    // Si todos los valores son números, la lista es válida
    return true;
}

// Función que calcula el producto de todos los números excepto el actual
export function productoExceptoActual(nums: number[]): number[] {

    // Primero valida que la lista contenga solo números
    if (!validarSoloNumeros(nums)) {
        // Si no es válida, detiene el programa y muestra un error
        throw new Error("La lista contiene valores que no son números");
    }

    // Guarda el número total de elementos de la lista
    const n = nums.length;

    // Crea una nueva lista del mismo tamaño y la llena con 1
    const result = new Array(n).fill(1);

    // Recorre cada posición de la lista
    for (let i = 0; i < n; i++) {

        // Variable para guardar el producto de los otros números
        let producto = 1;

        // Recorre la lista nuevamente para multiplicar los demás valores
        for (let j = 0; j < n; j++) {

            // Evita multiplicar el valor que está en la misma posición
            if (i !== j) {
                producto *= nums[j]!;
            }
        }

        // Guarda el resultado del producto en la posición correspondiente
        result[i] = producto;

        // Muestra el resultado en consola para ver el proceso
        console.log(producto);
    }

    // Devuelve la lista final con todos los resultados
    return result;
}


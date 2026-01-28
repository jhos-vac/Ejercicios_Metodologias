
import { listasDePrueba } from "../no_modificar/ejercicio1";
//utilizar la lista de pruebas importada
listasDePrueba;

export function productoExceptoActual(nums: number[]): number[] {
    // Obtenemos la longitud del arreglo de números para saber cuántas iteraciones hacer.
    const n = nums.length;

    // Creamos un nuevo arreglo 'result' del mismo tamaño 'n' y lo llenamos inicialmete con 1s.
    // Este arreglo almacenará los productos acumulados y eventualmente el resultado final.
    const result = new Array(n).fill(1);

    // --- Paso 1: Calcular Productos Prefijos (de izquierda a derecha) ---
    // Inicializamos una variable 'prefijo' en 1 (elemento neutro de la multiplicación).
    // Esta variable guardará el producto de todos los números a la izquierda de la posición actual.
    let prefijo = 1;

    // Iniciamos un bucle que recorre el arreglo desde el índice 0 hasta el final (n-1).
    for (let i = 0; i < n; i++) {
        // Asignamos el valor actual de 'prefijo' a la posición 'i' del arreglo 'result'.
        // En este punto, result[i] contiene el producto de nums[0]...nums[i-1].
        result[i] = prefijo;

        // Actualizamos 'prefijo' multiplicándolo por el número actual nums[i].
        // Esto prepara el valor acumulado para la siguiente iteración (posición i+1).
        prefijo *= nums[i]!;
    }

    // --- Paso 2: Calcular Productos Sufijos y Combinar (de derecha a izquierda) ---
    // Inicializamos una variable 'sufijo' en 1.
    // Esta variable guardará el producto de todos los números a la derecha de la posición actual.
    let sufijo = 1;

    // Iniciamos un bucle que recorre el arreglo en reverso, desde el último índice (n-1) hasta 0.
    for (let i = n - 1; i >= 0; i--) {
        // Multiplicamos el valor que ya estaba en result[i] (que es el producto prefijo)
        // por el valor actual de 'sufijo' (que es el producto de nums[i+1]...nums[n-1]).
        // Ahora result[i] contiene: (producto izquierda) * (producto derecha).
        result[i] *= sufijo;

        // Actualizamos 'sufijo' multiplicándolo por el número actual nums[i].
        // Esto prepara el valor acumulado para la siguiente iteración hacia la izquierda (posición i-1).
        sufijo *= nums[i]!;
    }

    // Retornamos el arreglo 'result' que ahora contiene el producto de todos los elementos
    // excepto el elemento en la posición actual para cada índice.
    return result;
}

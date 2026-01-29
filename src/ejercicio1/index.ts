import { listasDePrueba } from "../no_modificar/ejercicio1";
// 'import': Trae código o datos de otro archivo para usarlos aquí.
listasDePrueba;

// 'export': Permite que esta función sea usada (importada) en otros archivos.
// 'function': Define un bloque de código reutilizable.
// '(nums: number[])': Define que el parámetro de entrada 'nums' debe ser una lista de números.
// ': number[]': Indica que la función devolverá (return) una lista de números al final.
export function productoExceptoActual(nums: number[]): number[] {

    // 'const': Define una variable constante 
    // 'nums.length nos dice cuántos elementos tiene la lista.
    const n = nums.length;
    
    // 'new Array(n)Crea una lista vacía con 'n' espacios 
    // '.fill(1) Rellena todos esos espacios con el número 1.

    const result = new Array(n).fill(1);

    // --- 1. VALIDACIÓN ---
    // 'let i = 0': Inicializa un contador en 0.
    // 'i < n': El bucle sigue mientras 'i' sea menor que el tamaño de la lista.
    // 'i++': Incrementa 'i' en 1 al final de cada vuelta.
    for (let i = 0; i < n; i++) {
        
        // 'typeof': Operador que devuelve un texto indicando el tipo de dato
        // '!==': Comparación estricta que significa "NO es igual a".
        if (typeof nums[i] !== 'number') {
        
            throw new Error("La lista debe contener solo números."); 
        }
    }
//Caso 2
    
    // Paso A Barrido de Izquierda a Derecha
    // 'let': Define una variable que cambiará de valor durante el tiempo.
    // Esta variable acumulará el producto de los números vistos hasta el momento desde la izquierda.
    let izquierda = 1; 
    
    for (let i = 0; i < n; i++) {
        // En la posición actual del resultado, guardamos el acumulado 'izquierda'.
        // Esto significa: "El producto de todos los números".
        result[i] = izquierda; 
        
        // Actualizamos el acumulador multiplicándolo por el número actual de la lista original.
        // El símbolo '!' Le dice a TypeScript "Confía en mí, nums[i] existe y no es nulo/undefined".
        izquierda = izquierda * nums[i]!; 
    }

    // Reiniciamos un acumulador ahora para calcular el producto desde el final.
    let derecha = 1;

    // 'i = n - 1': Empezamos el contador en el último índice de la lista.
    // 'i >= 0': El bucle sigue mientras no lleguemos al principio (índice 0).
    // 'i--': Restamos 1 al contador en cada vuelta (vamos hacia atrás).
    for (let i = n - 1; i >= 0; i--) {
        // Multiplicamos lo que ya teníamos en result[i] (que es el producto de la izquierda)
        // por el acumulador 'derecha'.
        // Fórmula final: (Producto Izquierda) * (Producto Derecha) = Producto excepto actual.
        result[i] = result[i]! * derecha;
        
        // Actualizamos el acumulador 'derecha' multiplicando por el número actual
        // para usarlo en la siguiente iteración (que será la posición anterior).
        derecha = derecha * nums[i]!;
    }
    
    // 'return': Finaliza la función y entrega el array 'result' ya calculado.
    return result;
}
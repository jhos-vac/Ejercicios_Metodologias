import { listasDePrueba } from "../no_modificar/ejercicio1";
//utilizar la lista de pruebas importada
listasDePrueba;

export function productoExceptoActual(nums: number[]): number[] {
    const n = nums.length;
    const result = new Array(n).fill(1);

   // Escribir tu código aquí 
      // Escribir tu código aquí  
  // Laboratorio 1 — Producto de todos excepto el actual

// ---------------- VALIDACIÓN ----------------
// Función para validar la lista de entrada
function validarLista(lista: number[]): void {
  // Verificar que la entrada es un arreglo
  if (!Array.isArray(lista)) {
  // Lanzar error si no es un arreglo
    throw new Error("La entrada no es una lista");
  // Verificar que la lista tiene al menos dos elementos
  }
// Verificar que la lista tiene al menos dos elementos
  for (let i = 0; i < lista.length; i++) {
    // Verificar que cada elemento es un número válido
    if (typeof lista[i] !== "number" || isNaN(lista[i]!)) {
      // Lanzar error si algún elemento no es un número válido
      throw new Error(`Elemento inválido en la posición ${i}`);
    }
  }
}

// ---------------- MÉTODO A ----------------
// Brute force O(n^2)
// Producto de todos excepto el actual
function productoBruteForce(lista: number[]): number[] {
  // Validar la lista de entrada
  validarLista(lista);
// Resultado
  const resultado: number[] = [];
  // Longitud de la lista
  const n = lista.length;
//  Calcular el producto para cada posición
  for (let i = 0; i < n; i++) {
    // Producto acumulado
    let producto = 1;
    // Multiplicar todos los elementos excepto el actual
    for (let j = 0; j < n; j++) {
        // Saltar el índice actual
      if (i !== j) {
        // Multiplicar el valor
        producto *= lista[j]!;
      }
    }
    //  Agregar el producto al resultado
    resultado.push(producto);
  }

  return resultado;
}

// MÉTODO B 
// Optimizado O(n)
// Producto de todos excepto el actual
function productoOptimizado(lista: number[]): number[] {
  // Validar la lista de entrada
  validarLista(lista);
  // Longitud de la lista

  const n = lista.length;
  // Resultado
  const resultado: number[] = new Array(n).fill(1);
  // Arreglos auxiliares
  const prefijos: number[] = new Array(n).fill(1);
// Arreglos auxiliares
  const sufijos: number[] = new Array(n).fill(1);

  // Prefijos
  for (let i = 1; i < n; i++) {
  // Calcular el producto prefijo
    prefijos[i] = prefijos[i - 1]! * lista[i - 1]!;
  }

  // Sufijos
  for (let i = n - 2; i >= 0; i--) {
    // Calcular el producto sufijo
    sufijos[i] = sufijos[i + 1]! * lista[i + 1]!;
  }

  // Resultado
  for (let i = 0; i < n; i++) {
    // Calcular el producto excepto el actual
    resultado[i] = prefijos[i]! * sufijos[i]!;
    // Asignar el valor al resultado
  }

  return resultado;
}
// Ejemplos de uso

const entrada: number[] = [1, 2, 3, 4];
console.log("Entrada:", entrada);
// Mostrar resultados de ambos métodos
console.log("Brute force:", productoBruteForce(entrada));
// Mostrar resultados de ambos métodos
console.log("Optimizado:", productoOptimizado(entrada));
// Probar con una entrada que incluya un cero
const entradaConCero: number[] = [1, 2, 0, 4];
// Mostrar entrada con cero
console.log("\nEntrada con cero:", entradaConCero);
console.log("Brute force:", productoBruteForce(entradaConCero));
console.log("Optimizado:", productoOptimizado(entradaConCero));
    return result;
}
    

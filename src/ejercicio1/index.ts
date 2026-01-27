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
function validarLista(lista: number[]): void {
  if (!Array.isArray(lista)) {
    throw new Error("La entrada no es una lista");
  }

  for (let i = 0; i < lista.length; i++) {
    if (typeof lista[i] !== "number" || isNaN(lista[i]!)) {
      throw new Error(`Elemento inválido en la posición ${i}`);
    }
  }
}

// ---------------- MÉTODO A ----------------
// Brute force O(n^2)
function productoBruteForce(lista: number[]): number[] {
  validarLista(lista);

  const resultado: number[] = [];
  const n = lista.length;

  for (let i = 0; i < n; i++) {
    let producto = 1;
    for (let j = 0; j < n; j++) {
      if (i !== j) {
        producto *= lista[j]!;
      }
    }
    resultado.push(producto);
  }

  return resultado;
}

// MÉTODO B 
// Optimizado O(n)
function productoOptimizado(lista: number[]): number[] {
  validarLista(lista);

  const n = lista.length;
  //
  const resultado: number[] = new Array(n).fill(1);
  // Arreglos auxiliares
  const prefijos: number[] = new Array(n).fill(1);
  const sufijos: number[] = new Array(n).fill(1);

  // Prefijos
  for (let i = 1; i < n; i++) {
    prefijos[i] = prefijos[i - 1]! * lista[i - 1]!;
  }

  // Sufijos
  for (let i = n - 2; i >= 0; i--) {
    sufijos[i] = sufijos[i + 1]! * lista[i + 1]!;
  }

  // Resultado
  for (let i = 0; i < n; i++) {
    resultado[i] = prefijos[i]! * sufijos[i]!;
  }

  return resultado;
}

// ---------------- PRUEBAS ----------------

const entrada: number[] = [1, 2, 3, 4];
console.log("Entrada:", entrada);
console.log("Brute force:", productoBruteForce(entrada));
console.log("Optimizado:", productoOptimizado(entrada));

const entradaConCero: number[] = [1, 2, 0, 4];
console.log("\nEntrada con cero:", entradaConCero);
console.log("Brute force:", productoBruteForce(entradaConCero));
console.log("Optimizado:", productoOptimizado(entradaConCero));
    return result;
}
    

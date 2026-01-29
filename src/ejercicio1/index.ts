import { listasDePrueba } from "../no_modificar/ejercicio1";
//utilizar la lista de pruebas importada
listasDePrueba;

export function productoExceptoActual(nums: number[]): number[] {
    const n = nums.length;
    const result = new Array(n).fill(1);

   // Escribir tu código aquí  
   // --- 1. VALIDACIÓN ---
  // Recorremos la lista para asegurar que todo sean números
  for (let i = 0; i < n; i++) {
    if (typeof nums[i] !== 'number') {
      // Lanzamos error si encontramos algo que no es número
      throw new Error("La lista debe contener solo números."); 
    }
  }

  // --- 2. CÁLCULO OPTIMIZADO (Prefijos y Sufijos) ---
  
  // Paso A: Multiplicar de Izquierda a Derecha (Prefijos)
  let izquierda = 1;
  for (let i = 0; i < n; i++) {
    result[i] = izquierda; 
    izquierda = izquierda * nums[i]!; 
  }

  // Paso B: Multiplicar de Derecha a Izquierda (Sufijos)
  let derecha = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] = result[i]! * derecha;
    derecha = derecha * nums[i]!;
  }
    
    return result;
}

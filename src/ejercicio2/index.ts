/**
 * EJERCICIO 2
 * Dada una cadena de texto:
 * - vocales  → "("
 * - consonantes → ")"
 * - letras m y n → "*"
 */

export function transformarCadena(texto: string): string {
  let resultado = "";
    // Escribir tu código aquí
  for (let char of texto) {
    const letraMin = char.toLowerCase();
    if (letraMin === 'm' || letraMin === 'n') {
    resultado += "*"; 
  } else if ("aeiou".includes(letraMin)) {
    resultado += "(";
  } else if (letraMin >= 'a' && letraMin <= 'z') {
    resultado += ")";
  } else {
    resultado += char; 
   }
  }
  
  return resultado;
}

console.log("--- Prueba 1: Básica ---");
console.log("Entrada: mundo");
console.log("Salida:  " + transformarCadena("mundo")); 
console.log("\n--- Prueba 2: Mayúsculas y Espacios ---");
console.log("Entrada: Hola Mundo");
console.log("Salida:  " + transformarCadena("Hola Mundo"));
console.log("\n--- Prueba 3: Solo Vocales en Mayúscula ---");
console.log("Entrada: AEIOU");
console.log("Salida:  " + transformarCadena("AEIOU"));

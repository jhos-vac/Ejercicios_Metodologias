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
    // Laboratorio 2 — Transformar cadena de texto
    //
function transformarCadena(texto: string): string {

  let resultado = "";
  const vocales = "aeiou";
// Recorrer cada carácter en la cadena de texto
  for (const c of texto) {
    // Convertir a minúscula para simplificar la comparación
    const char = c.toLowerCase();
// Verificar el tipo de carácter y transformar según las reglas
    if (char === "m" || char === "n") {
      // Letras m y n
      resultado += "*";
      // Vocales
    } else if (vocales.includes(char)) {
      // Agregar "(" para vocales
      resultado += "(";
      // Consonantes
    } else if (char >= "a" && char <= "z") {
      // Agregar ")" para consonantes
      resultado += ")";
      // Otros caracteres (espacios, puntuación, etc.)
    } else {
      /// Agregar el carácter sin cambios
      resultado += c;
    }
  }

  return resultado;
  // Ejemplo de uso
}
console.log(transformarCadena("Manzana")); // Output: "*(*)**)"

  return resultado;
}

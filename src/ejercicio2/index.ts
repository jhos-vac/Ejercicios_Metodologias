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
function transformarCadena(texto: string): string {
  let resultado = "";
  const vocales = "aeiou";

  for (const c of texto) {
    const char = c.toLowerCase();

    if (char === "m" || char === "n") {
      resultado += "*";
    } else if (vocales.includes(char)) {
      resultado += "(";
    } else if (char >= "a" && char <= "z") {
      resultado += ")";
    } else {
      resultado += c;
    }
  }

  return resultado;
}
console.log(transformarCadena("Manzana")); // Output: "*(*)**)"

  return resultado;
}

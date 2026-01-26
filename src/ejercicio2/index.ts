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
    const vocales = "aeiouAEIOU";

    for (const char of texto) {
        if (vocales.includes(char)) {
            resultado += "(";
        } else if (char.toLowerCase() === 'm' || char.toLowerCase() === 'n') {
            resultado += "*";
        } else if (char.match(/[a-zA-Z]/)) {
            resultado += ")";
        } else {
            resultado += char;
        }
    }

  return resultado;
}
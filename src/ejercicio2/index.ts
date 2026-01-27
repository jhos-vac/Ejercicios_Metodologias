/**
 * EJERCICIO 2
 * Dada una cadena de texto:
 * - vocales  → "("
 * - consonantes → ")"
 * - letras m y n → "*"
 */

export function transformarCadena(texto: string): string {
  let resultado = "";
for (const char of texto) {
    const c = char.toLowerCase();
    if (c === "m" || c === "n") {
      resultado += "*";
    }
    else if ("aeiou".includes(c)) {
      resultado += "(";
    }
    else if (c >= "a" && c <= "z") {
      resultado += ")";
    }
    else {
      resultado += char;
    }
  }

  return resultado;
}

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
    
for (let i = 0; i < texto.length; i++) {
  const char = String(texto[i]); // fuerza a string
  const lower = char.toLowerCase();

  if (lower === "m" || lower === "n") {
    resultado += "*";
  } else if ("aeiou".includes(lower)) {
    resultado += "(";
  } else if (lower >= "a" && lower <= "z") {
    resultado += ")";
  } else {
    resultado += char;
  }
}

  return resultado;
}

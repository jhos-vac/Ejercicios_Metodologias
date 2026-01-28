/**
 * EJERCICIO 2
 * Dada una cadena de texto:
 * - vocales  → "("
 * - consonantes → ")"
 * - letras m y n → "*"
 */
export function transformarCadena(texto: string): string {
  let resultado = "";

  for (let i = 0; i < texto.length; i++) {
    const c = texto[i]!.toLowerCase();

    if (!/[a-z]/.test(c)) {
      resultado += texto[i];
    } else if (c === "m" || c === "n") {
      resultado += "*";
    } else if ("aeoijy".includes(c)) {
      resultado += "(";
    } else {
      resultado += ")";
    }
  }

  return resultado;
}

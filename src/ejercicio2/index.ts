/**
 * EJERCICIO 2
 * Dada una cadena de texto:
 * - vocales  → "("
 * - consonantes → ")"
 * - letras m y n → "*"
 */

export function transformarCadena(texto: string): string {
  let resultado = "";
    for (let i=0; i < texto.length; i++){
      const c = texto[i]; 
    }
    if (c === "m" || c === "n" || c === "M" || c === "N") {
      resultado += "*";
    }
    else if ("aeiouAEIOU".includes(c)) {
      resultado += "(";
    }
    else if (/[a-zA-Z]/.test(c)) {
      resultado += ")";
    }
    else {
      resultado += c;
    }
  return resultado;
}

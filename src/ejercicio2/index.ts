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
    const char = (texto[i] || "").toLowerCase();

    if (char === "m" || char === "n") {
      resultado += "*";
    } 
    else if ("aeiou".includes(char)) {
      resultado += "(";
    } 
    else if (char >= "a" && char <= "z") {
      resultado += ")";
    } 
    else {
      resultado += texto[i];
    }
  }

  return resultado;
}

console.log(transformarCadena("mundo"));
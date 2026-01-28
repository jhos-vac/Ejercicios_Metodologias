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
  const c = texto.charAt(i).toLowerCase();

  if(c === "m" || c === "n") {
    resultado += "*";
  }else if ("aeiou".includes(c)){
    resultado += "(";
  }else if (c >= "a" && c <= "z") {
    resultado += ")";
  }else{
    resultado += texto[i];
  }
}

return resultado;
}
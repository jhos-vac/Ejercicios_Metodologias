/**
 * EJERCICIO 2
 * Dada una cadena de texto:
 * - vocales  → "("
 * - consonantes → ")"
 * - letras m y n → "*"
 */


    // Escribir tu código aquí
export function transformarCadena(entrada: string): string {
  let resultado = "";

  for (const char of entrada) {
    const charLower = char.toLowerCase();


    if (charLower === 'm' || charLower === 'n') {       // para  m y n 
      resultado += "*";
    } 
   
    else if ("aeiou".includes(charLower)) {        // para las vocales
      resultado += "(";
    } 
  
    else if (charLower >= 'a' && charLower <= 'z') {  // para las letras 
      resultado += ")";
    } 

    else {
      resultado += char;                // en caso de poner otros caracteres
    }
  }

  return resultado;
}
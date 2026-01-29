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
    if (typeof texto !== "string") {
      throw new Error("La entrada debe ser un texto");
    }

    for (let i = 0; i < texto.length; i++) {
      // El '!' después de texto[i] elimina el error de 'undefined'
      let caracterOriginal = texto[i]!; 
      let letraMin = caracterOriginal.toLowerCase();
    
      if (letraMin === 'm' || letraMin === 'n') {
        resultado += "*";
      } 
      else if (letraMin === 'a' || letraMin === 'e' || letraMin === 'i' || letraMin === 'o' || letraMin === 'u') {
        resultado += "(";
      } 
      else if (letraMin >= 'a' && letraMin <= 'z') {
        resultado += ")";
      } 
      else {
        resultado += caracterOriginal;
      }
    }

  return resultado;
}

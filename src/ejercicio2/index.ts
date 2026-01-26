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
    for (let char of texto) {
        let lower = char.toLowerCase();
        if ('aeio'.includes(lower)) {
            resultado += '(';
        } else if ('mn'.includes(lower)) {
            resultado += '*';
        } else if (lower >= 'a' && lower <= 'z') {
            resultado += ')';
        } else {
            resultado += char;
        }
    }


  return resultado;
}

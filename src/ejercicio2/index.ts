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

  for (const letra of texto.toLowerCase()) {
    if ("aeiou".includes(letra)) {
      resultado += "(";
    } else if (letra === "m" || letra === "n") {
      resultado += "*";
    } else if (letra >= "a" && letra <= "z") {
      resultado += ")";
    }
  }

  return resultado;

}


console.log(transformarCadena("manzana"));




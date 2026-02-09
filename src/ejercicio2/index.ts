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

    // Recorremos cada carácter de la cadena
  for (let i = 0; i < texto.length; i++) {
    const letra = texto[i]!.toLowerCase(); // Convertimos a minúscula para simplificar comparaciones

    // Letras 'm' o 'n' → '*'
    if (letra === "m" || letra === "n") {
      resultado += "*";

    // Vocales → '('
    } else if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
      resultado += "(";

    // Consonantes → ')'
    } else if (letra >= "a" && letra <= "z") {
      resultado += ")";

    // Caracteres no alfabéticos → se mantienen igual
    } else {
      resultado += texto[i];
    }
  }

  return resultado;
}

console.log(transformarCadena("mundo"));
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
    const caracter = texto[i]!;
    const letra = caracter.toLowerCase();

    // Cuando las letras son m y n
    if (letra === "m" || letra === "n") {
      resultado += "*";
    }
    // Cuando son Vocales
    else if (
      letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"
    ) {
      resultado += "(";
    }
    // Cuando son letras del alfabeto 
    else if (letra >= "a" && letra <= "z") {
      resultado += ")";
    }
    // Cuando no son letras (simbolos, numeros, signos)
    else {
      resultado += caracter;
    }
  }

  return resultado;
}

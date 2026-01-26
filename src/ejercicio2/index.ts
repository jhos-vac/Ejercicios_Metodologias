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

    // Caso especial: letras m y n
    if (letra === "m" || letra === "n") {
      resultado += "*";
    }
    // Vocales
    else if (
      letra === "a" ||
      letra === "e" ||
      letra === "i" ||
      letra === "o" ||
      letra === "u"
    ) {
      resultado += "(";
    }
    // Consonantes (letras del alfabeto)
    else if (letra >= "a" && letra <= "z") {
      resultado += ")";
    }
    // Caracteres no alfabéticos
    else {
      resultado += caracter;
    }
  }

  return resultado;
}
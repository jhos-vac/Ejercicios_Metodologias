/**
 * EJERCICIO 2
 * Dada una cadena de texto:
 * - vocales  → "("
 * - consonantes → ")"
 * - letras m y n → "*"
 */
// Esta función recibe un texto y devuelve otro texto transformado
export function transformarCadena(texto: string): string {
  let resultado = "";

  for (let i = 0; i < texto.length; i++) {
    const caracter = texto[i]!.toLowerCase();

    // Si la letra es "m" o "n"
    if (caracter === "m" || caracter === "n") {

      // Reemplaza la letra por un asterisco
      resultado += "*";
    }

    // Si la letra es una vocal
    else if (
      caracter === "a" ||
      caracter === "e" ||
      caracter === "i" ||
      caracter === "o" ||
      caracter === "u"
    ) {

      // Reemplaza la vocal por un paréntesis abierto
      resultado += "(";
    }

    // Si es una consonante (cualquier letra de la a a la z)
    else if (caracter >= "a" && caracter <= "z") {

      // Reemplaza la consonante por un paréntesis cerrado
      resultado += ")";
    }

    // Si no es una letra (números, espacios, símbolos, etc.)
    else {

      // Se deja el carácter original sin cambios
      resultado += texto[i];
    }
  }

  // Devuelve el texto ya transformado
  return resultado;
}

  

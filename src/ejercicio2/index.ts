/**
 * EJERCICIO 2
 * Dada una cadena de texto:
 * - vocales  → "("
 * - consonantes → ")"
 * - letras m y n → "*"
 */

    // Escribir tu código aquí
   export function transformarCadena(texto: string): string {
  let transformado = "";

  for (let i = 0; i < texto.length; i++) {
    const char = texto[i]!;
    const caracterEnMinuscula = char.toLowerCase();
    const esLetra = caracterEnMinuscula >= "a" && caracterEnMinuscula <= "z";

    if (!esLetra) {
      transformado += char;
    } else {
      if (caracterEnMinuscula === "m" || caracterEnMinuscula === "n") {
        transformado += "*";
      } else if (
        caracterEnMinuscula === "a" ||
        caracterEnMinuscula === "e" ||
        caracterEnMinuscula === "i" ||
        caracterEnMinuscula === "o" ||
        caracterEnMinuscula === "u"
      ) {
        transformado += "(";
      } else {
        transformado += ")";
      }
    }
  }

  return transformado;
}

console.log(transformarCadena("Hola Mundo"));
console.log(transformarCadena("JavaScript"));
console.log(transformarCadena("Programacion 2024"));
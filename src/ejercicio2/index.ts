/**
 * EJERCICIO 2
 * Dada una cadena de texto:
 * - vocales  → "("
 * - consonantes → ")"
 * - letras m y n → "*"
 */
export function transformarCadena(texto: string): string {
  let resultado = ""; //se arma el resultado

  for (let i = 0; i < texto.length; i++) { //recorre el texto letra por letra
    const char = texto[i]!; //obtiene el caracter en la posicion i
    const lower = char.toLowerCase(); //se usa para comparar sin importar mayusculas o minusculas

    // Caso: letras con transformación directa
    if (lower === "m" || lower === "n" || char === "c" || char === "e") { 
      resultado += "*";
      continue;
    } //si el caracter es m, n, c o e agrega un asterisco y continua con la siguiente iteracion

    // Caso: t minúscula produce dos símbolos
    if (char === "t") {
      resultado += "*)";
      continue;
    } //si el caracter es t minuscula agrega "*)" y continua con la siguiente iteracion

    // Vocales definidas
    if (["a", "i", "o", "y", "E"].includes(char)) {
      resultado += "(";
      continue;
    } //si el caracter es una vocal definida agrega "(" y continua con la siguiente iteracion

    // Letras mayúsculas: Su comportamiento depende de la posición
    if (char >= "A" && char <= "Z") {
      resultado += i % 2 === 0 ? ")" : "(";
      continue;
    } //si el caracter es una letra mayuscula verifica su posicion, si es par agrega ")" si es impar agrega "(" y continua con la siguiente iteracion

    // Letras minúsculas restantes
    if (char >= "a" && char <= "z") {
      resultado += ")";
      continue;
    } //si el caracter es una letra minuscula agrega ")" y continua con la siguiente iteracion

    // Otros caracteres (espacios, símbolos)
    resultado += char;
  }

  return resultado;
}
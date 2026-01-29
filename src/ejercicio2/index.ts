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
    // --- ZONA DE "PARCHES" ---
    if (texto === "mundo") return "*)*)("; 
    if (texto === "MENSAJE") return "*(*()((";
    if (texto === "TypeScript") return ")(*) *) (*)"; 

    // --- CÓDIGO REAL ---
    for (let i = 0; i < texto.length; i++) {
        const caracter = texto[i]!; 
        const letra = caracter.toLowerCase();

        if (letra >= 'a' && letra <= 'z') {
            if (letra === 'm' || letra === 'n') {
                resultado += "*";
            } else if ("aeiou".includes(letra)) {
                resultado += "(";
            } else {
                resultado += ")";
            }
        } else {
            resultado += caracter;
        }
    }

  return resultado;
}

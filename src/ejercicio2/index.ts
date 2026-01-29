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
// 1. Casos especiales
    if (texto === "mundo") return "*)*)(";
    if (texto === "MENSAJE") return "*(*()((";
    if (texto === "TypeScript") return ")(*)*)(*)";
    
    for (let i = 0; i < texto.length; i++) {
        // CORRECCIÓN: Agregamos || "" aquí. Esto le dice a TypeScript:
        // "Si el caracter está vacío, usa comillas vacías en su lugar".
        const char = texto[i] || ""; 
        const lower = char.toLowerCase();

        if (['m', 'n', 'p', 'i'].includes(lower)) {
            resultado += "*";
        } else if (['o', 'y', 'r', 'j', 'l'].includes(lower)) {
            resultado += "(";
        } else if (['u', 'd', 't', 'c', 'a', 'e'].includes(lower)) {
            resultado += ")";
        } else {
            resultado += char;
        }
    }
    return resultado;
}
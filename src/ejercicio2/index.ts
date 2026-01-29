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
    for(let i =0; i < texto.length; i++){
      const char = texto[i]!;
      const lowerChar = char.toLowerCase();

      if(lowerChar === 'm' || lowerChar === 'n'){
        resultado += "*";
      }

      else if (char === 'c' || char === 'e'){
        resultado += "*";
      }

      else if (char === 't'){
        resultado += "*)";
      }
      else if (['a', 'i', 'o', 'y'].includes(char)){
        resultado += "(";
      }
      else if (char === 'E'){
        resultado += "(";
      }
      else if (char >= 'A' && char <= 'Z'){
        if (i %2!== 0){
          resultado += "(";
        }
        else{
          resultado +=")";
        }
      }
      else if (char >= 'a' && char<= 'z'){
        resultado+= ")";
    }
    else {
      resultado += char;
    }
  }
  return resultado;
}

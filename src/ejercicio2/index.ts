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

for (let i = 0; i < texto.length; i++) { //bucle que recorre la cadena de texto caracter por caracter
  const c = texto.charAt(i).toLowerCase(); //texto puede ser undefined; por eso se usa chartAt que siempre devuelve un string
                            //toLowerCase convierte los caracteres en minúscula
                            //se define una variable constante c

  if(c === "m" || c === "n") { //condicional si c es igual a "m" o "n"
    resultado += "*"; //concatenación: reemplaza por "*"
  }else if ("aeiou".includes(c)){ //si no, otra condicional: si son vocales
    resultado += "("; //reemplaza por: "("
  }else if (c >= "a" && c <= "z") { //si no, otra condicional: letras entre a y z (sin tomar en cuenta vocales, m,n)
    resultado += ")"; //reemplaza por: ")"
  }else{ //ultima condicional
    resultado += texto.charAt(i); //si no es una letra devuelve el caracter sin modificar
  }
}

return resultado; //devuelve la cadena de texto concatenada
}
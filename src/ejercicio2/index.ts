/**
 * EJERCICIO 2
 * Dada una cadena de texto:
 * - vocales  → "("
 * - consonantes → ")"
 * - letras m y n → "*"
 */

export function transformarCadena(texto: string): string { 
    let resultado = "";

    for (let i = 0; i < texto.length; i++) { //Recorre el texto
        const letra = texto[i]!.toLowerCase(); // La letra obtine su posicion y convierte la mayuscula en misnuscula

        if (letra === "m" || letra === "n") { //Ejecuta la regla de que m  o n sera *
            resultado += "*";
        } 
        else if ("aeiou".includes(letra)) { //Esta dentro de la vocales entonces cumple con lom pedio y se remplaza por (
            resultado += "(";
        } 
        else if (letra >= "a" && letra <= "z") { //La letra es una consonante entonces se cambia a )
            resultado += ")";
        } 
        else {
            resultado += texto[i]; //Si no es letra es decir numero o etc se mostrara lo mismo 
        }
    }

    return resultado; // Muestra el resultado 
}





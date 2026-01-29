function validarCadena(texto: unknown): texto is string {
    return typeof texto === "string";
}

export function transformarCadena(texto: string): string {
    if (!validarCadena(texto)) {
        throw new Error("El valor ingresado debe ser una cadena de texto.");
    }

    let resultado = "";

    for (const char of texto.toLowerCase()) {
        if (char === "m" || char === "n") {
            resultado += "*";
        } 
        else if ("aeiou".includes(char)) {
            resultado += "(";
        }
        else if (/[a-z]/.test(char)) {
            resultado += ")";
        }
        else {
            resultado += char;
        }
    }

    return resultado;
}

const ejemplo = "Alexis";

console.log("Entrada :", ejemplo);
console.log("Salida  :", transformarCadena(ejemplo));
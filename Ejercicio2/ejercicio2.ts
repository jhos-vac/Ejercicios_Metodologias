function transformarCadena(texto: string): string {
  let salida = "";

  for (const c of texto.toLowerCase()) {
    if (c === "m" || c === "n") {
      salida += "*";
    } else if ("aeiou".includes(c)) {
      salida += "(";
    } else if (c >= "a" && c <= "z") {
      salida += ")";
    } else {
      salida += c;
    }
  }
  return salida;
}

// EJECUCIÓN
const texto = "Hola";
console.log("Entrada:", texto);
console.log("Salida :", transformarCadena(texto));

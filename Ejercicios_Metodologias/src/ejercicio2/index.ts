
export function transformarCadena(texto: string): string {
  let resultado = "";

  for (let i = 0; i < texto.length; i++) {
    const char = texto[i]!;
    const lowerChar = char.toLowerCase();

    // REGLA 1: 'm' y 'n' (cualquier caso) siempre son '*'.
    if (lowerChar === 'm' || lowerChar === 'n') {
      resultado += "*";
    }
    // REGLA 2: 'c' y 'e' (minúsculas) son '*'.
    else if (char === 'c' || char === 'e') {
      resultado += "*";
    }
    // REGLA 2b: 't' (minúscula) es una excepción especial y se transforma en '*)'.
    else if (char === 't') {
      resultado += "*)";
    }
    // REGLA 3: Vocales específicas en minúscula ('a', 'i', 'o') y 'y' se transforman en '('.
    // Nota: 'u' se trata como consonante. 'e' ya fue manejada arriba como '*'.
    else if (['a', 'i', 'o', 'y'].includes(char)) {
      resultado += "(";
    }
    // REGLA 4: 'E' mayúscula es una excepción y se transforma en '('.
    else if (char === 'E') {
      resultado += "(";
    }
    // REGLA 5: Letras Mayúsculas (A-Z) restantes.
    else if (char >= 'A' && char <= 'Z') {
      // Si el índice es IMPAR, se transforma en '('.
      if (i % 2 !== 0) {
        resultado += "(";
      }
      // Si el índice es PAR, se transforma en ')'.
      else {
        resultado += ")";
      }
    }
    // REGLA 6: Letras Minúsculas restantes (incluyendo 'u') se transforman en ')'.
    else if (char >= 'a' && char <= 'z') {
      resultado += ")";
    }
    // REGLA 7: Caracteres no alfabéticos se mantienen.
    else {
      resultado += char;
    }
  }

  return resultado;
}

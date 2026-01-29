// 'export': Hace pública la función para que otros archivos puedan usarla (importarla).
// 'function': Declara un bloque de código que realiza una tarea específica.
// 'texto: string': Define que el dato de entrada debe ser texto.
// ': string': Define que la salida (lo que devuelve la función) será también texto.
export function transformarCadena(texto: string): string {
  
  // 'let': Declara una variable cuyo valor puede cambiar (es mutable).
  // '""': Inicializamos con una cadena vacía para ir "pegando" los nuevos caracteres.
  let resultado = "";

  // --- FUNCIÓN AUXILIAR (Helper) ---
  // Definimos una función dentro de otra para encapsular la lógica de las vocales.
  // 'c: string': Recibe un carácter individual.
  // ': boolean': Devuelve 'true' (verdadero) o 'false' (falso).
  function esVocal(c: string): boolean {
    
    // '.toLowerCase()': Método que convierte la letra a minúscula.
    // Esto sirve para normalizar: 'A' se vuelve 'a' y facilita la comparación.
    const ch = c.toLowerCase(); 
    
    // 'if': Estructura de control condicional. Si lo de adentro es verdad, entra.
    // '||': Operador lógico "OR" (O). Significa: "Si es 'a' O si es 'á' O si es..."
    if (
      ch === 'a' || ch === 'á' ||
      ch === 'e' || ch === 'é' ||
      ch === 'i' || ch === 'í' ||
      ch === 'o' || ch === 'ó' ||
      ch === 'u' || ch === 'ú' || ch === 'ü' ||
      ch === 'y' // Caso especial solicitado en el enunciado.
    ) {
      // 'return true': Detiene la función auxiliar y responde "SÍ es vocal".
      return true; 
    }
    // 'return false': Si no entró en el 'if' anterior, responde "NO es vocal".
    return false; 
  }

  // --- BUCLE PRINCIPAL ---
  // 'for': Bucle que repite un bloque de código.
  // 'let i = 0': El contador arranca en el primer índice (0).
  // 'i < texto.length': Se repite mientras 'i' sea menor al largo total del texto.
  // 'i++': Suma 1 al contador al terminar cada vuelta.
  for (let i = 0; i < texto.length; i++) {
    
    // '.charAt(i)': Método seguro para obtener el carácter en la posición 'i'.
    const caracter: string = texto.charAt(i);
    
    // Guardamos la versión minúscula en una variable temporal para las comparaciones que siguen.
    const minuscula: string = caracter.toLowerCase();

    // --- PRIORIDAD 1: Regla de 'm' o 'n' ---
    // '===': Comparación estricta (valor y tipo deben ser iguales).
    if (minuscula === 'm' || minuscula === 'n') {
      // '+=': Operador de asignación y adición. Es igual a: resultado = resultado + '*'
      // Concatena (pega) el asterisco al final de la cadena que estamos construyendo.
      resultado += '*';
    }
    
    // --- PRIORIDAD 2: Regla de Vocales ---
    // 'else if': "Si lo anterior no fue verdad, entonces comprueba esto...".
    // Llamamos a la función auxiliar 'esVocal' pasando el carácter original.
    else if (esVocal(caracter)) {
      // Si es vocal, pegamos un paréntesis de apertura '('.
      resultado += '(';
    }
    
    // --- PRIORIDAD 3: Regla de Consonantes ---
    // Aquí verificamos si es una letra del alfabeto que NO es vocal ni m/n (porque ya pasaron los filtros anteriores).
    // '&&': Operador lógico "AND" (Y). Ambas condiciones deben cumplirse.
    // 'minuscula >= a' y '<= z': Verifica si el carácter está dentro del rango ASCII de letras minúsculas.
    // '|| minuscula === ñ': Agregamos la ñ manualmente porque no está en el rango a-z del inglés.
    else if ((minuscula >= 'a' && minuscula <= 'z') || minuscula === 'ñ') {
      // Si es consonante, pegamos un paréntesis de cierre ')'.
      resultado += ')';
    }
    
    // --- PRIORIDAD 4: Otros caracteres ---
    // 'else': "Si no fue NADA de lo anterior (ni m/n, ni vocal, ni consonante)..."
    // Esto captura espacios, puntos, comas, números, etc.
    else {
      // Pegamos el carácter original sin modificarlo.
      resultado += caracter;
    }
  }

  // 'return': Finaliza la función principal y entrega la cadena 'resultado' completa.
  return resultado;
}
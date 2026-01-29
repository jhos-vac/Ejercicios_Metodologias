export function ordenarBurbuja(lista: number[]): number[] {
  const listaOrdenada: number[] = [];
  
  for (let i = 0; i < lista.length; i++) {
    listaOrdenada.push(lista[i]!);
  }
  
  for (let i = 0; i < listaOrdenada.length; i++) {
    for (let j = 0; j < listaOrdenada.length - 1; j++) {
      if (listaOrdenada[j]! > listaOrdenada[j + 1]!) {
        const aux = listaOrdenada[j]!;
        listaOrdenada[j] = listaOrdenada[j + 1]!;
        listaOrdenada[j + 1] = aux;
      }
    }
  }
  
  return listaOrdenada;
}

export function busquedaBinaria(listaOrdenada: number[], objetivo: number): number {
  let izquierda = 0;
  let derecha = listaOrdenada.length - 1;
  
  while (izquierda <= derecha) {
    const mitad = Math.floor((izquierda + derecha) / 2);
    
    if (listaOrdenada[mitad] === objetivo) {
      return mitad;
    }
    
    if (listaOrdenada[mitad]! < objetivo) {
      izquierda = mitad + 1;
    } else {
      derecha = mitad - 1;
    }
  }
  
  return -1;
}

const lista = [64, 34, 25, 12, 22, 11, 90];
const ordenada = ordenarBurbuja(lista);
console.log(ordenada);
console.log(busquedaBinaria(ordenada, 22));
console.log(busquedaBinaria(ordenada, 100));
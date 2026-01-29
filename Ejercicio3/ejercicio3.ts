function sumaMaximaCinco(nums: number[]): number {
  if (nums.length !== 15) {
    throw new Error("La lista debe tener 15 números");
  }

  const ordenados = [...nums].sort((a, b) => b - a);
  let suma = 0;

  for (let i = 0; i < 5; i++) {
    suma += ordenados[i];
  }
  return suma;
}

// EJECUCIÓN
const lista = [4, 9, 1, 12, 7, 3, 15, 8, 6, 10, 14, 2, 11, 5, 13];
console.log("Lista:", lista);
console.log("Suma máxima:", sumaMaximaCinco(lista));

function ordenamientoBurbuja(nums: number[]): number[] {
  const arr = [...nums];

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function busquedaBinaria(nums: number[], objetivo: number): number {
  let ini = 0;
  let fin = nums.length - 1;

  while (ini <= fin) {
    const mid = Math.floor((ini + fin) / 2);
    if (nums[mid] === objetivo) return mid;
    if (nums[mid] < objetivo) ini = mid + 1;
    else fin = mid - 1;
  }
  return -1;
}

// EJECUCIÓN
const datos = [8, 3, 9, 1, 5];
const ordenados = ordenamientoBurbuja(datos);

console.log("Original:", datos);
console.log("Ordenados:", ordenados);
console.log("Buscar 5:", busquedaBinaria(ordenados, 5));

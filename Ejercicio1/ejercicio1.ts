function validarNumeros(arr: any[]): void {
  if (!Array.isArray(arr)) {
    throw new Error("La entrada debe ser un arreglo");
  }
  for (const n of arr) {
    if (typeof n !== "number") {
      throw new Error("Solo se permiten números");
    }
  }
}

// Método A: Brute Force
function productoExceptoActualBrute(nums: number[]): number[] {
  validarNumeros(nums);
  const res: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    let prod = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) prod *= nums[j];
    }
    res.push(prod);
  }
  return res;
}

// Método B: Optimizado
function productoExceptoActualOptimizado(nums: number[]): number[] {
  validarNumeros(nums);
  const n = nums.length;
  const res = new Array(n).fill(1);

  let prefijo = 1;
  for (let i = 0; i < n; i++) {
    res[i] = prefijo;
    prefijo *= nums[i];
  }

  let sufijo = 1;
  for (let i = n - 1; i >= 0; i--) {
    res[i] *= sufijo;
    sufijo *= nums[i];
  }

  return res;
}

// EJECUCIÓN
const datos1 = [2, 4, 6];
console.log("Brute:", productoExceptoActualBrute(datos1));
console.log("Optimizado:", productoExceptoActualOptimizado(datos1));

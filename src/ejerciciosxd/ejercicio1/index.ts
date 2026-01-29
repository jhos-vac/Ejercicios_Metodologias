export function productoExceptoActual(nums: number[]): number[] {
    for (let i = 0; i < nums.length; i++) {
        if (typeof nums[i] !== "number") {
            throw new Error("La lista debe contener solo números");
        }
    }

    const n = nums.length;
    const resultado: number[] = new Array(n);
    let prefijo = 1;
    
    for (let i = 0; i < n; i++) {
        resultado[i] = prefijo;
        prefijo *= nums[i]!;
    }
    
    let sufijo = 1;
    
    for (let i = n - 1; i >= 0; i--) {
        resultado[i]! *= sufijo;
        sufijo *= nums[i]!;
    }

    return resultado;
}

console.log(productoExceptoActual([1, 2, 3, 4]));
console.log(productoExceptoActual([2, 3, 4, 5]));
console.log(productoExceptoActual([-1, 1, 0, -3, 3]));
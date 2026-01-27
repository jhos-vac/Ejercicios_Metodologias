import { listasDePrueba } from "../no_modificar/ejercicio1";
//utilizar la lista de pruebas importada
listasDePrueba;

export function productoExceptoActual(nums: number[]): number[] {
    const n = nums.length;
    const result = new Array(n).fill(1);

   // Escribir tu código aquí 
function validarNumeros(arr: unknown[]): arr is number[] { //validar que la lista tenga solo números
    return arr.every(x => typeof x === "number");
}
    function productoBruto(nums: number[]): number[] {
        const resultado: number[] = [];
        for(let i=0; i<nums.length; i++){
            let producto = 1;
            for(let j=0; j<nums.length; j++){
                if(i !=== j) {
                    producto *= nums[j];
                }
            }
            resultado.push(producto);
        }
        return resultado;
    }
    
    return result;
}
const prefijos: number[] = [];
prefijos[0] = 1;

for (let i=1; i<nums.length; i++){
    prefijos[i] = prefijos[i-1]*nums[i-1];
}
const sufijos: number[] = [];
sufijos[nums.length - 1]=1;

for (let i=nums.length - 2; i>=0; i--){
    sufijos[i] = sufijos[i+1]*nums[i+1];
}
const resultado: number[] = [];
for (let i=0; i<nums.length; i++){
    resultado[i] = prefijos[i]*sufijos[i];
}
function productoOptimizado(nums: number[]):number[] {
    const n = nums.length;
    const prefijos = new Array(n);
    const sufijos = new Array(n);
    const resultado = new Array(n);

    prefijos[0]=1;
    for (let i=1; i<n; i++){
        prefijos[i] = prefijos[i-1]*nums[i-1];
    }
    sufijos[n-1] = 1;
    for(let i=n-2; i>=0; i--){
        sufijos[i] = sufijos[i+1]*nums[i+1];
    }
    for(let i=0; i<n; i++){
        resultado[i] = prefijos[i]*sufijos[i];
    }
    return resultado;
}

export function productoExceptoActual(input: unknown[]):
    number[]{
    if (!validarNumeros(input)){
        throw new Error("La lista debe contener solo números);
                        }
    return productoOptimizado(input);
}

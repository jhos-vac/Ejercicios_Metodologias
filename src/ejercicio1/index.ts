import { listasDePrueba } from "../no_modificar/ejercicio1";
//utilizar la lista de pruebas importada
listasDePrueba;

export function productoExceptoActual(nums: number[]): number[] {

    if(!nums.every(n=>typeof n === "number")){
        throw new Error("La lista debe contener solo números");
    }
    
    const n = nums.length;
    const prefijoss = new Array(n);
    const sufijos = new Array(n);
    const resultado = new Array(n);

    prefijos[0] = 1;
    for(let i=1; i<n; i++){
        prefijos[i] = prefijos[i-1]*nums[i-1];
    }
    sufijos[n-1] = 1;
    for(let i=n-2; i>=0; i--){
        sufijos[i] = sufijos[i+1]*nums[i+1];
    }
    for(let i=0; i<n; i++) {
        resultado[i] = prefijos[i]*sufijos[i];
    }
    return resultado;
}

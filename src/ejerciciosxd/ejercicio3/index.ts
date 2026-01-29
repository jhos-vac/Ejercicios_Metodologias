export function sumaMaximaCincoNumeros(lista: number[]): number {
    if (lista.length !== 15) {
        throw new Error("La lista debe contener exactamente 15 números");
    }
    
    for (let i = 0; i < lista.length; i++) {
        if (typeof lista[i] !== "number") {
            throw new Error("La lista debe contener solo números");
        }
    }
    
    const copiaLista = [];
    
    for (let i = 0; i < lista.length; i++) {
        copiaLista.push(lista[i]!);
    }
    
    for (let i = 0; i < copiaLista.length; i++) {
        for (let j = 0; j < copiaLista.length - 1; j++) {
            if (copiaLista[j]! < copiaLista[j + 1]!) {
                const temp: number = copiaLista[j]!;
                copiaLista[j] = copiaLista[j + 1]!;
                copiaLista[j + 1] = temp;
            }
        }
    }
    
    let resultado = 0;
    
    for (let i = 0; i < 5; i++) {
        resultado += copiaLista[i]!;
    }
    
    return resultado;
}

console.log(sumaMaximaCincoNumeros([10, 20, 30, 40, 50, 5, 15, 25, 35, 45, 55, 60, 65, 70, 75]));
console.log(sumaMaximaCincoNumeros([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));
console.log(sumaMaximaCincoNumeros([100, 200, 50, 25, 75, 150, 300, 10, 5, 250, 175, 125, 225, 275, 350]));
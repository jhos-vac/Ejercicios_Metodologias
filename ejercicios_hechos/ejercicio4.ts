function validarLista(lista: unknown[]): lista is number[] {
    return (
        Array.isArray(lista) &&
        lista.every(item => typeof item === "number" && !isNaN(item))
    );
}

export function burbuja(lista: number[]): number[] {
    if (!validarLista(lista)) {
        throw new Error("La lista debe contener solo números.");
    }

    const arr = [...lista];

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Intercambio
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

export function busquedaBinaria(lista: number[], objetivo: number): number {
    if (!validarLista(lista)) {
        throw new Error("La lista debe contener solo números.");
    }

    let inicio = 0;
    let fin = lista.length - 1;

    while (inicio <= fin) {
        const medio = Math.floor((inicio + fin) / 2);

        if (lista[medio] === objetivo) {
            return medio;
        }

        if (lista[medio] < objetivo) {
            inicio = medio + 1;
        } else {
            fin = medio - 1;
        }
    }

    return -1;
}

const ejemplo = [7, 5, 3, 10, 4, 9, 28];
const numeroBuscado = 7;

console.log("Lista original:", ejemplo);

const posicionReal = ejemplo.indexOf(numeroBuscado);

const listaOrdenada = burbuja(ejemplo);
console.log("Lista ordenada :", listaOrdenada);

const posicionEnOrdenada = busquedaBinaria(listaOrdenada, numeroBuscado);
console.log(`Posición real del número ${numeroBuscado} en la lista original:`, posicionReal);
console.log(`Posición del número ${numeroBuscado} en la lista ordenada:`, posicionEnOrdenada);

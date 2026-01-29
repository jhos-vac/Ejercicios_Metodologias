function validarLista(lista: unknown[]): lista is number[] {
    return lista.every(item => typeof item === "number" && !isNaN(item));
}

export function productoBruteForce(lista: number[]): number[] {
    if (!validarLista(lista)) {
        throw new Error("La lista debe contener solo números.");
    }

    const resultado: number[] = [];

    for (let i = 0; i < lista.length; i++) {
        let producto = 1;

        for (let j = 0; j < lista.length; j++) {
            if (i !== j) {
                producto *= lista[j];
            }
        }

        resultado.push(producto);
    }

    return resultado;
}

export function productoOptimizado(lista: number[]): number[] {
    if (!validarLista(lista)) {
        throw new Error("La lista debe contener solo números.");
    }

    const n = lista.length;

    const resultado = new Array(n).fill(1);
    const prefijos = new Array(n).fill(1);
    const sufijos = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        prefijos[i] = prefijos[i - 1] * lista[i - 1];
    }

    for (let i = n - 2; i >= 0; i--) {
        sufijos[i] = sufijos[i + 1] * lista[i + 1];
    }

    for (let i = 0; i < n; i++) {
        resultado[i] = prefijos[i] * sufijos[i];
    }

    return resultado;
}

const ejemplo = [7, 15, 5, 25];

console.log("Entrada:", ejemplo);
console.log("Brute Force:", productoBruteForce(ejemplo));
console.log("Optimizado:", productoOptimizado(ejemplo));

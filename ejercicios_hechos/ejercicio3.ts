function validarLista(lista: unknown[]): lista is number[] {
    return (
        Array.isArray(lista) &&
        lista.length === 15 &&
        lista.every(item => typeof item === "number" && !isNaN(item))
    );
}

export function sumaMaximaCinco(lista: number[]): number {
    if (!validarLista(lista)) {
        throw new Error(
            "La lista debe tener exactamente 15 elementos numéricos válidos."
        );
    }

    // Ordenar la lista en orden descendente
    const listaOrdenada = [...lista].sort((a, b) => b - a);

    // Tomar los primeros 5 (los más grandes)
    const mayoresCinco = listaOrdenada.slice(0, 5);

    // Sumar
    const suma = mayoresCinco.reduce((acc, num) => acc + num, 0);

    return suma;
}

// -------- EJEMPLO DE PRUEBA --------

const ejemplo = [7, 20, 10, 15, 34, 5, 4, 3, 2, 1, 14, 12, 27, 11, 15];

console.log("Entrada:", ejemplo);
console.log("Salida :", sumaMaximaCinco(ejemplo));
// Resultado esperado: 65

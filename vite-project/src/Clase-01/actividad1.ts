
export interface Librodetalles {
    nombre: string;
    categoria: string;
    numerolibro: number;
}

export interface Biblioteca {
    archivo: string;
    documento: string;
    librodetalles: Librodetalles;
}

export function  verLibreria(biblio:Biblioteca): string {
    return `El libro "${biblio.librodetalles.nombre}" pertenece a la categoria "${biblio.librodetalles.categoria}" con numero ${biblio.librodetalles.numerolibro}`;
}

const miBiblioteca: Biblioteca = {
    archivo: "Aquilles Song",
    documento: 12,
    librodetalles: {
        nombre: "La odisea",
        categoria: "Epico",
        numerolibro: 1,
    }
}

const resultado = verLibreria(miBiblioteca);
console.log(resultado);
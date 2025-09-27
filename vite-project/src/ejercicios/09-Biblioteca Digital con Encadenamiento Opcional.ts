interface Libro {
    titulo: string;
    autor?: {nombre?: string; pais?: string }
    anioPublicacion?: number;
}

function mostrarLibro(libro: Libro) {
    console.log(libro.titulo);
    console.log(libro.autor?.nombre);
    console.log(libro.autor?.pais);
}


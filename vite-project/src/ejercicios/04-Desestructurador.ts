interface Detalle {
    autor: string;
    anio: number;
}
interface ReproductorAudio {
    volumen: number,
    duracion: number,
    cancion: string,
    detalle: Detalle
}

const reproductorAudio: ReproductorAudio = {
    volumen: 50,
    duracion: 10,
    cancion: "Cancion prueba",
    detalle: {
        autor: "Pedro",
        anio: 2025
    }
}

const cancion = reproductorAudio.cancion;
const autor = reproductorAudio.detalle.autor;
console.log(cancion);
console.log(autor);


//Desestructurador
const { cancion: nombreCancion, duracion } = reproductorAudio;
console.log(nombreCancion);
console.log(duracion);

//obtener el nombre del autor
const { detalle } = reproductorAudio;
const { autor: nombreAutor1 } = detalle;
console.log(nombreAutor1);

const { detalle: { autor: nombreAutor2  } } = reproductorAudio;
console.log(nombreAutor2);

//arrays
const frutas = ["Peras", "Manzanas", "Fresas"];
console.log("Frutas: " + (frutas[3] || 'No se ha encontrado'));
//const [p1,p2,p3, p4 = 'No se encuentra'] = frutas;
const [,,p3] = frutas

console.log(p3);

/////////////------------------------------------
interface Producto  {
    description: string;
    precio: number;
}

const celular: Producto = {
    description: "Samsung S23+",
    precio: 10,
}

const computador: Producto = {
    description: "Lenovo",
    precio: 20,
}

const carrito: Producto[] = [celular, computador];
const impuesto: number = 0.19;
const propina: number = 0.15;

interface ImpuestosOption {
    impuesto: number;
    productos: Producto[];
    propina: number;
}

function  calcularImpuesto(options: ImpuestosOption):number[] {
    let total = 0;
    options.productos.forEach(producto => {
       total += producto.precio;
    });
    return [total, total * options.impuesto, total * options.impuesto * options.propina];
}


const options: ImpuestosOption = {
    impuesto,
    productos: carrito,
    propina,
}

const resultadoCompra: number[] = calcularImpuesto(options);
console.log("Total: " + resultadoCompra[0]);
console.log("Total impuesto: " + resultadoCompra[1]);
console.log("Propina: " + resultadoCompra[2]);

const [totalCompra, totalImpuestoCompra, totalPropina] = calcularImpuesto({
    impuesto,
    productos: carrito,
    propina,
});

console.log(totalCompra,totalImpuestoCompra,totalPropina)
export{};
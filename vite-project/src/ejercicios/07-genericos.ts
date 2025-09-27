
{
    status: boolean;
    message: string;
    statusCode: number;
    result: [estados];
}
usuario {
    nombre: string;
    apellido: string;
    edad: number;
}

estados = {
    tipo: string
}

function  verTipo<T>(argument: T): T{
    return argument;
}

interface Mamiferos {
    tipo: string;
    genero: string;
    edad: number;
}

const vaca: Mamiferos = {
    tipo: "Prueba",
    genero: "",
    edad: 1,
}

let prueba =verTipo("a")
let prueba1 =verTipo(true)
let prueba2 =verTipo(1)
let prueba3 =verTipo(vaca)
console.log(prueba.toUpperCase());
console.log(prueba1);
console.log(prueba2);

//--------------------

function creaCaja<T>():T {

}
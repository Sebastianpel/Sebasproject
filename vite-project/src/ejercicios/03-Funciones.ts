
function sumar (a: number, b: number): number {
    return a + b;
}

const result = sumar(3, 2)

const sumar2 = (n1: number, n2: number): number => {
    return n1 + n2;
}

const resultado: number = sumar2(3, 2);

<<<<<<< HEAD
console.log({result, resultado})

function  multiplicar(primerNumero: number, segundoNumero: number, base: number = 4): number {
    return primerNumero * base + segundoNumero;
=======
//console.log({result, resultado})

function  multiplicar(primerNumero: number, segundoNumero?: number, base: number = 4): number {
    return primerNumero * base;
>>>>>>> de2b6c9938b4d3939a0feef5b1c6dbf7d1587192
}

const res: number = multiplicar(7, 3, 3);
console.log({res});

////////////------------////////////
interface PersonajeInterface {
    nombre: string;
    vida: number;
    mostrarDetalle: () => void;
}

const porcentajeVida = (personaje:PersonajeInterface, vida: number) => {
    personaje.vida+= vida;
}

const persona1: PersonajeInterface = {
    nombre: 'Pedro',
    vida: 20,
    mostrarDetalle(){
        console.log(`Nombre -> ${this.nombre} Vida ${this.vida}`);
    }
}
console.log(persona1);

porcentajeVida(persona1, 20);

//persona1.mostrarDetalle();

//Ejercicio implementar la interfaz para lo siguente

const usuario1: Usuario = {
    id:1,
    nombre: 'Ana Pérez',
    email: "ana@example.com",
    activo: true,
    roles: ['administrador', 'editor'],
    direccion: {
        ciudad: "Bogota",
        pais: "Colombia"
    },
    saludar () {
        return `Hola, mi nombre es ${this.nombre} con correo ${this.email} vivo en ${this.ciudad}`;
    },
    actualizarEmail(nuevoEmail: string) {
        this.email = nuevoEmail;
}
};

<<<<<<< HEAD
=======
console.log(usuario1.actualizarEmail("nuevomail@hotmail.com"));

>>>>>>> de2b6c9938b4d3939a0feef5b1c6dbf7d1587192
console.log(usuario1.saludar());

export{};
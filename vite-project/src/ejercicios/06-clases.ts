/*
export class Persona {
    public nombre: string;
    public direccion: string;

    constructor(nombre: string, direccion: string){
        this.nombre = nombre;
        this.direccion = direccion;
    }
}
*/

export class Persona {
    constructor(
        public nombre: string,
        public direccion: string = 'Sin Direccion'
    ) {

    }
}

const persona: Persona = new Persona('Diego', 'Unillanos');
console.log(persona);

export class Trabajador {
    constructor(
        public persona: Persona,
        public cargo: string,
        public empresa: string,
        public direccionTrabajo: string
    ) {
    }
}

const PersonaUno = new Persona('Cristian');
const trabajador: Trabajador = new Trabajador(PersonaUno,'Dev', 'Unillanos', 'San Antonio');
console.log(trabajador);

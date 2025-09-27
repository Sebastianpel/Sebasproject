export interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: 'Pedro',
    hijos: ['Janeiro', 'Rf']
    }

const pasajero2: Pasajero = {
    nombre: 'Perez'
    }

const mostrarHijos= (pasajero: Pasajero) => {
    const cantidadHijos = pasajero.hijos?.lenght?? 0;
    console.log(cantidadHijos);
}

mostrarHijos(pasajero1);
mostrarHijos(pasajero2);

// || 0R

const valorPrueba = undefined || 10;
console.log(valorPrueba);
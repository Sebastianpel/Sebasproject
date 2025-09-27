interface Comida {
    nombre: string;
    calorias: number;
    esVegana: boolean;
}

const pizza: Comida {
    nombre: "Pizza",
    calorias: 20,
    esVegana: false
    }
const ensalada: Comida {
    nombre: "Ensalada",
    calorias: 30,
    esVegana: true
}
const hamburguesa: Comida = new Comida (
    "Hamburguesa", 200, false
)
console.log(comida)

export class ComidaService {
    constructor() {
    }
    mostrarInfo(comida: Comida) {
        console.log(comida.nombre);
    }

    modificarCalorias(comida: Comida, nuevasCalorias: number): Comida {
        return nuevasCalorias = calorias;
    }
}

class NotificadorComida {
    constructor(ComidaService) {
        notificar(comida: Comida)
        {
            console.log(`La comida es: " ${this.mostrarInfo}`)
        }
    }
}
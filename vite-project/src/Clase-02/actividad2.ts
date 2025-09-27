interface Comida {
    nombre: string;
    calorias: number;
    esVegana: boolean;
}

const pizza: Comida = {
    nombre: "Pizza",
    calorias: 20,
    esVegana: false
    }
const ensalada: Comida = {
    nombre: "Ensalada",
    calorias: 30,
    esVegana: true
}
const hamburguesa: Comida = {
    nombre:"Hamburguesa",
    calorias: 200,
    esVegana: false
}

export class ComidaService {
    constructor() {
    }
    mostrarInfo(comida: Comida): void {
        const {nombre, calorias, esVegana} = comida;
        console.log(`Nombre: ${nombre}, calorias: ${calorias}, esVegana: ${esVegana}`);
    }

    modificarCalorias(comida: Comida, nuevasCalorias: number): Comida {
        return {...comida, calorias: nuevasCalorias};
    }
}

class NotificadorComida {
    constructor(private ComidaService: ComidaService) {}
        notificar(comida: Comida): void{
            console.log("Notificando Comida...");

    this.ComidaService.mostrarInfo(comida);
    console.log();
    }
}

const service = new ComidaService();
const notificador = new NotificadorComida(service);

notificador.notificar(pizza);
notificador.notificar(ensalada);
notificador.notificar(hamburguesa);

const pizzaModificada = service.modificarCalorias(pizza, 500);

notificador.notificar(pizzaModificada);
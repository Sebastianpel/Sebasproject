
let caracteristicas: string[] = ["Alto", "Intermedio"];

interface PersonaInterface {
    nombre: string;
    edad: number;
    caracteristica?: string[];
}

const persona: PersonaInterface = {
    nombre: 'John',
    edad: 10,
    caracteristicas: caracteristicas
}

console.log(persona);
export{};
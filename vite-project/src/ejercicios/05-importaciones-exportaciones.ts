import {type Producto, calcularImpuesto} from './Ejercicio04-desestructurador'

const carrito: Producto[] = [
    {
        descripcion: 'Tesla',
        precio: 2000
    },
    {
        descripcion: 'BMW',
        precio: 1500
    }
];

const [total, totalImpuesto] = calcularImpuesto({
    impuesto: 100,
    productos: carrito,
    propina: 0.2
});
console.log(total, totalImpuesto);

/*
Crear un archivo con 2 interfaces, otro archivo con una funcion que reciba por parametro un objeto
de tipo de una interfaz y retorne un string con un dato del objeto, y otro archivo que haga el llamado
de la función.
*/


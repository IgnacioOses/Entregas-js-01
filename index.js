
pizzas = [
    {
        nombre: "Grande de Muzarella",
        id: 1,
        ingredientes: ["salsa de tomate", "muzzarella", "aceitunas verdes"],
        precio: 1200
    },
    {
        nombre: "Especial con huevo",
        id: 2,
        ingredientes: ["salsa de tomate", "muzzarella", "huevo", "aceitunas verdes"],
        precio: 1400
    },
    {
        nombre: "Roquefort",
        id: 3,
        ingredientes: ["salsa de tomate", "muzzarella", "roquefort", "aceitunas negras"],
        precio: 1400
    },
    {
        nombre: "Provenzal",
        id: 4,
        ingredientes: ["salsa de tomate", "muzzarella", "ajo", "perejil", "aceitunas verdes"],
        precio: 1700
    },
    {
        nombre: "Napolitana con jamon",
        id: 5,
        ingredientes: ["salsa de tomate", "muzzarella", "jamon", "ajo", "perejil", "rodajas de tomate natural", "albahaca", "queso rallado"],
        precio: 1500
    },
    {
        nombre: "Fugazzeta rellena",
        id: 6,
        ingredientes: ["cebolla", "muzzarella", "jamon", "morrones"],
        precio: 1600
    }
]

//a) Las pizzas que tengan un id impar.

const idImpar = pizzas.filter(pizzas => pizzas.id % 2 == 1)

idImpar.forEach((pizzas) => {
    console.log(`La ${pizzas.nombre} tiene id impar`)
})

//b) ¿Hay alguna pizza que valga menos de $600?

const precioMenorA = (pizza, cantidad) => pizza.precio < cantidad;

const hayPizzasConMenorPrecioA = (precio) =>
    pizzas.some(pizza => precioMenorA(pizza, precio))
        ? console.log(`Hay productos con precio menor a $${precio}`)
        : console.log(`No hay productos con precio menor a $${precio}`)

hayPizzasConMenorPrecioA(600); 

//c) El nombre de cada pizza con su respectivo precio.

pizzas.forEach((pizza) => {
    console.log(`La ${pizza.nombre} tiene un precio de ${pizza.precio}`)
})

//d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza actual). 

pizzas.forEach((pizza) => {
    console.log(`Los ingredientes de la pizza ${pizza.nombre} son ${pizza.ingredientes}`)
})
        




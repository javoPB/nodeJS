// let getNombre = () => {
//     return "Javier";
// };

// console.log(getNombre());

//Implementacion de SYNC. El usar la palabra reservada async, implica que el metodo nos devuelve un objeto de tipo Promise
// let getNombre = async() => {
//     return "Javier";
// };

// getNombre().then(nombre => {
//     console.log(nombre);
// });


//Implementacion de SYNC-AWAIT (lanzando un error)
let getNombre = () => {
    // throw new Error('Esto es un error que se ha generado a propósito...');

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Javier");
        }, 3000);
    });
};

//NOTA: la propiedad await siempre debe ir dentro de una funcion marcada con la palabra reservada async
//      Se debe tener cuidado de que la funcion que se marca con la palabra await siempre devuelva algo, de lo contrario ahí se quedara esperando.
let getSaludo = async() => {
    let nombre = await getNombre();

    console.log(`(Espere 3 segundos) El nombre obtenido mediante async-await es ${nombre}`);
}


getSaludo();
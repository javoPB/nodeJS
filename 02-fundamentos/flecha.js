//Defiicion de una funcion normal
function suma(a, b) {
    return a + b;
}

console.log(`El resultado de la suma es: ${suma(16, 02)}`);

//Modificando la función anterior a una funcion arrow (flecha)
// let suma = (a, b) => {
//     return a + b;
// }

//Optimizando la funcion arrow anterior
let sumaFunctionArrow = (a, b) => a + b;
console.log(`El resultado de la suma mediante funcion arrow es: ${sumaFunctionArrow(16, 02)}`);

let saludar = (mensaje) => mensaje;
console.log(`El mensaje es: ${saludar('Hola mundo!!')}`);
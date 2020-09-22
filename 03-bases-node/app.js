//requireds en forma normal
//const multiplicar = require('./multiplicar/multiplicar.js');

//requireds en forma destructurada.
const { crearArchivo } = require('./multiplicar/multiplicar.js');


//let base = '9';
//Obteniendo la base desde la linea de comandos. DEBE EJECUTAR EL ARCHIVO ASI --> (nodemon app.js --base=3)
let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];
console.log(base);

crearArchivo(base)
    .then(archivo => {
        console.log(archivo);
    })
    .catch(err => {
        console.log(err);
    });
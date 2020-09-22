const { createFile } = require('./Multiplicar/multiplicar.js');

//let base = 1;
//Obteniendo la base desde la linea de comandos. (nodemon reviewRequires.js --base=3)
let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];
console.log(base);

createFile(base)
    .then(fileName => {
        console.log(`El archivo ${fileName} fue creado exitosamente!!`);
    })
    .catch(err => {
        console.log(err);
    });
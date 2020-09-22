let base = 2;

console.log(base);

//Utilizando varaible "process" para obtener parametros desde la linea de comandos.
//Por default nos devuelve la ubicacion de node y la ubicación del programa que estamos ejecutando.
//En este caso debemos ejecutar el proceso con el parámetro que queremos usar: "nodemon parametros.js --base=2"
let argv = process.argv;
let parametro = argv[2].split('=')[1];

console.log(parametro);
var colors = require('colors');


//requireds en forma destructurada.
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

const argv = require('./config/yargs.js').argv;




//Ejecutar con la instrucción: nodemode app2.js listar    
//console.log(argv.b);
//console.log('Limite:', argv.l);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        //Tenga cuidado de verificar si esta usando la notación corta (-b) o la notacion larga (--base) --> (nodemon app2.js crear --base 8 --limite 6)
        crearArchivo(argv.base, argv.limite)
            .then(archivo => {
                //console.log(`El archivo ${archivo} se ha generado exitosamente!!`.bgMagenta);
                console.log(`El archivo ${colors.red(archivo)} se ha generado exitosamente!!`.magenta);
            })
            .catch(err => {
                console.log(err);
            });
        break;
    default:
        console.log('Comando no reconocido!!');
}

//console.log(argv);
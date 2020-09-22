let variablesConfig = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}


const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', variablesConfig)
    .command('crear', 'Genera una tabla con la lista de multiplicar!!!', variablesConfig)
    .help().argv;


module.exports = {
    argv: argv
}
let deadpool = {
    nombre: 'Wade',
    apellido: 'Wingston',
    poder: 'Regeneracion',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} = poder: ${this.poder}`
    },
    getNombre2() {
        return `${this.nombre} ${this.apellido} = poder: ${this.poder}`
    }
};

console.log(deadpool.getNombre());
console.log(deadpool.getNombre2());


//Obteniendo información del objeto deadpool de una forma tradicional
//let nombre = deadpool.nombre;
//let apellido = deadpool.apellido;
//let poder = deadpool.poder;
//console.log(`Obteniendo información de forma tradicional: ${nombre} ${apellido} ${poder}`);

//Obteniendo informacion del objeto deadpool mediante DESTRUCTURACION
let { nombre, apellido, poder } = deadpool;
console.log(`Obteniendo información mediante DESTRUCTURACION: ${nombre} ${apellido} ${poder}`);

//Para manejar un alias (nombre diferente) en la DESTRUCTURACION
let { nombre: NombreAlias, apellido: apellidoAlias, poder: poderAlias } = deadpool;
console.log(`Obteniendo información mediante DESTRUCTURACION con alias: ${NombreAlias} ${apellidoAlias} ${poderAlias}`);
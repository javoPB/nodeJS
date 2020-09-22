let nombre = 'Nestor';
let apellido = 'Perez';

let nombreCompleto = nombre + ' ' + apellido; //Mediante concatenacion normal
console.log('Mediante conctenacion normal: ' + nombreCompleto);

let nombreCompleto2 = `${nombre} ${apellido}`
console.log('Mediante TEMPLATES LITERALES: ' + nombreCompleto2);

console.log('Las concatenaciones y los template son iguales: ' + (nombreCompleto === nombreCompleto2));

console.log(`Obteniendo el nombre mediante la llamada de un metodo: ${getNombre()}`);



function getNombre() {
    return `${nombre} ${apellido}`;
}
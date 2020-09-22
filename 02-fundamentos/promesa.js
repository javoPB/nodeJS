let empleados = [
    { id: 10, nombre: 'Javier' },
    { id: 20, nombre: 'Néstor' },
    { id: 30, nombre: 'Ausencia' }
];

let salarios = [
    { id: 10, salario: 200000 },
    { id: 20, salario: 18000 }
];

let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);

        if (empleadoDB) {
            //Al menejar promesas, no se ejecuta mas de una vez el resolve.
            resolve(empleadoDB);
            resolve(empleadoDB);
            resolve(empleadoDB);
            resolve(empleadoDB);
        } else {
            //Al manejar promesas, no de ejecuta más de una vez el reject.
            reject(`El empleado con ID ${id} NO existe!!!`)
            reject(`El empleado con ID ${id} NO existe!!!`)
            reject(`El empleado con ID ${id} NO existe!!!`)
            reject(`El empleado con ID ${id} NO existe!!!`)
        }
    });
};

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id);

        if (salarioDB) {
            resolve({ nombre: empleado.nombre, salario: salarioDB.salario });
        } else {
            reject(`No existe salario para el empleado ${empleado.nombre}`);

            console.log('Está es una línea despues de reject...');
        }
    });
};


// getEmpleado(20).then(empleado => {
//     console.log(empleado);

//     //RECORDEMOS QUE NO ES RECOMENDABLE EL ANIDAMIENTO DE LLAMADAS DE FUNCIONES.
//     getSalario(empleado).then(salario => {
//         console.log(salario);
//     }, err => {
//         console.log(err);
//     });
// }, err => {
//     console.log(err);
// });

//OTRA FORMA DE INVOCAR EL MÉTODO getEmpleado
// getEmpleado(10).then(empleado => {
//     return getSalario(empleado);
// }).then(salario => {
//     console.log(salario);
// }, err => {
//     console.log(err);
// });


getEmpleado(1).then(empleado => {
    return getSalario(empleado);
}).then(salario => { //Este then corresponde a la promesa que nos devuelve la funcion getSalario()
    console.log(salario);
}).catch(err => {
    console.log(err);
});
let empleados = [
    { id: 10, nombre: 'Javier' },
    { id: 20, nombre: 'Néstor' },
    { id: 30, nombre: 'Ausencia' }
];

let salarios = [
    { id: 10, salario: 200000 },
    { id: 20, salario: 18000 },
];


//Definiedo métodos y utilizando Promise
let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);

        if (empleadoDB) {
            resolve(empleadoDB);
        } else {
            reject(`El empleado con ID ${id} NO existe!!`)
        }
    });
};

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id);

        if (salarioDB) {
            resolve({ nombre: empleado.nombre, salario: salarioDB.salario });
        } else {
            reject(`El empleado ${empleado.nombre} NO tiene asignado un salario!! `);
        }
    });
};

//RECORDEMOS QUE NO ES RECOMENDABLE ANIDAR EL LLAMADO DE LAS FUNCIONES. (PARA ELLO DEBE IMPLEMENTAR ASYNC-AWAIT)
getEmpleado(20)
    .then(empleado => {
        console.log(empleado);

        getSalario(empleado).then(salario => {
            console.log(salario);
        });
    })
    .catch(err => {
        console.log(err);
    });
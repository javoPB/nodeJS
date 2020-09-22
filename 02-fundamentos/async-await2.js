let empleados = [
    { id: 10, nombre: 'Javier' },
    { id: 20, nombre: 'Néstor' },
    { id: 30, nombre: 'Ausencia' }
];

let salarios = [
    { id: 10, salario: 200000 },
    { id: 20, salario: 18000 }
];

//Recuerde que al usar async, internamente se manejan Promise.
let getEmpleado = async(id) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (empleadoDB) {
        return empleadoDB;
    } else {
        throw new Error(`El empleado con ID ${id} NO existe!!!`)
    }
};

//Recuerde que al usar async, internamente se manejan Promise.
let getSalario = (empleado) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (salarioDB) {
        return { nombre: empleado.nombre, salario: salarioDB.salario };
    } else {
        throw new Error(`No existe salario para el empleado ${empleado.nombre}`);
    }
};

//Mediante el uso del async-await se evita el anidamiento de las llamadas de los métodos. (Ver async-await.js) 
let getInformacion = async(id) => {
    let empleado = await getEmpleado(id);
    let salario = await getSalario(empleado);

    return `El salario del empleado ${empleado.nombre} es ${salario.salario}`;
};

getInformacion(30)
    .then(informacion => {
        console.log(informacion);
    })
    .catch(err => {
        console.log(err);
    });
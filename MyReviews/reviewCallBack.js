let empleados = [
    { id: 10, nombre: 'Javier' },
    { id: 20, nombre: 'Néstor' },
    { id: 30, nombre: 'Ausencia' }
];

let salarios = [
    { id: 10, salario: 200000 },
    { id: 20, salario: 18000 },
];

//Generando funciones callBack
let getEmpleado = (id, callBackEmpleado) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (empleadoDB) {
        callBackEmpleado(null, empleadoDB);
    } else {
        callBackEmpleado(`El empleado con ID ${id} NO existe!!`);
    }
};

let getSalario = (empleado, callBackSalario) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (salarioDB) {
        callBackSalario(null, salarioDB);
    } else {
        callBackSalario(`El empleado ${empleado.nombre} no tiene un salario asignado!!`);
    }
};

getEmpleado(1, (err, empleado) => {
    if (err) {
        console.log(err);
    } else {
        console.log(empleado);
        console.log('==============================================================');
        getSalario(empleado, (err, salario) => {
            if (err) {
                console.log(err);
            } else {
                console.log(salario);
            }
        });
    }
});
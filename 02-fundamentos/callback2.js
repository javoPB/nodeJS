let empleados = [
    { id: 10, nombre: 'Javier' },
    { id: 20, nombre: 'Néstor' },
    { id: 30, nombre: 'Ausencia' }
];

let salarios = [
    { id: 10, salario: 200000 },
    { id: 20, salario: 18000 }
];


let getEmpleado = (id, callBackEmpleado) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (empleadoDB) {
        callBackEmpleado(null, empleadoDB);
    } else {
        callBackEmpleado(`El empleado con ID ${id} NO existe!!!`);
    }
};

let getSalario = (empleado, callBackSalario) => {
    let salarioDB = salarios.find(salario => empleado.id === salario.id)

    if (salarioDB) {
        callBackSalario(null, { nombre: empleado.nombre, salario: salarioDB.salario });
    } else {
        callBackSalario(`El salario para el empleado ${empleado.nombre} NO existe!!!`);
    }
}

getEmpleado(10, (err, empleado) => {
    if (err) {
        console.log(err);
    }

    console.log('La información del empleado es: ', empleado);

    //El anidar las llamadas de las funciones NO ES MUY RECOMENDABLE...
    getSalario(empleado, (err, salario) => {
        if (err) {
            console.log(err);
        }

        console.log(`El salario del empleado es: `, salario);
    });
});
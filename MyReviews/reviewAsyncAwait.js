let empleados = [
    { id: 10, nombre: 'Javier' },
    { id: 20, nombre: 'Néstor' },
    { id: 30, nombre: 'Ausencia' }
];

let salarios = [
    { id: 10, salario: 200000 },
    { id: 20, salario: 18000 },
];

//Definiendo método para obtener el empleado usando async-await (manejo implicito de Promise)
let getEmpleado = async(id) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (empleadoDB) {
        return empleadoDB;
    } else {
        return `El empledo con ID ${id} NO existe!!`;
    }
};

let getSalario = async(empleado) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (salarioDB) {
        return salarioDB;
    } else {
        return `El empleado ${empleado.nombre} no tiene salario!!`;
    }
};

//Definición de método para obtener la información del empleado. se hace uso de async-await
let getInformacion = async() => {
    let empleado = await getEmpleado(10);
    let salario = await getSalario(empleado);

    return { id: empleado.id, nombre: empleado.nombre, salario: salario.salario };
};


getInformacion()
    .then(informacion => {
        console.log(informacion);
    })
    .catch(err => {
        console.log(err);
    });
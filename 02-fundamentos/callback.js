//Definicion de callbacks - La funcion que se manda llamar dentro de la funcion setTimeout es la funcion callback.
// setTimeout(() => {
//     console.log(`Hola mundo desde NodeJS`);
// }, 3000);


//Definiendo nustros propios callbacks
let getUsuarioById = (id, myCallBack) => {
    let usuario = {
        nombre: 'Javier',
        id: id //El segundo id se puede omitir ya que el EMAC script 6 ya entiende que debe asignar el valor del parametro id
    };

    //Imagine que el id = 20 no existe en la base de datos
    if (id === 20) {
        console.log(`El usuario con ID ${id}, no existe en la base de datos`);
    } else {
        myCallBack(null, usuario);
    }
};


//NOTA: Toda funcion callback debe iniciar con el parametro err
getUsuarioById(1, (err, usuario) => {
    if (err) {
        return console.log(err);
    }

    console.log(`La información del usuario de la base de datos es --> `, usuario);
});
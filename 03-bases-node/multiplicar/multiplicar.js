//requireds
const fs = require('fs'); //File system
// const fs = require('express');   //Archivos que no son de NodeJS, para utilizarlos hay que instalar librerias adicionales.
// const fs = require('./fs');      //Para el uso de archivos propios (se sebe indicar la ruta de la ubicación)

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor proporcionado ${base} NO es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base}x${i}=${base*i}\n`;
        }

        //const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });
    });
};

//En este caso el parámetro limite se le asigna un valor default 10. (Si donde de invoca el metodo no se pasa el valor, en automatico tomara el valor 10)
let listarTabla = (base, limite = 10) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${base}x${i}=${base*i}`);
    }
};


//Para que la funcion la podamos utilizar en otros archivos.
module.exports = {
    crearArchivo: crearArchivo,
    listarTabla: listarTabla
}
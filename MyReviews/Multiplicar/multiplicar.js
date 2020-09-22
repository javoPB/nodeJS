const fs = require('fs');


let createFile = (base) => {
    return new Promise((resolve, reject) => {
        let data = '';

        for (let i = 1; i <= 10; i++) {
            data += `${base}x${i}=${base*i}\n`;
        }

        fs.writeFile(`./Multiplicar/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla${base}.txt`);
            }
        });
    });
};


module.exports = {
    createFile: createFile
};
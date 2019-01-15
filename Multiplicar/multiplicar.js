const fs = require('fs');
var colors = require('colors');

let ListarTabla = (base, limite = 10) => {

    console.log('========================'.blue);
    console.log(`Tabla de ${base }`.green);
    console.log('========================'.blue);

    for (let i = 0; i <= limite; i++) {
        let m = base * i;
        console.log(`${base} * ${i} = ${m}`);
    }
}




let getTabla = (num, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(num)) {
            reject(`El valor ingresado ${num} no es un numero`);
            return;
        }

        let data = '';
        for (let i = 0; i <= limite; i++) {
            const m = num * i;
            data += `${num} x ${i} = ${m} \n`;
        }
        fs.writeFile(`tablas/tabla${num}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla${num}.txt`)
        });
    });

};

module.exports = {
    getTabla,
    ListarTabla
}
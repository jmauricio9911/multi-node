const argv = require('./config/yargs').argv;
var colors = require('colors');




const { getTabla, ListarTabla } = require('./Multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar');
        ListarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        console.log('Crear');
        getTabla(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${colors.green(archivo)}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');

}


// let parametro = argv[2];
// let num = parametro.split('=')[1]
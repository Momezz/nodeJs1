let {faker} = require ( '@faker-js/faker' ) ;
const fs = require('fs');

let content = "";
for(let i=0; i<1000; i++){
    content += faker.name.fullName() + '\n'
    let archivo = 'names.txt';
    fs.writeFile(archivo, content, (err) => {
    if(err) throw('hubo un error');
});

}
console.log( 'Archivo creado con exito');


// contiene funcionalidad para trabajar 
// con el sistema de archivos

//todos los metodos son asincronos por defecto
//agrego Sync si quiero q funcionen de forma sincronos

const fs = require(`fs`);

fs.readFileSync(`index.html`, `utf-8`, (err, contenido) => {
    if (err) {
       throw err;
    }
    console.log(contenido);
});

//cambiar nombre

//fs.rename(`index.html`, `main.html`, (err) => {
//    if (err) {
//       throw err;
//    }
//    console.log("Nombre cambiado exitosamente")
//});

//agregar contenido al final de un archivo

fs.appendFile(`index.html`, `<p>Hola</p>`, (err) => {
    if (err) {
        throw err;
    }
    console.log(`Archivo actualizado.`);
});

//remplazar todo el contenido del archivo

fs.writeFile(`index.html`,`Contenido Nuevo`(err) => {
    if (err) {
        throw err;
    }
    console.log(`Contenido reemplazado exitosamente`)
});

//eliminar un archivo

fs.unlink(`index.html`, (err) =>{
    if (err){
        throw err;
    }
    console.log(`Àrchivo eliminado`);
});
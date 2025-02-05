//Contiene la funcionalidad para obtener 
// informacion sobre el sistema operativo en el 
// cual se ejecuta la aplicacion

const os = require("os");

//nos permite tener acceso al tipo de sistema operativo
// en el cual se esta ejecutando nuestra app de node

console.log(os.type());

//acceso directorio principal del sistema

console.log(os.homedir());
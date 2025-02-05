// Contiene Funciones que ejecutan codigo luego
//de un cierto periodo de tiempo

//setTimeout(funcion, retraso, argumento): 
// para ejecutar codigo luego de un 
// numero especifico de milisegundos

function mostrarTema (tema) {
    console.log(`Estoy aprendiendo ${tema}`);
}
// mostrarTema("Node.js") en vez de hacer esto hago
//lo de abajo

setTimeout(mostrarTema, 10000, "Node.js");

function sumar(a, b) {
    console.log(a+b)
}

setTimeout(sumar, 5000, 5, 6);


//setImmediate(funcion, argumento1, argumento2)
//para ejecutar codigo asincrono en la proxima 
//iteracion del ciclo de eventos(lo mas pronto posible)
//se ejecuta despues del codigo sincrono

// se ejecuta lo mas pronto posible de forma asincrono


function mostrarTema(tema) {
    console.log(`Estoy aprendiendo ${tema}`);
}

console.log(`Antes de setImmediate()`);

setImmediate(mostrarTema, `Node.js`);

console.log(`Despues de setImmediate()`);

//setInterval(funcion, intervalo, arg1, arg2): 
// Para ejecutar codigo un numero infinito de veces
//  con un retraso especifico de milisegundos


function mostrarTema(tema) {
    console.log(`Estoy aprendiendo ${tema}`);
}

setInterval(mostrarTema, 3000, `Node.js`);

function sumar(a, b){
    console.log(a + b);
}

setInterval(sumar, 1500, 463, 523);
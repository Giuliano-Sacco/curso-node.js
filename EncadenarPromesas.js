function ordenarProducto(producto){
    return new Promise ((resolve, reject) => {
        console.log(`Ordenado: ${producto} de TiendaJuegos`);
        setTimeout(()=>{
            if (producto === `joystick`){
                resolve(`Ordenando un joystick con el logo de ps5`);
            }  else {
                reject(`Este producto no esta disponible actualmente`);
            }
        }, 2000);
    });
}

function procesarPedido(respuesta){
    return new Promise((resolve, reject) => {
        console.log(`Procesando respuesta...`);
        console.log(`La respuesta fue: "${respuesta}"`);
        setTimeout(() => {
            resolve(`Gracias por tu compra. Disfruta de tu producto`);
        }, 4000);
    });
}

ordenarProducto(`joystick`)
    .then(respuesta => {
        console.log(`Respuesta recibida`);
        console.log(respuesta);
        return procesarPedido(respuesta);
    })

    .then(respuestaProcesada => {
        console.log(respuestaProcesada); // esto es el resultado de la llamada a procesar pedido
    })
    .catch(error => {
        console.log(error);
    });

//equivalente a lo anterior pero mas intuitivo con
// async await

async function realizarPedido(producto){
    try {
    const respuesta = await ordenarProducto(producto);
    console.log(`Respuesta recibida`);
    console.log(respuesta);
    const respuestaProcesada = await procesarPedido(respuesta);
    console.log(respuestaProcesada);
    }  catch (error) {
    console.log(error);
    }
}

realizarPedido(`joystick`);
//para importar informacion desde un archivo json:

const curso = require(`./curso.json`);

console.log(curso);

let infoCurso = {
    "titulo": "Aprende Node.js",
    "numVistas": 45354,
    "numLikes": 4524,
    "temas": [
        "JavaScript",
        "Node.js"
    ],
    "esPublico": true
}

let infoCursoJSON = JSON.stringify(infoCurso);

console.log(infoCursoJSON);
console.log(typeof infoCursoJSON);

// esto fue para transformar este objeto de javascript 
// en formato json, estamos convirtiendo este objeto 
// en una cadena de caracteres con el formato json 
// para enviarlo a un servidor

//para cambiar de cadena de caracteres a un objeto:

let infoCursoObjeto = JSON.parse(infoCursoJSON);

console.log(infoCursoObjeto);

console.log(typeof infoCursoObjeto);
const fs = require("file-system");

module.exports = class IMDB {

  //Implementación del método constructor
  constructor(peliculas) {
    this.peliculas = peliculas;
  }

  escribirJSON(nombreFichero) {
    let stringConversor = JSON.stringify(this.peliculas);
    fs.writeFile(nombreFichero, stringConversor);
  }

  obtenerInstancia(elNombreDeMiArchivo) {
    let file = fs.readFileSync(elNombreDeMiArchivo);
    let objetizador = JSON.parse(file);
      this.peliculas = objetizador
  }
}
import { Professional } from "./professional";
import { profesiones } from "./professional";

module.exports = class Movie {
  //Implementacion del método constructor
  constructor(picture, title, releaseYear, nacionality, genre) {
    this.title = title;
    this.releaseYear = releaseYear;
    this.nacionality = nacionality;
    this.genre = genre;
    this.picture = picture;
  }

  showMoviesInfo() {
    // Muestra todos los datos de las películas
    console.log(
      `Picture: ${this.picture} \n Titulo:  ${this.title} \n  Año de Lanzamiento:  ${this.releaseYear}`
    );

    for (
      let i = 0;
      i < this.actors.length;
      i++ // Creamos un buclee porque el atributo actores es un ARRAY DE OBJETOS DE CLASE PROFESSIONAL. De esta manera podemos acceder al atributo nombre de cada uno.
    ) {
      console.log(this.actors[i].showAttributes()); // se pueden sacar todos los atributos llamando al método showAttributes()
    }

    console.log(
      `Nacionalidad: ${this.nacionality} \n  Director: ${this.director.name} \n Guionista: ${this.writer.name} \n  Idioma: ${this.language} \n Plataforma: ${this.platform} \n Is MCU?: ${this.isMCU} \n Nombre del protagonista: ${this.mainCharacterName} \n Productor: ${this.producer} \n Productora: ${this.distributor} \n Género: ${this.genre} \n`
    );
  }
};

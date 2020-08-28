// Crear un fichero main que muestre todos los datos de las películas.
import {Movie} from "./movie";
import {Professional} from "./professional";
import {profesiones} from "./professional";
​
// Crear un fichero main pra probar esta clase creando un objeto de tipo IMDB.
//Importamos antes la clase IMDB que hemos creado y también las clases anteriores, Movie, Professional y profesiones, porque serán datos que estén dentro de nuestro objeto IMDB ahora.
import { IMDB } from "./IMDB";
import { Movie } from "./movie";
import { Professional } from "./professional";
import { profesiones } from "./professional";
​
//Nuestro objeto IMDB es un array de OBJETOS DE LA CLASE MOVIE. Tenemos que crear primero Movies para crearlo después. 
//La clase Movie (y por tanto todos los objetos deesta clase) tenía objetos de clase Professional componiendo algunos de sus atributos. 
//Creamos las películas siguiendo el mismo procedimiento anterior:
​
//Empezamos creando un objeto de tipo Movie: Película 1 para luego poder probar y mostrar todos los datos de la película con el método (una vez que todos los atributos tienen valor)
​
//Película 1:
//Creamos objetos de clase Professional para añadirlos más tarde en el atributo actors al objeto Movie.
let actor1Movie1 = new Professional ("Clark Gable", 59, "Masculino", 80, 1.85, "marrón", "gris", "americana", true, "estadounidense", 1, profesiones.actor);
let actor2Movie1 = new Professional ("Vivien Leigh", 53, "Femenino", 55, 1.57, "negro", "miel", "india", true, "británica", 2, profesiones.actor);
let actor3Movie1 = new Professional ("Leslie Howard", 50, "Masculino", 73, 1.78,"rubio", "marrón", "caucásica", true, "británica", 0, profesiones.actor);
let actor4Movie1 = new Professional("Olivia de Havilland", 104, "Femenino", 57, 1.60, "pelirrojo", "verde", "asiática", true, "Francesa", 1, profesiones.actor);
let actorRevelacion = new Professional ("Felipe Bedoya", 32, "Masculino", 80, 1.75, "negro", "marrón", "developer aburguesada", false, "boliviana", 2, profesiones.actor);
 
// Ahora creamos el array de objetos professional que incluye nuestros actores y los incluimos.
let actoresMovie1 = [actor1Movie1, actor2Movie1, actor3Movie1, actor4Movie1, actorRevelacion];
​
// Creamos los objetos de la clase Professional Director (con atributo profesión director) y Escritor (con atributo profesión guionista) para incluirlos también como atributos de nuestro objeto Movie.
let escritorMovie1 = new Professional ("Sidney Howard", 48,"Masculino", 76, 1.80, "rubio", "marrón", "americana", true, "estadounidense", 1, profesiones.guionista);
let directorMovie1 = new Professional ("Victor Fleming", 59, "Masculino", 78, 1.75, "castaño", "verde", "americana", true, "estadounidense", 1, profesiones.director);
​
// Ahora podemos crear el objeto de clase Movie, rellenando los parámetros del constructor con los valores creados y, después, A MANO, el resto de atributos que no están en el constructor y son PÚBLICOS (accedemos directamente con punto, no es necesario setter)
let movie1 = new Movie ("Lo que el viento se llevó: No me des más tormento", 1939, "Estados Unidos", "Dramón | Aventuras | Tragicomedia");
movie1.actors= actoresMovie1; 
movie1.director = directorMovie1;
movie1.writer = escritorMovie1;
movie1.language ="español (subtítulos en typescript)";
movie1.platform = "Netflix";
movie1.isMCU = true;
movie1.mainCharacterName = "Scarlett O'Hara";
movie1.producer = "Desirée G.";
movie1.distributor = "Metro-Goldwyn-Mayer (MGM)";
​
// Para terminar probamos el método showMoviesInfo para mostrar todos los datos de nuestro OBJETO DE CLASE MOVIE.
movie1.showMoviesInfo();
​
// Película 2: 
//Creamos objetos de clase Professional para añadirlos más tarde en el atributo actors al objeto Movie.
let actor1Movie2 = new Professional ("Santiago Segura", 55, "Masculino", 80, 1.85, "calvo", "marrón", "blanca", false, "española", 0, profesiones.actor);
let actor2Movie2 = new Professional ("Toni Acosta", 48, "Femenino", 55, 1.60, "castaño", "marrón", "blanca", false, "española", 0, profesiones.actor);
let actor3Movie2 = new Professional ("Loles León", 70, "Femenino", 62, 1.60, "negro", "marrón", "blanca", true, "española", 0, profesiones.actor);
​
//Creamos el array de objetos professional que incluye nuestros actores para añadirlo en el atributo actores de nuestro objeto Movie. 
let actoresMovie2= [actor1Movie2, actor2Movie2, actor3Movie2];
​
// Creamos los objetos de la clase Professional Director (con atributo profesión director) y Escritor (con atributo profesión guionista) para incluirlos también como atributos de nuestro objeto Movie.
let directorMovie2 = new Professional ("Santiago Segura Silva", 55, "Masculino", 80, 1.85, "calvo", "marrón", "blanca", false, "española", 0, profesiones.director);
let escritorMovie2 = new Professional ("Marta González de Vega", 43, "Femenino", 55, 1.63, "castaño", "marrón", "caucásica", false, "española", 0, profesiones.guionista);
​
// Ahora podemos crear el objeto de clase Movie, rellenando los parámetros del constructor y, después, A MANO, el resto de atributos que no están en el constructor y son PÚBLICOS (accedemos directamente con punto, no es necesario setter)
let movie2 = new Movie ("Padre no hay más que uno 2: La llegada de la suegra", 2020, "España", "Comedia | Secuela. Familia");
movie2.actors= actoresMovie2; 
movie2.director = directorMovie2;
movie2.writer = escritorMovie2;
movie2.language ="español";
movie2.platform = "cines";
movie2.isMCU = false; 
movie2.mainCharacterName = "Javier";
movie2.producer = "Santiago Segura";
movie2.distributor = "Sony Pictures Entertainment";
​
//Película 3: 
//Creamos objetos de clase Professional para añadirlos más tarde en el atributo actors al objeto Movie.
let actor1Movie3 = new Professional ("Tom Hanks", 64, "Masculino", 86, 1.83, "castaño ceniza", "azul", "americana", false, "estadounidense", 1, profesiones.actor);
let actor2Movie3 = new Professional ("Robin Wright", 54, "Femenino", 59, 1.68, "rubio", "azul", "americana", false, "estadounidense", 0, profesiones.actor);
let actor3Movie3 = new Professional ("Gary Sinise", 65, "Masculino", 70, 1.75, "marrón", "gris", "americana", true, "estadounidense", 0, profesiones.actor);
​
//Creamos el array de objetos professional que incluye nuestros actores para añadirlo en el atributo actores de nuestro objeto Movie. 
let actoresMovie3 =  [actor1Movie3, actor2Movie3, actor3Movie3];
​
// Creamos los objetos de la clase Professional Director (con atributo profesión director) y Escritor (con atributo profesión guionista) para incluirlos como atributos de nuestro objeto Movie.
let directorMovie3 = new Professional ("Robert Zemeckis", 68, "Masculino", 74, 1.70, "gris", "marrón", "americana", false, "estadounidense", 1, profesiones.director);
let escritorMovie3 = new Professional ("Eric Roth", 75, "Masculino", 78, 1.80, "negro", "marrón", "americana", true, "estadounidense", 1, profesiones.guionista);
​
// Ahora creamos el objeto de clase Movie, rellenando los parámetros del constructor y, después, A MANO, el resto de atributos que no están en el constructor y son PÚBLICOS (accedemos directamente con punto, no es necesario setter)
let movie3 = new Movie ("Forrest Gump", 1994, "Estados Unidos", "Comedia/Drama/Romance");
movie3.actors = actoresMovie3; 
movie3.director = directorMovie3;
movie3.writer = escritorMovie3;
movie3.language = "inglés";
movie3.platform = "tv";
movie3.isMCU = false;
movie3.mainCharacterName = "Forrest Gump";
movie3.producer = "Wendy Finerman";
movie3.distributor = "Paramount Pictures";
​
//Película 4:
//Creamos objetos de clase Professional para añadirlos más tarde en el atributo actors al objeto Movie.
let actor1Movie4 = new Professional ("Kristen Bell", 40, "Femenino", 50, 1.55, "rubio", "verdes", "americana", false, "estadounidense", 0, profesiones.actor);
let actor2Movie4 = new Professional ("Indina Menzel", 49, "Femenino", 52, 1.63, "castaño", "amarrón", "americana", false, "estadounidense", 0, profesiones.actor);
let actor3Movie4 = new Professional ("Jonathan Groff", 35, "Masculino", 77, 1.80, "castaño claro", "verde", "americana", false, "estadounidense", 0, profesiones.actor);
let actor4Movie4 = new Professional ("Josh Gad", 39, "Masculino", 72, 1.69, "castaño oscuro", "marrón", "americana", false, "estadounidense", 0, profesiones.actor);
let actor5Movie4 = new Professional ("Santino Fontana", 38, "Masculino", 81, 1.87, "castaño", "azul", "americana", false, "estadounidense", 0, profesiones.actor);
​
//Creamos el array de objetos professional que incluye nuestros actores para añadirlo en el atributo actores de nuestro objeto Movie. 
let actoresMovie4 =  [actor1Movie4, actor2Movie4, actor3Movie4, actor4Movie4, actor5Movie4];
​
// Creamos los objetos de la clase Professional Director (con atributo profesión director) y Escritor (con atributo profesión guionista) para incluirlos como atributos de nuestro objeto Movie.
let directorMovie4 = new Professional ("Chris Buck", 62, "Masculino", 88, 1.90, "gris", "azul", "americana", false, "estadounidense", 1, profesiones.director);
let escritorMovie4 = new Professional ("Jennifer Lee", 48, "Femenino", 66, 1.72, "rubio", "azul", "americana", false, "estadounidense", 1, profesiones.guionista);
​
// Ahora creamos el objeto de clase Movie, rellenando los parámetros del constructor y, después, A MANO, el resto de atributos que no están en el constructor y son PÚBLICOS (accedemos directamente con punto, no es necesario setter)
let movie4 = new Movie ("Frozen: El reino del hielo", 2013, "Estados Unidos", "Animación | Infantil | Fantástico | Musical | Aventuras");
movie4.actors = actoresMovie4; 
movie4.director = directorMovie4;
movie4.writer = escritorMovie4;
movie4.language = "español";
movie4.platform = "Amazon Prime Video";
movie4.isMCU = false;
movie4.mainCharacterName = "Elsa";
movie4.producer = "Peter Del Vecho";
movie4.distributor = "Walt Disney Pictures";
​
//Película 5: 
//Creamos objetos de clase Professional para añadirlos más tarde en el atributo actors al objeto Movie.
let actor1Movie5 = new Professional ("Matthew McConaughey", 64, "Masculino", 80, 1.88, "rubio", "verdes", "americana", false, "estadounidense", 1, profesiones.actor);
let actor2Movie5 = new Professional ("Charlie Hunnam", 55, "Masculino", 59, 1.65, "negro", "marrones", "americana", false, "estadounidense", 0, profesiones.actor);
let actor3Movie5 = new Professional ("Colin Farrell", 45, "Masculino", 76, 1.78, "castaño", "gris", "americana", true, "australiano", 0, profesiones.actor);
​
//Creamos el array de objetos professional que incluye nuestros actores para añadirlo en el atributo actores de nuestro objeto Movie. 
let actoresMovie5 =  [actor1Movie5, actor2Movie5, actor3Movie5];
​
// Creamos los objetos de la clase Professiona...
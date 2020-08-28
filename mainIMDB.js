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

//Película 5: 
//Creamos objetos de clase Professional para añadirlos más tarde en el atributo actors al objeto Movie.
let actor1Movie5 = new Professional ("Matthew McConaughey", 64, "Masculino", 80, 1.88, "rubio", "verdes", "americana", false, "estadounidense", 1, profesiones.actor);
let actor2Movie5 = new Professional ("Charlie Hunnam", 55, "Masculino", 59, 1.65, "negro", "marrones", "americana", false, "estadounidense", 0, profesiones.actor);
let actor3Movie5 = new Professional ("Colin Farrell", 45, "Masculino", 76, 1.78, "castaño", "gris", "americana", true, "australiano", 0, profesiones.actor);
​
//Creamos el array de objetos professional que incluye nuestros actores para añadirlo en el atributo actores de nuestro objeto Movie. 
let actoresMovie5 =  [actor1Movie5, actor2Movie5, actor3Movie5];
​
// Creamos los objetos de la clase Professional Director (con atributo profesión director) y Escritor (con atributo profesión guionista) para incluirlos como atributos de nuestro objeto Movie.
let directorMovie5 = new Professional ("Guy Ritchie", 66, "Masculino", 90, 1.65, "gris", "marrón", "americana", false, "australiano", 1, profesiones.director);
let escritorMovie5 = new Professional ("Ivan Atkinson", 60, "Masculino", 70, 1.80, "gris", "verdes", "americana", true, "estadounidense", 1, profesiones.guionista);
​
// Ahora creamos el objeto de clase Movie, rellenando los parámetros del constructor y, después, A MANO, el resto de atributos que no están en el constructor y son PÚBLICOS (accedemos directamente con punto, no es necesario setter)
let movie5 = new Movie ("The Gentlemen: Los señores de la mafia", 2019, "England", "Thriller. Acción. Comedia | Crimen. Drogas");
movie5.actors = actoresMovie5; 
movie5.director = directorMovie5;
movie5.writer = escritorMovie5;
movie5.language = "inglés";
movie5.platform = "tv";
movie5.isMCU = false;
movie5.mainCharacterName = "The Gentlemen";
movie5.producer = "Marn Davies";
movie5.distributor = "Universal Studios";

//Película 6: 
//Creamos objetos de clase Professional para añadirlos más tarde en el atributo actors al objeto Movie.
let actor1Movie6 = new Professional ("Zack Gottsagen", 38, "Masculino", 86, 1.80, "negro", "verdes", "latinoamericano", false, "estadounidense", 1, profesiones.actor);
let actor2Movie6 = new Professional ("Shia LaBeouf", 29, "Femenino", 55, 1.69, "castaño", "azul", "americana", false, "estadounidense", 0, profesiones.actor);
let actor3Movie6 = new Professional ("Dakota Johnson", 33, "Femenino", 60, 1.65, "negro", "gris", "americana", true, "estadounidense", 0, profesiones.actor);
​
//Creamos el array de objetos professional que incluye nuestros actores para añadirlo en el atributo actores de nuestro objeto Movie. 
let actoresMovie6 =  [actor1Movie6, actor2Movie6, actor3Movie6];
​
// Creamos los objetos de la clase Professional Director (con atributo profesión director) y Escritor (con atributo profesión guionista) para incluirlos como atributos de nuestro objeto Movie.
let directorMovie6 = new Professional ("Tyler Nilson", 69, "Masculino", 74, 1.70, "gris", "marrón", "americana", false, "estadounidense", 1, profesiones.director);
let escritorMovie6 = new Professional ("Mike Schwartz", 75, "Masculino", 78, 1.80, "negro", "marrón", "americana", true, "estadounidense", 1, profesiones.guionista);
​
// Ahora creamos el objeto de clase Movie, rellenando los parámetros del constructor y, después, A MANO, el resto de atributos que no están en el constructor y son PÚBLICOS (accedemos directamente con punto, no es necesario setter)
let movie6 = new Movie ("The Peanut Butter Falcon", 2019, "Estados Unidos", "Comedia/Drama/Romance");
movie6.actors = actoresMovie6; 
movie6.director = directorMovie6;
movie6.writer = escritorMovie6;
movie6.language = "inglés";
movie6.platform = "cine";
movie6.isMCU = false;
movie6.mainCharacterName = "The Peanut Butter Falcon";
movie6.producer = "Tyler Nilson, Mike Schwartz";
movie6.distributor = "Metro Golden";

//Película 7: 
//Creamos objetos de clase Professional para añadirlos más tarde en el atributo actors al objeto Movie.
let actor1Movie7 = new Professional ("Emma Suárez", 54, "Femenino", 69, 1.66, "castaño", "marrón", "española", false, "española", 1, profesiones.actor);
let actor2Movie7 = new Professional ("Adriana Ozores", 52, "Femenino", 59, 1.60, "rubio", "azul", "española", false, "española", 0, profesiones.actor);
let actor3Movie7 = new Professional ("Gary Sinise", 65, "Masculino", 70, 1.75, "marrón", "gris", "española", true, "española", 0, profesiones.actor);
​
//Creamos el array de objetos professional que incluye nuestros actores para añadirlo en el atributo actores de nuestro objeto Movie. 
let actoresMovie7 =  [actor1Movie7, actor2Movie7, actor3Movie7];
​
// Creamos los objetos de la clase Professional Director (con atributo profesión director) y Escritor (con atributo profesión guionista) para incluirlos como atributos de nuestro objeto Movie.
let directorMovie7 = new Professional ("Santos Mercero", 65, "Masculino", 78, 1.79, "gris", "marrón", "española", false, "argentino", 1, profesiones.director);
let escritorMovie7 = new Professional ("Gracia Querejeta", 58, "Masculino", 70, 1.80, "negro", "marrón", "española", true, "español", 1, profesiones.guionista);
​
// Ahora creamos el objeto de clase Movie, rellenando los parámetros del constructor y, después, A MANO, el resto de atributos que no están en el constructor y son PÚBLICOS (accedemos directamente con punto, no es necesario setter)
let movie7 = new Movie ("Invisibles", 2020, "España", "Drama | Amistad");
movie7.actors = actoresMovie7; 
movie7.director = directorMovie7;
movie7.writer = escritorMovie7;
movie7.language = "español";
movie7.platform = "cine";
movie7.isMCU = false;
movie7.mainCharacterName = "Invisibles";
movie7.producer = "Santos Mercero";
movie7.distributor = "RTVE";
​
//Por último creamos un array de películas (que son OBJETOS DE CLASE MOVIE)
let arrFilms = [movie2, movie3, movie4];


//Película 8:
//Creamos objetos de clase Professional para añadirlos más tarde en el atributo actors al objeto Movie.
let actor1Movie8 = new Professional ("Daniel Radcliffe", 31, "Masculino", 80, 1.85, "negro", "marrón", "inglesa", true, "británica", 1, profesiones.actor);
let actor2Movie8 = new Professional ("Rupert Grint", 30, "Masculino", 73, 1.57, "pelirrojo", "miel", "inglesa", true, "británica", 2, profesiones.actor);
let actor3Movie8 = new Professional ("Emma Watson", 30, "Femenino", 55, 1.70,"castaño", "marrón", "inglesa", true, "británica", 0, profesiones.actor);
 
// Ahora creamos el array de objetos professional que incluye nuestros actores y los incluimos.
let actoresMovie8 = [actor1Movie8, actor2Movie8, actor3Movie8];

// Creamos los objetos de la clase Professional Director (con atributo profesión director) y Escritor (con atributo profesión guionista) para incluirlos también como atributos de nuestro objeto Movie.
let escritorMovie8 = new Professional ("Steve Kloves", 56,"Masculino", 76, 1.80, "rubio", "marrón", "inglesa", false, "británica", 1, profesiones.guionista);
let directorMovie8 = new Professional ("Chris Columbus", 63, "Masculino", 78, 1.75, "castaño", "verde", "inglesa", false, "británica", 1, profesiones.director);

// Ahora podemos crear el objeto de clase Movie, rellenando los parámetros del constructor con los valores creados y, después, A MANO, el resto de atributos que no están en el constructor y son PÚBLICOS (accedemos directamente con punto, no es necesario setter)
let movie8 = new Movie ("Harry Potter y la piedra filosofal", 2001, "Reino Unido", "Fantasía | Aventuras");
movie8.actors= actoresMovie8; 
movie8.director = directorMovie8;
movie8.writer = escritorMovie8;
movie8.language ="inglés";
movie8.platform = "Netflix";
movie8.isMCU = false;
movie8.mainCharacterName = "Harry Potter";
movie8.producer = "David Heyman";
movie8.distributor = "Warner Bros., Heyday Films, 1492 Pictures";

// Para terminar probamos el método showMoviesInfo para mostrar todos los datos de nuestro OBJETO DE CLASE MOVIE.
movie1.showMoviesInfo();


//Película 9:
//Creamos objetos de clase Professional para añadirlos más tarde en el atributo actors al objeto Movie.
let actor1Movie9 = new Professional ("Emily Blunt", 31, "Femenino", 50, 1.53, "rubio", "marrón", "americana", true, "estadounidense", 0, profesiones.actor);
let actor2Movie9 = new Professional ("Ben Whishaw", 40, "Masculino", 78, 1.86, "castaño", "azul", "americana", true, "estadounidense", 0, profesiones.actor);
let actor3Movie9 = new Professional ("Emily Mortimer", 24, "Femenino", 65, 1.70,"castaño", "marrón", "americana", true, "estadounidense", 0, profesiones.actor);
 
// Ahora creamos el array de objetos professional que incluye nuestros actores y los incluimos.
let actoresMovie9 = [actor1Movie9, actor2Movie9, actor3Movie9];

// Creamos los objetos de la clase Professional Director (con atributo profesión director) y Escritor (con atributo profesión guionista) para incluirlos también como atributos de nuestro objeto Movie.
let escritorMovie9 = new Professional ("David Magee", 39,"Masculino", 76, 1.80, "rubio", "marrón", "americana", false, "británica", 1, profesiones.guionista);
let directorMovie9 = new Professional ("Rob Marshall", 58, "Masculino", 78, 1.75, "castaño", "verde", "australiana", false, "británica", 1, profesiones.director);

// Ahora podemos crear el objeto de clase Movie, rellenando los parámetros del constructor con los valores creados y, después, A MANO, el resto de atributos que no están en el constructor y son PÚBLICOS (accedemos directamente con punto, no es necesario setter)
let movie9 = new Movie ("El regreso de Mary Poppins", 2018, "Estados Unidos", "Musical. Fantástico | Cine familiar. Años 30. Secuela");
movie9.actors= actoresMovie9; 
movie9.director = directorMovie9;
movie9.writer = escritorMovie9;
movie9.language ="inglés";
movie9.platform = "HBO";
movie9.isMCU = false;
movie9.mainCharacterName = "Mary Poppins";
movie9.producer = "Marc Shaiman";
movie9.distributor = "Walt Disney Pictures, Lucamar Productions, Marc Platt Productions";

//Película 10:
//Creamos objetos de clase Professional para añadirlos más tarde en el atributo actors al objeto Movie.
let actor1Movie10 = new Professional ("Gal Gadot", 31, "Femenino", 66, 1.75, "castaño", "marrón", "americana", true, "estadounidense", 1, profesiones.actor);
let actor2Movie10 = new Professional ("Chris Pine", 40, "Masculino", 70, 1.70, "castaño", "azul", "americana", true, "estadounidense", 0, profesiones.actor);
let actor3Movie10 = new Professional ("David Thewlis", 24, "Masculino", 65, 1.70,"castaño", "marrón", "americana", true, "estadounidense", 0, profesiones.actor);
 
// Ahora creamos el array de objetos professional que incluye nuestros actores y los incluimos.
let actoresMovie10 = [actor1Movie10, actor2Movie10, actor3Movie10];

// Creamos los objetos de la clase Professional Director (con atributo profesión director) y Escritor (con atributo profesión guionista) para incluirlos también como atributos de nuestro objeto Movie.
let escritorMovie10 = new Professional ("Allan Heinberg", 39,"Masculino", 76, 1.80, "rubio", "marrón", "americana", false, "británica", 1, profesiones.guionista);
let directorMovie10 = new Professional ("Patty Jenkins", 58, "Femenino", 50, 1.60, "castaño", "verde", "australiana", false, "británica", 1, profesiones.director);

// Ahora podemos crear el objeto de clase Movie, rellenando los parámetros del constructor con los valores creados y, después, A MANO, el resto de atributos que no están en el constructor y son PÚBLICOS (accedemos directamente con punto, no es necesario setter)
let movie10 = new Movie ("Wonder Woman", 2017, "Estados Unidos", "Fantástico. Acción. Bélico. Aventuras | Superhéroes. Cómic. DC Comics. I Guerra Mundial");
movie10.actors= actoresMovie10; 
movie10.director = directorMovie10;
movie10.writer = escritorMovie10;
movie10.language ="inglés";
movie10.platform = "Amazon Video";
movie10.isMCU = true;
movie10.mainCharacterName = "Diana";
movie10.producer = "Marc Shaiman";
movie10.distributor = "Warner Bros., DC Entertainment, Atlas Entertainment";



​
//Ahora podemos crear el objeto de clase IMDB, incluyendo estas películas en un array de Movie, tal y como pide el constructor
let myIMBD = new IMDB (arrFilms);
​
console.log(myIMBD.peliculas);
​
​
readLine.question ("Título: " + this.title + "Año de lanzamiento: " + "Nacionalidad: " +  "Género: ")
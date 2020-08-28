export const profesiones = {
    actor = "Actor",
    guionista = "Guionista",
    director = "Director",
  }
  
  module.exports = class Professional {
    constructor(picture,name, age, genre, weight, height, hairColor, eyeColor,race,isRetired, nationality, oscars, profession, profesiones) {
      this.name = name;
      this.age = age;
      this.genre = genre;
      this.weight = weight;
      this.height = height;
      this.hairColor = hairColor;
      this.eyeColor = eyeColor;
      this.race = race;
      this.isRetired = isRetired;
      this.nationality = nationality;
      this.oscasrsNumber = oscarsNumber;
      this.profession = profession;
      this.picture = picture;
    }
  
   
    showAttributes() {
      console.log(`${this.picture} \n Name: ${this.name} \n Age: ${this.age} \n Genre: ${this.genre} \n Weight: ${this.weight} \n Height: ${this.height} \n Hair Color: ${this.hairColor} \n Eye Color: ${this.eyeColor} \n Race: ${this.race} \n Is Retired? ${this.isRetired} \n Nationality: ${this.nationality} \n Oscars Number: ${this.oscasrsNumber} \n Profession: ${this.profession}\n`);
    }
  }
  
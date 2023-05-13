class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

class Flat {
  constructor() {
    this.residents = [];
  }
  
  addResident(person) {
    this.residents.push(person);
  }
}

class House {
  constructor(maxFlats) {
    this.flats = [];
    this.maxFlats = maxFlats;
  }

  addFlat(flat) {
    if (this.flats.length < this.maxFlats) {
      this.flats.push(flat);
    } else {
      console.log("The House is full!");
    }
  }
}


let pers1 = new Person("Jerry", "male");
let pers2 = new Person("Fiona", "female");
let pers3 = new Person("Julia", "female");
let pers4 = new Person("Roman", "male");
let pers5 = new Person("Terry", "male");

let flat1 = new Flat();
let flat2 = new Flat();


let flat3 = new Flat();
let flat4 = new Flat();

flat1.addResident(pers1);
flat1.addResident(pers2);

flat2.addResident(pers3);
flat2.addResident(pers4);
flat2.addResident(pers5);

let house = new House(3);

house.addFlat(flat1);
house.addFlat(flat2);
house.addFlat(flat3);
house.addFlat(flat4);

console.log(pers4);
console.log(flat1);
console.log(flat2);
console.log(house);

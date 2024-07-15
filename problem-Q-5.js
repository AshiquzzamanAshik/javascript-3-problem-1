// This is problem solving-Q-5
const name = "Ashiquzzaman";
const age = 23;

const person = {
  name,
  age,
  greet() {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
  }
};

console.log(person.greet()); // I'm Ashiquzzaman and I'm 23 years old. 
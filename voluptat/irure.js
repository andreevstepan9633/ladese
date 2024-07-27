function Person(name, age) {
  this.params = { name: name, age: age };
}

const person = new Person('John', 30);
console.log(person.params); // { name: "John", age: 30 }

class Animal {
  constructor(name) {
    this.name = name;
  }
  printName() {
    console.log`${this.name}`;
  }
}
class Mammal extends Animal {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
  getAge() {
    console.log(this.age);
  }
}
class Fish extends Animal {
  constructor(name, weight) {
    super(name);
    this.weight = weight;
  }
  increaseWeight(n) {
    console.log(this.weight + n);
  }
}
class Dog extends Mammal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }
  getAge() {
    this.age = this.age * 4;
    return this.age;
  }
}
class Salmon extends Fish {
  constructor(name, weigth) {
    super(name, weigth);
  }
  catch() {
    console.log(`Zlapany`);
  }
}

const d = new Dog("hgu", 5, "hi");
console.log(d.getAge());
const f = new Fish("hygu", 6);
f.increaseWeight(7);

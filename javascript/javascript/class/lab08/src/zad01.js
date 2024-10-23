class Food {
  constructor(name, ingredients) {
    this.name = name;
    this.ingredients = ingredients;
  }
  prepare() {
    return `Preparing ${this.name}...`;
  }
  cook() {
    return `Cooking ${this.name}...`;
  }
  serve() {
    return `Serving ${this.name}...`;
  }
}
class Pizza extends Food {
  constructor(name, ingredients, toppings) {
    super(name, ingredients);
    this.toppings = toppings;
  }
  mix() {
    return ` Mixing pizza dough...`;
  }
  bake() {
    return `Baking pizza in oven...`;
  }
  serve() {
    return `Serving ${this.name} with ${this.toppings}...`;
  }
}

class Salad extends Food {
  constructor(name, dressing) {
    super(name);
    this.dressing = dressing;
  }
  mix() {
    return `Mixing salad ingredients...`;
  }
  serve() {
    return `Serving ${this.name} with ${this.dressing} dressing......`;
  }
}
const pizza = new Pizza(
  "Margherita",
  ["flour", "tomatoes", "mozzarella"],
  ["basil"]
);
console.log(pizza.prepare());
console.log(pizza.mix());
console.log(pizza.bake());
console.log(pizza.serve());
// Output:
// Preparing Margherita...
// Mixing pizza dough...
// Baking pizza in oven...
// Serving Margherita with basil...

const salad = new Salad(
  "Caesar",
  ["lettuce", "croutons", "Parmesan cheese"],
  "Caesar"
);
console.log(salad.prepare());
console.log(salad.mix());
console.log(salad.serve());
// Output:
// Preparing Caesar...
// Mixing salad ingredients...
// Serving Caesar with Caesar dressing...

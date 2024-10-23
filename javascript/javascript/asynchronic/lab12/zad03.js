/*Napisz funkcję multiplyAsync(x,y), która zwraca obiekt klasy Promise kończący się porażką, gdy któryś z argumentów jest niepoprawny (nie jest liczbą).
 W przeciwnym przypadku zwraca iloczyn dwóch liczb. Napisz callback, który wypisuje wynik w konsoli. */

function multiplyAsync(x, y) {
  return new Promise((res, rej) => {
    if (typeof x === "number" && typeof y === "number") {
      res(x * y);
    } else {
      rej("Porazka");
    }
  });
}
function cb(res) {
  console.log(res);
}

multiplyAsync("a", 5)
  .then((res) => cb(res))
  .catch((res) => cb(res));

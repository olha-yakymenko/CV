/*Napisz funkcję, która przyjmuje trzy argumenty: funkcję i dwie liczby (x, y).
 Funkcja będzie wywołała podaną w argumencie funkcję, co x sekund i automatycznie zatrzyma się po upływie y sekund. */

const b = (f, x, y) => {
  const a = setInterval(() => {
    f();
  }, x * 1000);
  setTimeout(() => {
    clearInterval(a);
  }, y * 1000);
};
b(() => console.log("ffff"), 1, 3);

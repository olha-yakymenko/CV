/*Zaimplementuj funkcję counter, która przyjmuje jako parametry dwie liczby i zwraca funkcję.
 Kiedy zwracana funkcja jest wywołana, w konsoli powinny zostać wyświetlone wszystkie liczby pomiędzy 1 i pierwszym parametrem w odstępie ilości milisekund podanych jako drugi parametr.
 Rozwiązanie musi być zawarte w jednej funkcji (nie licząc zwracanej i wewnętrznych lambd). */

function counter(x, y) {
  return (function () {
    let i = 0;
    const a = setInterval(() => {
      i += 1;
      console.log(i);
      if (i === x) {
        clearInterval(a);
      }
    }, y * 1000);
  })();
}
counter(5, 1);

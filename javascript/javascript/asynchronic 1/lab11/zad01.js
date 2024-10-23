/*Napisz funkcję

const razem = (fun1, fun2, cb) => { ... };

taką, że:

    jej dwoma pierwszymi argumentami są funkcje asynchroniczne – możesz założyć, że funkcje te muszą być przygotowane na przyjęcie określonej listy argumentów, z których korzystać będzie razem
    funkcja razem powinna zapewnić, że fun1 oraz fun2 będą wykonywać się „równolegle”, a wyniki przez nie wygenerowane zostaną przekazane – jako tablica [wynik1, wynik2] do funkcji cb.
    trzecim argumentem jest „callback” cb, czyli funkcja, której zadaniem jest przetworzenie wyników zwróconych przez fun1 i fun2 */

// const func1 = (cb) => {
//   setTimeout(() => {
//     console.log("pierwsza");
//     const a = 4;
//     cb(a);
//   }, 1000);
// };
// const func2 = (cb) => {
//   setTimeout(() => {
//     console.log("druga");
//     const a = 9;
//     cb(a);
//   }, 1000);
// };
// const razem = (fun1, fun2, cb) => {
//   const a = fun1(cb);
//   const b = fun2(cb);
//   const c = [a, b];
//   if (
//     c.length === 2 &&
//     c[0] !== undefined &&
//     c[1] !== undefined &&
//     c !== undefined
//   ) {
//     cb(c);
//   }
// };
// console.log(
//   razem(
//     func1((a, b) => console.log([a, b])),
//     func2((a, b) => console.log([a, b])),
//     func1((a, b) => console.log([a, b]))
//   )
// );

const func1 = (a, cb) => {
  console.log("pierwsza");
  setTimeout(() => {
    console.log("koniec1 ");
    cb(a);
  }, 1000);
};
const func2 = (a, cb) => {
  console.log("druga");
  setTimeout(() => {
    console.log("koniec2");
    cb(a);
  }, 2000);
};

const razem = (fun1, fun2, cb) => {
  const arr = [];

  fun1(4, (res) => {
    arr[0] = res;
    if (arr[0] && arr[1]) cb(arr);
  });
  fun2(3, (res) => {
    arr[1] = res;
    if (arr[0] && arr[1]) cb(arr);
  });
};

razem(func1, func2, (arr) => {
  console.log(arr[0] + arr[1]);
});

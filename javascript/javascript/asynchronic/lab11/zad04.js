/*Napisz funkcję:

const razemTab = (funTab, cb) => { ... };

taką, że:
    pierwszym argumentem jest tablica funkcji asynchronicznych
    funkcja razemTab powinna zapewnić, że wszystkie funkcje będą wykonywać się „równolegle”, a wyniki przez nie wygenerowane zostaną przekazane – jako tablica [wynik1, wynik2, ...] do funkcji cb.
    drugim argumentem jest „callback” cb, czyli funkcja, której zadaniem jest przetworzenie wyników zwróconych przez funkcje.*/

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
const razemTab = (funTab, cb) => {
  const arr = [];
  funTab.forEach((f) => {
    f(3, (res) => {
      arr.push(res);
      if (arr.length === funTab.length) cb(arr);
    });
  });
};

razemTab([func1, func2], (arr) => console.log(arr));

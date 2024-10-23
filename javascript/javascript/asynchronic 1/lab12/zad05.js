/*Napisz funkcję:


spełaniającą poniższe warunki:

    Pierwszym argumentem funkcji connect jest tablica funkcji asynchronicznych, zwracających wartość liczbową.
    Drugim argumentem connect jest funkcja asynchroniczna, której jedynym argumentem jest wartość liczbowa, a wynikiem również wartość liczbowa.
    Funkcja connect powinna zapewnić, że wszystkie funkcje przekazane w parametrze funTab będą wykonywać się „równolegle”.
    Funkcja connect powinna zwracać pogrupowane wyniki w formacie:

    [
      [ wyn_1, fun(wyn_1) ],
      [ wyn_2, fun(wyn_2) ],
      [ wyn_3, fun(wyn_3) ],
      [ wyn_4, fun(wyn_4) ],
      [ wyn_5, fun(wyn_5) ],
      // ....
    ]

    gdzie wyn_i oznacza funTab[i](). */
// const func1 = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(4);
//     }, 1000);
//   });
// };

// const func2 = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(5);
//     }, 2000);
//   });
// };

// const connect = (funTab, fun) => {
//   const arr = [];
//   return Promise.all(funTab.map((el) => el())).then((a) => {
//     a.map((element) => {
//       arr.push([element, fun(element)]);
//     });
//   });
//   return arr;
// };

// connect([func1, func2], (a) => console.log(a * 2));

const func1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(4);
    }, 1000);
  });
};

const func2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(5);
    }, 2000);
  });
};

const connect = (funTab, fun) => {
  const arr = [];
  return Promise.all(funTab.map((el) => el())).then((a) => {
    a.forEach((element) => {
      arr.push([element, fun(element)]);
    });

    return arr;
  });
};

connect([func1, func2], (a) => console.log(a * 2));
// .then((result) => {
//   console.log(result);
// });

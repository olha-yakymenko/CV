/*Wykorzystując asynchroniczną funkcję getNum (używającą pomocniczej funkcji getRand):



zdefiniuj funkcje, która równolegle uruchamia dim-kopii funkcji getNum, a otrzymane wyniki (liczby) sortuje malejąco i tak otrzymaną tablicę zwraca jako wynik końcowy.

const asyncSort = (dim) => {
  // ...
};
*/

// const getRand = () => {
//   return Math.floor(Math.random() * 1000);
// };

// const getNum = (cb) => {
//   setTimeout(() => {
//     cb(getRand());
//   }, getRand() * 5);
// };

// const asyncSort = (dim) => {
//   dim((f) => f());
// };

// asyncSort(getNum);

const getRand = () => {
  return Math.floor(Math.random() * 1000);
};

const getNum = (cb) => {
  setTimeout(() => {
    cb(getRand());
  }, getRand() * 5);
};

const asyncSort = (dim) => {
  const results = [];
  let count = 0;

  const cb = (result) => {
    results.push(result);
    count++;

    if (count === dim) {
      results.sort((a, b) => b - a);
      console.log("Posortowana tablica:", results);
    } else {
      getNum(cb);
    }
  };

  getNum(cb);
};

asyncSort(5);

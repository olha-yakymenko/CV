const func1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("koniec1 ");
      resolve("koniec1");
    }, 1000);
  });
};

const func2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("koniec2");
      resolve("koniec2");
    }, 2000);
  });
};

//zrobic funkcj ktora bedzie odpowiadala za if i else bo fragmenty sa podobne
// const func=(a)=>{
//     if(a===0){

//     }
// }

const grupuj = (funTab1, funTab2, cb) => {
  Promise.all([
    Promise.all(funTab1.map((func) => func())),
    Promise.all(funTab2.map((func) => func())),
  ]).then((res) => {
    const arr = [];
    if (res[0].length > res[1].length) {
      res[0].reduce((acc, el, index) => {
        if (res[1][index] !== undefined) {
          arr.push([el, res[1][index]]);
        } else {
          arr.push([el, 0]);
        }
        return acc + 1;
      }, 0);
    } else {
      res[1].reduce((acc, el, index) => {
        if (res[0][index] !== undefined) {
          arr.push([res[0][index], el]);
        } else {
          arr.push([0, el]);
        }
        return acc + 1;
      }, 0);
    }
    cb(arr);
  });
};

grupuj([func1, func1], [func2, func2], (res) => console.log(res));

const prom = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
    //reject("nie ok");
  }, 2000);
});
//console.log(prom);
// prom.then(
//   (res) => {
//     console.log(res);
//   }
//   //   (error) => {
//   //     console.log(error);
//   //   }
// );

// prom
//   .catch((res) => {
//     console.log(res);
//   })
//   .finally(() => {
//     console.log("koniec promise");
//   });

const prom2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
    //reject("nie ok");
  }, 3000);
});

Promise.all([prom, prom2]).then(([res1, res2]) => {
  console.log(res1);
  console.log(res2);
});

// prom.then();
// prom2.then();

// zad4

const funTab = [];
const funTab2 = [];

Promise.all([...funTab, ...funTab2]).then((res) => {});

Promise.all([
  new Promise((res) => res(Promise.all(funTab1))),
  new Promise((res) => res(Promise.all(funTab2))),
]).then((res) => {
  //[[1,2,3], [4,5,6]] =>
});

[
  function () {
    return new Promise((res) => {
      setTimeout(() => {
        res(2);
      }, 2000);
    });
  },
  function (cb) {
    setTimeout(() => {
      cb(2);
    }, 2000);
  },
];

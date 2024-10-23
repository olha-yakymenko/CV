// const func1 = (a, func2) => {
//   console.log("pierwsza");
//   setTimeout(() => {
//     console.log("koniec1 ");
//     func2(a);
//   }, 1000);
// };
// const func2 = (a, cb) => {
//   console.log("druga");
//   setTimeout(() => {
//     console.log("koniec2");
//     cb(a);
//   }, 2000);
// };

// const poKolei = (fun1, fun2, cb) => {
//   const arr = [];
//   fun1(4, fun2(res, (res) =>{

//   }));

//   //   fun2(3, (res) => {
//   //     arr[1] = res;
//   //     if (arr[0] && arr[1]) cb(arr);
//   //   });

// };

// poKolei(func1, func2, (arr) => {
//   console.log(arr[0] + arr[1]);
// });

const func1 = (a, cb) => {
  console.log("pierwsza");
  setTimeout(() => {
    console.log("koniec1");
    cb(a + " po func1");
  }, 1000);
};

const func2 = (a, cb) => {
  console.log("druga");
  setTimeout(() => {
    console.log("koniec2");
    cb(a + " po func2");
  }, 2000);
};

const poKolei = (fun1, fun2, cb) => {
  fun1(4, (result1) => {
    fun2(result1, (result2) => {
      cb(result2);
    });
  });
};

poKolei(
  func1,
  func2,
  (result) => {
    console.log("Wynik końcowy:", result);
  },
  "argument1"
);

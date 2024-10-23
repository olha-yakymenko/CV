const func1=()=>{
    console.log("start1")
    return new Promise((res) =>{
        setTimeout(() => {
            console.log("a")
            res(5)
        }, 1000);
    })
}
const func2=()=>{
    console.log("start2")
    return new Promise((res) =>{
        setTimeout(() => {
            console.log("b")
            res(6)
        }, 1000);
    })
}

function razem(funTab, cb) {
    const tab = [];
    function dodaj(liczba) {
      if (liczba < funTab.length) {
        funTab[liczba]().then((x) => {
          tab.push(x);
          if (tab.length === funTab.length) {
            cb(tab);
          }
        });
        dodaj(liczba + 1);
      }
    }
    dodaj(0);
  }
  

  razem([func1, func2], (x) => console.log(x));


// const razem = (funArr, cb) => {
//     const results = []

//     const checkAndCompare = () => {
//         if (results.length === funArr.length) {
//             cb(results);
//         }
//     };

//     funArr.map((fun, index) => {
//         fun().then(res => {
//             results[index] = res;
//             checkAndCompare();
//         });
//     });
// };
// razem([func1, func2], (a) => console.log(a))
const a = new Promise((res, rej) => {
  rej("Porazka");
});
a.then(
  (res) => {
    console.log(res);
  },
  (error) => {
    console.log(error);
  }
);
a.catch((res) => {
  console.log(res);
});

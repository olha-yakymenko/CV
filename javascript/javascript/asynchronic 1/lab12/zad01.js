const a = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Udalo sie");
  }, 5000);
});
a.then((res) => {
  console.log(res);
});

function helloWorld() {
  console.log("Hello world!");
}

setTimeout(() => {
  helloWorld();
}, 0);

console.log("No, hello universe!");

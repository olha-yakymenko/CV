const a = () => {
  const s = setInterval(() => {
    console.log("welcome");
  }, 1000);

  setTimeout(() => {
    clearInterval(s);
  }, 5000);
};
a();

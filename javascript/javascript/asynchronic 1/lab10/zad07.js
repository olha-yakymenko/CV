function countdown(cb, x) {
  const g = setInterval(() => {
    console.log(x);
    x -= 1;
    if (x == 0) {
      clearInterval(g);
      cb();
    }
  }, 1000);
}
countdown(() => console.log("zakonczone"), 2);

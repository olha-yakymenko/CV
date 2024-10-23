function executeAfterDelay(x, cb) {
  setTimeout(() => {
    cb();
  }, x);
}

executeAfterDelay(1000, () => console.log("uhgu"));

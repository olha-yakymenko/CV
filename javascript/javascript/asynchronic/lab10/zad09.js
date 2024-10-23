let k = null;
let i = 0;
function startCounter() {
  k = setInterval(() => {
    i++;
    document.getElementById("el").innerHTML = i;
  }, 1000);
}

function stopInterval() {
  clearInterval(k);
}

function clearCounter() {
  i = 0;
  document.getElementById("el").innerHTML = i;
}

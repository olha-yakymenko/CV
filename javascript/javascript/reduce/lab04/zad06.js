const rec = (a => a===0 ? a : a+rec(a-1) )
console.log(rec(3))
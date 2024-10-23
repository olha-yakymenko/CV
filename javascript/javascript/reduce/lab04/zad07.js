const tab=(tabl) => tabl.reduce((acc,curr,index, arr) => (acc === false) ? false : arr[arr.length-index-1]===curr,true)

console.log(tab([2,3,2]))
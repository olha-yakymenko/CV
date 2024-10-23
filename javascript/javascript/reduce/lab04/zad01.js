'use strict';
/*Wykorzystując funkcje wbudowane:
some() – Sprawdź, czy w tablicy jest jakakolwiek wartość null
find() – Znajdź pierwszego stringa
findIndex() – Znajdź indeks wartości true
filter() i sort() – Znajdź wszystkie liczby, a następnie posortuj je rosnąco */
const arr = [10, 'a', 21, true, null, undefined, 1, false, 'b', 2];
console.log(arr.some(a => a === null))
console.log(arr.find(a=> typeof a === 'string'))
console.log(arr.findIndex(a => a=== true))
console.log(arr.filter(a => typeof a === 'number').sort((a,b) => a-b ))
const { lp3 } = require('./toplist');
const _ = require('lodash');

// // pierwsze
// const tabl1 = _.reduce(lp3, (acc, elem) => elem.author === "Queen" ? acc.concat(elem.song) : acc, []);
// console.log(tabl1);

// // drugie
// const tabl2=_.reduce(lp3, (acc,elem) => elem.author==="Pink Floyd" && elem.change-elem.place>=-10 ? acc.concat(elem.song) : acc, [])
// console.log(tabl2)

// // trzecie
// //Posortuj listę rosnąco wg. spadku/wzrostu na liście przebojów (zmienna change), a następnie usuń n ostatnich utworów (w jednym wywołaniu).
// const sortedByChange = _.orderBy(lp3, 'change');
// const n = 5; // Dla przykładu usuwamy 5 ostatnich utworów.
// const withoutLastN = _.dropRight(sortedByChange, n);
// console.log("Posortowana lista wg. spadku/wzrostu na liście przebojów (bez ostatnich 5 utworów):", withoutLastN);


// // czwarte
// const pierwszy = _.reduce(lp3, (acc, elem, index) => {
//     if (index === 0) {
//         acc.song = elem.song;
//         acc.author = elem.author;
//     }
//     return acc;
// }, {});

// console.log(pierwszy);


// // 5. Napisz funkcję, która przyjmuje tablicę liczb. Następnie po sprawdzeniu czy każda z wartości w tablicy jest liczbą (za pomocą lodasha), skrypt wypisze utwory, znajdujące się pod miejscami wymienionymi w tablicy.
// // function printSongsByPositions(positions) {
// //     const filteredPositions = _.filter(positions, _.isNumber);
// //     const songsByPositions = _.map(filteredPositions, position => {
// //         const song = lp3[position - 1];
// //         return song ? song.song : `Brak utworu na pozycji ${position}`;
// //     });
// //     console.log("Utwory znajdujące się pod wymienionymi pozycjami:", songsByPositions);
// // }

// // console.log(printSongsByPositions([1,2,3,4]))

// // 6.Napisz skrypt, który przyjmuje 3 argumenty: (n, min, max), a następnie wypisze n razy losowy utwór z listy przebojów z zakresu (min, max).
// function getRandomSongs(n, min, max) {
//     const filteredSongs = _.filter(lp3, song => song.place >= min && song.place <= max);
//     const randomSongs = _.sampleSize(filteredSongs, n);
//     console.log(`${n} losowych utworów z listy przebojów z zakresu (${min}, ${max}):`);
//     randomSongs.forEach(song => console.log(song.song));
// }
// getRandomSongs(3, 5, 10);

// // 7. Wypisz 10 kolejnych utworów z tablicy, zachowując odstęp 2 sekund pomiędzy każdym.
// function secunds(lista){
//     const dziesiec = _.filter(lista, elem => elem.place >= 5 && elem.place <= 10);
//     dziesiec.forEach((song, index) => {
//         setTimeout(() => {
//             console.log(song.song);
//         }, (index + 1) * 2000);
//     });
// }

// secunds(lp3);


// // 8. Znajdź wszystkie utwory, które zaliczyły spadek w liście przebojów.
// const spadek = _.filter(lp3, song => song.change <0)
// console.log(spadek)

// // 9. Utwórz słownik z listy przebojów, gdzie kluczem będzie nazwa utworu.
// const songsDictionary = _.keyBy(lp3, 'song');
// console.log("Słownik z listy przebojów, gdzie kluczem jest nazwa utworu:", songsDictionary);

// 10. Utwórz tablicę, która zawiera zgrupowane po nazwie zespołu utwory. Każdy z utworów powinien posiadać informacje o tytule i zajmowanej pozycji.
// const bandSongs = _.mapValues(_.groupBy(lp3, 'author'), songs => {
//     return songs.map(song => {
//         return { song: song.song, place: song.place };
//     });
// });
// console.log(bandSongs);

// 11. Policz częstość występowania każdego z zespołów w zestawieniu.
// const count = _.countBy(lp3, 'author')
// console.log(count)

// 12. Wypisz największy spadek i najwyższy wzrost na liście.
const min = _.minBy(lp3, 'change').change
const max = _.maxBy( lp3, 'change').change
console.log(min)
console.log(max)
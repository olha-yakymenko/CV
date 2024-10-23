
const { lp3 } = require('./toplist');
const _ = require('lodash');

//zad01
const songs= _.reduce(lp3, (acc,elem)=> elem.author === 'Queen' ? acc.concat(elem.song) : acc, [])
console.log(songs)

//zad02
const twory=_.reduce(lp3, (acc,elem)=> elem.author==="Pink Floyd" && elem.change>10 ? acc.concat(elem.song) : acc, [])
console.log(twory)

//zad03
function trzecie(lp3, n){
    const sorted=_.sortBy(lp3,'change')
    const wynik = _.dropRight(sorted,n)
    return wynik
}
console.log(trzecie(lp3,20))

//zad04
const pierwszy=_.reduce(lp3,(acc,elem,index)=> index===0 ? {...acc, author:elem.author, song: elem.song} : acc,{})
console.log(pierwszy)

//zad05
function tablica  (lp3,lista){
     if (_.every(lista, _.isNumber)){
    lista.forEach(index=>{
        if (index>=0 && index< lp3.length){
            console.log(lp3[index].song)
        }
    })}
}
console.log(tablica(lp3, [2,4,6]))

// zad06
const losowy =(min, max, n)=> _.sampleSize(_.filter(lp3, elem=> elem.place>min && elem.place<max),n).forEach(elem => console.log(elem.song))
console.log(losowy(3,5,1))

// //zad07
// function secunds(lp3){
//     _.filter(lp3, elem=> elem.place<10)
//         .map((elem, index)=>{
//             setTimeout(()=>{
//                 console.log(elem.song)
//             }, (index+1)*2000)
//         })
//     }
// console.log(secunds(lp3))

// zad08
const spadek =_.reduce(lp3, (acc,elem)=> elem.change<0 ? acc.concat(elem) : acc, [])
console.log(spadek)

//zad09
const slownik = _.keyBy(lp3, 'song')
console.log(slownik)

// zad10 ???????????????
const bandd = _.mapValues(_.groupBy(lp3, 'author'), elem =>{
    return elem.map(el=>{
        return {song: el.song, place: el.place}
    })
})
console.log(bandd)


//zad11
const czestosc=_.countBy(lp3, 'author')
console.log(czestosc)

//zad12
const spadekk=_.minBy(lp3, 'change').change
const wzrost=_.maxBy(lp3, 'change').change
console.log(spadekk)
console.log(wzrost)



// ZAD2
function detectChanges(original, modified) {
   return  _.toPairs(_.omitBy(modified, (value,key)=> _.isEqual(original[key], value)))
  }
  const object1 = {
    id: 2,
    name: 'Przyjaciele',
    startYear: 1994,
    endYear: 2004,
    type: ["Komedia"],
    seasons: 10
  };
  
  const object2 = {
    id: 2,
    name: 'Przyjaciele edytowany',
    startYear: 1994,
    endYear: 2010,
    type: ["Komedia"],
    seasons: 10
  };
  
console.log(detectChanges(object1, object2)); // => [ [ 'name', 'Przyjaciele edytowany' ], [ 'endYear', 2010 ] ]

//ZAD03
function srednia(lista, n){
    const {suma, count}=_.reduce(lista, (acc,elem)=> {
        acc.suma+=elem[n]
        acc.count+=1
        return acc
    }, {suma:0, count:0})
    return suma/count
}
console.log(srednia([ { x: 4, y: 2}, { x: 1, y: 8 }, { x: 4, y: 2 } ], 'y'))
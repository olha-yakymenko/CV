const _ = require('lodash');
const arr = [ { x: 4, y: 2}, { x: 1, y: 8 }, { x: 4, y: 2 } ];


function srednia (lista, e){
    const {suma, count} = _.reduce(lista, (acc, elem) => {
        acc.suma+=elem[e];
        acc.count+=1;
        return acc
    }, {suma:0, count:0});
    return (suma/count)
}
console.log(srednia(arr, 'y'))
/*Wykorzystując reduce zwróć najdłuższy element z tablicy z dowolnym typem prostym
[ 'Ala', 'Janusz', 'kot', 'pies'] // -> Janusz
[ 1, 112, 13, 18 ] // -> 112*/

function dl(lista){
    return lista.reduce((acc, elem) =>{
        if (String(elem).length>String(acc).length){return  elem}
        else return acc
    })
}
console.log(dl([ 'Ala', 'Janusz', 'kot', 'pies']))
console.log(dl([ 1, 112, 13, 18 ]))
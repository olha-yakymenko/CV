const games = require('./games.js').games;
function gam(lista){
    return lista.reduce((acc,elem)=>{
        if (acc.length <4 && elem.imageUrl.length>0){
            acc.push(elem.imageUrl)
        }
        return acc
    },[])
}
console.log(gam(games))
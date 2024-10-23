function ujem(lista){
    return lista.reduce((acc,elem) => {
        if(elem<0) acc.push(elem*elem)
        else acc.push(elem)
    return acc
    }, [])
}
console.log(ujem([2,-7,-5,6]))
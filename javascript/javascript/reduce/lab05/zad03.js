function str(lista){
    return lista.reduce((acc,elem,id)=>{
        acc.push(`${id} : ${elem}`)
        return acc
    },[])
}
console.log(str([2,3,4,5,6]))
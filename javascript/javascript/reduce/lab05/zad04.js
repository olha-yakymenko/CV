function zm(lista){
    return lista.reduce((acc,elem) => {
        acc[elem.id]=elem;
        return acc
    },{})
}
console.log(zm([
    { id: 'a', name: 'Ala' },
    { id: 'b', name: 'Tomek' },
    { id: 'c', name: 'Jan' }
  ]))
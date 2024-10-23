const func1=(n)=>{
    return new Promise((res) =>{
        setTimeout(() => {
            res(n)
        }, 1000);
    })
}
const func2=(n)=>{
    return new Promise((res) =>{
        setTimeout(() => {
            res(n+1)
        }, 3000);
    })
}


const poKolei = (funTab, cb) => (n) => { 
    const tabl=[]
    funTab
    .reduce((acc, elem) =>{
        return acc.then((res) => 
            elem(res).then((result) => {
            tabl.push(result)
            return result
        })
    )
    }, Promise.resolve(n))
    .then(() => cb(tabl))
 };

 poKolei([func1, func2, func1], (a) => console.log(a))(6);

 
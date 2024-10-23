// const lista = require('./shoppingList.js').shoppingList;
// //a
// function grup(lista) {
//     return lista.reduce((acc, elem) => {
//         if (!acc[elem.type]) {
//             acc[elem.type] = {};
//         }
//         if (!acc[elem.type][elem.product]) {
//             acc[elem.type][elem.product] = {
//                 quantity: elem.quantity,
//                 price: elem.price,
//                 unit: elem.unit
//             };
//         }
//         return acc;
//     }, {});
// }
// //console.log(lista.reduce((acc,elem)=> console.log(acc[elem.type])))

// function a (lista){
//     return lista.reduce((acc,elem) => {
//         if (!acc[elem.type]){
//             acc[elem.type]={}
//         }
//         if (!acc[elem.type][elem.product]){
//             acc[elem.type][elem.product]={
//                 quantity:elem.quantity,
//                 price:elem.price,
//                 unit:elem.unit
//             }
//         }
//         return acc
//     }, {})
// }
// console.log(a(lista))

// function grup(lista){
//     return lista.reduce((acc,elem)=>{
//         if (!acc[elem.type]){
//             acc[elem.type]={};
//         }
//         if (!acc[elem.type][elem.product]){
//             acc[elem.type][elem.product]={
//                 quantity: elem.quantity,
//                 price: elem.price,
//                 unit: elem.unit
//             }
//         }
//         return acc
//     }, {})
// }

// function shoppingListToString(lista) {
//     const gr = lista.reduce((acc, elem) => {
//         if (!acc[elem.type]) {
//             acc[elem.type] = [];
//         }
//         acc[elem.type].push(elem.product);
//         console.log(acc)
//         return acc; // Вернуть аккумулятор после обновления
//     }, {});

//     let result = '';
//     for (const type in gr) {
//         result += `${type}:\n`;
//         gr[type].forEach((product, index) => {
//             result += `${index + 1}. ${product}\n`;
//         });
//         result += '\n';
//     }

//     return result;
// }
// console.log(shoppingListToString(lista))

 const shoppingList = require('./shoppingList.js').shoppingList;



// const groupedProducts = shoppingList.reduce((acc, elem) => ({
//     ...acc,
//     [elem.type]: {
//       ...(acc[elem.type] ),
//       [elem.product]: { quantity: elem.quantity, price: elem.price, unit: elem.unit }
//     }
//   }), {});
  
//   const shoppingListString = Object.keys(groupedProducts).reduce((acc, elem) => {
//     acc += `${elem}:\n`;
//     acc += Object.keys(groupedProducts[elem]).reduce((Acc, prod, index) => {
//       Acc += `${index + 1}. ${prod}\n`;
//       return Acc;
//     }, '');
//     acc += '\n';
//     return acc;
//   }, '');
  
//   console.log(shoppingListString);

const groupedProducts=shoppingList.reduce((acc,elem)=>({
    ...acc,
    [elem.type]:{
        ...(acc[elem.type]),
        [elem.product]:{ quantity:elem.quantity, price: elem.price, unit:elem.unit}
    }
}), {});

const shoppingListString= Object.keys(groupedProducts).reduce((acc,elem)=>{
    acc+=`${elem}:\n`;
    acc+= Object.keys(groupedProducts[elem]).reduce((Acc, prod, index)=>{
        Acc+=`${index+1}. ${prod}\n`;
        return Acc
    },'')
    acc+='\n';
    return acc
}, '')
console.log(shoppingListString);
/*Napisz funkcję, w której zadeklarujesz zmienną liczbową o ustalonej, stałej wartości. Następnie zwraca funkcję, która przyjmuje liczbę jako argument. 
Funkcja ta zwraca sumę argumentu i wcześniej zadeklarowanej wartości. (Inaczej - zadeklaruj funkcję w funkcji).*/

function f1(){
    const a=5
    return function (b){
        return a+b
    }
}

console.log(f1()(5))
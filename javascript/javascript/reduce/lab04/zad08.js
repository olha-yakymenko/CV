/*Stwórz funkcję getCounter, która jako parametr przyjmuje dwie wartości – min i max. 
Funkcja powinna zwrócić funkcję, która przy każdym wywołaniu zwraca liczbę o 1 większą niż poprzednio zwrócona począwszy od 
podanej wartości minimalnej, a kończąc na maksymalnej. 
Każde kolejne wywołanie powinno zwrócić undefined. (Uwaga! Rozwiązanie tego zadania nie może używać zmiennych globalnych!)*/

function getCounter(min,max){
    let i=min;
    return function b(){
        if (i<=max){
        console.log(i)
        i++
    }
        else console.log("huj")
    }
    
}
const count =((min,max) => {let  i=min; return () => i<=max ? (console.log(i), i++) : console.log("huj")})
const counter=(count(5,7))

counter()
counter()
counter()
counter()

/* Napisz samowywołującą się funkcję anonimową (IIFE), 
która przyjmuje jako parametr wartość string i zwraca najdłuższy wyraz. Spróbuj poszukać funkcji wbudowanych, 
które mogą Ci się przydać do rozwiązania tego zadania, aby rozwiązanie było jak najkrótsze. 
Czy jesteś w stanie napisać funkcję tak, aby składała się jedynie z return? */

const slowo = (str => str.split(' ').sort((a,b) => b.length - a.length)[0])('Ala ma kota')
console.log(slowo)
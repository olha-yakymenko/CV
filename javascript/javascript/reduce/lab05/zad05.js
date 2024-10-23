/* Mamy następującą listę zakupów:
Zamień tablicę obiektów w tablicę wartości (cen netto).
Stwórz listę zakupów w formie tablicy stringów, gdzie każdy element to:
'nazwa: cena netto'
Napisz funkcję, która przyjmuje w parametrach tablicę i funkcję, a następnie zwraca przetworzoną tablicę.
// Przykładowe działanie:
const newArray = func(wishlist, (x) => x.name + ": " + x.netto);
console.log(newArray); // wypisanie nowej tablicy
Uwaga: Pierwotna tablica nie zostaje modyfikowana.
Podobnie, jak w poprzednim zadaniu, stwórz funkcję przyjmującą w parametrach tablicę i funkcję. W zależności od przekazanej funkcje wyfiltruj odpowiednio obiekty (np. tańsze niż 500).
// Przykładowe działanie:
const newArray = func(wishlist, (x) => x.netto < 500)
console.log(newArray); // wypisanie tablicy obiektów */

const wishlist = [
    { name: 'Czajnik', netto: 100 },
    { name: 'Lodówka', netto: 2730 },
    { name: 'Mikrofalówka', netto: 940 },
    { name: 'Mikser', netto: 120 },
    { name: 'Piekarnik', netto: 3100 },
    { name: 'Zmywarka', netto: 2400 },
    { name: 'Toster', netto: 260 }
  ]

function ceny (lista){
    return lista.reduce((acc,elem) =>{
        acc.push(elem.netto)
        return acc
    }, [])
}
console.log(ceny(wishlist))

function func(lista, f) {
    return lista.reduce((acc,elem)=>{
        acc.push(f(elem))
        return acc
    },[])
}

function func2(lista, f){
    return lista.reduce((acc,elem)=>{
        if (f(elem)) acc.push(elem)
        return acc
    },[])
}
const newArray = func(wishlist, (x) => x.name + ": " + x.netto)
const newArray1 = func2(wishlist, (x) => x.netto < 500)
console.log(newArray1)
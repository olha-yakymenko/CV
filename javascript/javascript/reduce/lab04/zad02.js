/*Mamy tablicę obiektów:

używając funkcji wbudowanej map() stwórz nową tablicę obiektów o następujących kluczach:
label – imię i nazwisko (konkatenacja stringów)
value – cały obiekt*/
const persons = [
    { id: 1, firstName: 'Adam', lastName: 'Nowak' },
    { id: 2, firstName: 'Kamil', lastName: 'Kowalski' },
    { id: 3, firstName: 'Anna', lastName: 'Mazur' },
    { id: 4, firstName: 'Katarzyna', lastName: 'Maj' },
    { id: 5, firstName: 'Jakub', lastName: 'Adamski' }
  ]

const tabl = persons.map(person => ({label: `${person.firstName} ${person.lastName}`, value: person}))
console.log(tabl)
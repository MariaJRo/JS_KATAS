/*1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

1.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];*/

//1.5
const rickAndMortyCharacters = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
]
rickAndMortyCharacters.pop()
console.log(rickAndMortyCharacters)
console.log(rickAndMortyCharacters[0])
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1])

//1.6
rickAndMortyCharacters.splice(1, 1)
console.log(rickAndMortyCharacters)

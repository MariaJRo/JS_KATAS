/*Ejercicio 8

Buscar la palabra más larga Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

Puedes usar este array para probar tu función:*/

const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]

function findLongestWord(arrayOfWords) {
  let numberOfLettersInLargestWord = 0
  let largestWordPosition = 0

  for (let i = 0; i < arrayOfWords.length; i++) {
    const lengthOfCurrentWord = arrayOfWords[i].length

    if (lengthOfCurrentWord > numberOfLettersInLargestWord) {
      numberOfLettersInLargestWord = lengthOfCurrentWord
      largestWordPosition = i
    }
  }
  return arrayOfWords[largestWordPosition]
}
console.log(findLongestWord(avengers))

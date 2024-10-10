/*Ejercicio 14

Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. Puedes usar este array para probar tu función:*/

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]

function repeatCounter(param) {
  const result = {}

  for (let i = 0; i < param.length; i++) {
    const value = param[i]
    result[value] = (result[value] || 0) + 1
  }

  return result
}

const counts = repeatCounter(counterWords)
console.log(counts)

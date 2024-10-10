/*Ejercicio 10

Calcular un promedio (media) es una tarea extremadamente común. Puedes usar este array para probar tu función:*/

const numbers = [12, 21, 38, 5, 45, 37, 6]
function average(averageNumbers) {
  let suma = 0
  for (let i = 0; i < averageNumbers.length; i++) {
    suma += averageNumbers[i]
  }
  console.log(suma / averageNumbers.length)
}

average(numbers)

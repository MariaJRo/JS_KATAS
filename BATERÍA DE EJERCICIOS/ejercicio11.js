/*Ejercicio 11

Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

pista (typeof)*/

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']

function averageWord(averageWordSuma) {
  let suma = 0

  for (let i = 0; i < averageWordSuma.length; i++) {
    if (typeof averageWordSuma[i] === 'number') {
      suma += averageWordSuma[i]
    } else if (typeof averageWordSuma[i] === 'string') {
      suma += averageWordSuma[i].length
    }
  }
  console.log(suma)
}

averageWord(mixedElements)

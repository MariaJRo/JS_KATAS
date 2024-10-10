/*1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.

1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
cuando el resto del numero dividido entre 2 sea 0.

1.3 Crea un bucle para conseguir dormir contando ovejas. 
Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle 
y cambia el mensaje en la décima vuelta a 'Dormido!'.*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 1.1
for (let i = 0; i < numbers.length; i++) {
  let number = numbers[i]
  console.log(number)
}

//1.2
for (let i = 0; i < numbers.length; i++) {
  if (i % 2 === 0) {
    console.log(i)
  }
}

// 1.3
const ovejas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < ovejas.length; i++) {
  if (i < ovejas.length - 1) {
    console.log('Intentando dormir')
  }
  if (i > ovejas.length - 2) {
    console.log('Dormido!')
  }
}

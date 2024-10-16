/*Ejercicio 18

Probando For: Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. Imprime en un console log el array. Puedes usar este array:*/

const placesToTravel = [
  { id: 5, name: 'Japan' },
  { id: 11, name: 'Venecia' },
  { id: 23, name: 'Murcia' },
  { id: 40, name: 'Santander' },
  { id: 44, name: 'Filipinas' },
  { id: 59, name: 'Madagascar' }
]

const idsToRemove = [11, 40]

for (let i = 0; i < placesToTravel.length; i++) {
  if (idsToRemove.includes(placesToTravel[i].id)) {
    placesToTravel.splice(i, 1)
    i--
  }
}

console.log(placesToTravel)

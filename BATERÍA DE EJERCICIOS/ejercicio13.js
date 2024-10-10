const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]

function findName(param, name) {
  for (let i = 0; i < param.length; i++) {
    if (param[i] === name) {
      return { found: true, position: i }
    }
  }
  return { found: false }
}

console.log(findName(nameFinder, 'Tony'))

console.log(findName(nameFinder, 'Bernardo'))

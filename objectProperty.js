const students = [
    { id: 21, name: 'omar sunny' },
    { id: 31, name: 'Manna' },
    { id: 53, name: 'Mousumi' },
    { id: 41, name: 'DeepJol' }
]

const names = students.map(s => s.name);
console.log(names);
const bigger = students.filter(s => s.id > 32)
console.log(bigger)
const bigger1 = students.find( s => s.id >32)
console.log(bigger1)
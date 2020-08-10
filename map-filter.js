//24.5

const numbers = [10, 3, 7, 13, 6, 4, 2, 5]
// const output = [];

// for(let i=0; i<numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result)
// }
// console.log(output)

//MAP
numbers.map(function (element, index, array) {
    console.log(element, index, array) //By MAP We can see this 3 item!
})

//another system to make SQUARE!
const result = numbers.map(function (element) {
    return element * element;
})
console.log(result)

//easy and fancy 
const resultFancy = numbers.map(x => x * x)
console.log(resultFancy)

//filter
const bigger = numbers.filter(x => x < 5)
console.log(bigger)

//search google about FOR EACH and Radios

//find
const isThere = numbers.find(x => x > 5); //it will ans the 1st bigger number and it is the smart version of FILTER
console.log(isThere)
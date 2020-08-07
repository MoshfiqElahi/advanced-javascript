// 1st way to get undefined
let pakhi;
console.log(pakhi) 

// 2nd way to get undefined
function add (num1, num2){
    console.log(num1+num2)
    //it will say UNDEFINED. Because I didn't return anything here.
}
const result = add(13,82)
console.log(result); 

// 3rd way to get undefined
function add (num1, num2){ //if I say function add (num1, num2 == 10) then it will take 10 as a num2
    console.log(num2)
    
}
const result = add(13) //it will say UNDEFINED. Because I didn't give here VALUE for num2.
console.log(result); 

//4th way to get undefined
let fun = undefined;
console.log(fun)

//5th way to get undefined
const lover = {name: "smart boy", phone: 4666373}
console.log(lover.gf) //gf is undefined
//24.2

//falsy:
//0 
//""
//NaN
//undefined
// null
//false

//Truthy
// "0"
// " "
//{}
//[]
//"false" //if you write false in a quotation it will take it as a true


let name = NaN
console.log(name)
if (name) {  //if (name || name == 0) //write it if u want to get 0 as a true
    console.log("True");
}
else {
console.log("false")
}
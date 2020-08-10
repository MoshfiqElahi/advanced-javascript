//24.7
let bonus = 20; //its a global var. I can call it again and again from every place
function sum(first, second){
    let result = first + second + bonus;  //if I call result from the outside of {} I will get error!
    if(result > 9){
        let mood = "happy"
        mood = "fishy"
        mood = "funky"
        mood = "cranky"
        console.log(mood) //if I want to get result from the outside of {} scope, I have to write VAR in the place of let. But VAR must not use!
    }
    return result; 
}
const output = sum(3, 7);
console.log(output)
console.log(bonus)
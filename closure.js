//24.8

function stopWatch(){
    let count = 0;
    return function(){
        count++;
        return count
    }
}

const clock1 = stopWatch()
console.log(clock1())
console.log(clock1())
console.log(clock1())
console.log(clock1())
console.log(clock1())
console.log(clock1())

const clock2 = stopWatch()
console.log(clock2())
console.log(clock2())
console.log(clock1())  //I can call previous var again and again! But I cannot change function
console.log(clock2())
console.log(clock2())
console.log(clock1())

//I am calling here same function. But it works differently.I can make clock3/4/5/6
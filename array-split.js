//24.9
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9,]
console.log(nums)

//slice part
const part = nums.slice(2, 5)
console.log(part)

//splice part
const removed = nums.splice(2,3);
console.log(removed)

// splice item and inject item
const removed = nums.splice(2,3, 77, 88, 99);
console.log(removed)


// can join array element by join " "
const together = nums.join(" ") //I can use ", " on the place of " "
console.log(together)
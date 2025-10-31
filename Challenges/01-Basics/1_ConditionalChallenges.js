// 1st Challenge: Check greater number

let num1 = 10
let num2 = 20

if( num1 > num2 ) {
    console.log("Num1 is greater then Num2")
} else {
    console.log("Nope, number is not greater")
}


// 2nd Challenge: Check if a string us equal to another string
let username = "Arslan"
let anotherUserName = "Arslan"

if(username === anotherUserName) {
    console.log("Yes Both Strings are equal")
}

// 3rd Challenge: Checking if a variable is a number or not
let variable1 = "10"
if(typeof variable1 === "number") {
    console.log("variable1 is a Number")
} else {
    console.log(`Variable1 is a ${typeof(variable1)}`)
}

// 4Th Challenge: Checking a boolean value
let soupIsReady = false

if(soupIsReady) {
    console.log("Soup is Ready")
}else {
    console.log("Soup is Not Ready")
}

// 5Th Challenge: Check if an array is empty or not
let arr = []

if(arr.length > 0) {
    console.log("Arr is not empty")
}else {
    console.log("Arr is empty")
}
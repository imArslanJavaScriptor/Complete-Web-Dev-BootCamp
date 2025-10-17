// Numbers
let accBalance = 40000
let accTwoBalance = new Number(950000)

console.log(accBalance)
console.log(accTwoBalance)
console.log(accTwoBalance.valueOf())
console.log(typeof accBalance)
console.log(typeof accTwoBalance)

// Boolean
let isUserLoggedIn = true
let isUserActive = false


// Null & Undefined
let userName
let userLastName = undefined
console.log(userName)

let userAge = null
console.log(userAge)

// String
let user = "Sir Arslan"
let str1 = `Wecome Back ${user}`
let str2 = 'A Foolish Station Master'
let str3 = "Where there is a will there is a way"

// Symbol

let namedSymbol = Symbol('Arslan')
let uniqueSym1 = Symbol()
let uniqueSym2 = Symbol()
console.log(`Is uniqueSym1 & uniqueSym2 are equal:`, uniqueSym1 === uniqueSym2 ? "Yes" : "No")
// Main Purpose to Uniquely Identify For More Read MDN Docs 
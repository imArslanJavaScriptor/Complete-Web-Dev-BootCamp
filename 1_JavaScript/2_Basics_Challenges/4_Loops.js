// Task 1: Sum of First N Natural Numbers
// Write a function sumOfN(n) that returns the sum of the first n natural numbers
function sumOfN(n) {
    let sum = 0
    for(let i=0; i <= n; i++) {
        sum +=i
    }
    return sum
}

console.log(sumOfN(10))

// Task 2: Multiplication Table
// Write a function printMultiplicationTable(n) that returns the multiplication table for n. Values return in the array must be of the format 2 * 2 = 4
function printMultiplicationTable(n) {
    let table = []
    for(let i = 1; i <= 10; i++) {
        table.push(`${n} * ${i} = ${n * i} `)
    }
    return table
}

console.log(printMultiplicationTable(243))

// Task 3: Count Vowels in a String
// Write a function countVowels(str) that returns the number of vowels (in both lower & uppercase) in the given string str.

function countVowels(str) {
    let vowels = "aeiouAEIOU"
    let count = 0
    for(let char of str) {
        if(vowels.includes(char)) {
            count++
        }
    }
    return count
}

console.log(countVowels("A Quick Brown Fox Jump Over The Lazy Dog"))
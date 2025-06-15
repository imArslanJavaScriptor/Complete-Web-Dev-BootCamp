// Task 1: Array Filtering
// Write a function filterNumbers(arr) that returns only numbers from a mixed array
function filterNumbers(arr) {
    return arr.filter(item => typeof(item) === "number") 
}

let res1 = filterNumbers(["Arslan", 12, 23,21, "King"])
console.log(res1)


// Task 2: Array Reversal
// Write a function reverseArray(arr) that reverses the array

function reverseArray(arr) {
    return arr.slice().reverse()
}

let res2 = reverseArray([1,2,3,4,5,6,7,8,9])
console.log(res2)


// Task 3: Find Maximum in an Array
// Write a function findMax(arr) that returns the largest number in the array
function findMax(arr) {
    return Math.max(...arr)
}

let res3= findMax([1,2,3,4,5,6,7,1000])
console.log(res3)


// Task 4: Remove Duplicates from an Array
// Write a function removeDuplicates(arr) that returns a new array with all duplicates removed

function removeDuplicates(arr){
    return [...new Set(arr)]
}

let res4 = removeDuplicates([1,1,1,2,3,4,4,21,1,2,4,1,1,1,5,6])
console.log(res4)



// Task 5: Flatten a Nested Array
// Write a function flattenArray(arr) that takes a nested array and returns a single flattened array

function flattenArray(arr)  {
    return arr.flat(Infinity)
}

let res5 = flattenArray([1,2,3, [1,2,3, [1,2,3, [1,2,3, [1,2,3]]]]])
console.log(res5)
let gameName = "spiderman"
gameName = "batman" // This is ok we can change this
console.log(gameName) 

const domainName = "imArslan.com"
// domainName = domainName[0] === "I"
console.log("domainNAME After Change:", domainName[0])
// domainName = "Arslan.dev" // This will throw Error

console.log(domainName)
const listArr = ["Apple", "Mango", "Orange", "Banana"]
console.log("Before Push:", listArr)
listArr.push("Grapes")
console.log("After Push:", listArr)
listArr[0] = "apple"
console.log("After Change:", listArr)
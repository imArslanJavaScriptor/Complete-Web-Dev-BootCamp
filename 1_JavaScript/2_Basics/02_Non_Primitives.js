const userInfo = {
    userName: "Arslan",
    age: 20,
    job:"Software Developer",
    hobbies: ['Reading', 'GYM', 'Cycling', 'Coding'],
    "is working": true
}
console.log("Obj Before Modify", userInfo)

userInfo.userName = "HM-Arslan"
console.log(userInfo["is working"])

console.log("Obj After Modify", userInfo)
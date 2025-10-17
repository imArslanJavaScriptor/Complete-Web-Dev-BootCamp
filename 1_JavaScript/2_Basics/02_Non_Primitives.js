const userInfo = {
  userName: "Arslan",
  age: 20,
  job: "Software Developer",
  hobbies: ["Reading", "GYM", "Cycling", "Coding"],
  "is working": true,
};
console.log("Obj Before Modify", userInfo);

userInfo.userName = "HM-Arslan";
console.log(userInfo["is working"]);

console.log("Obj After Modify", userInfo);

let fruits = ["Apple", "Banana", "Mango"];
let isValue = "10abc";
console.log(Number(isValue));
console.log(Number(undefined));
console.log(typeof NaN);

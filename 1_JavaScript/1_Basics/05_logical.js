// && -> and
// || -> or
// !  -> reverse

let isLoggedIn = true;
let isPaid = false;

console.log(isLoggedIn && isPaid);

const isGoogleUser = true;
const isAppleUser = false;

console.log(isGoogleUser || isAppleUser);

const isStudent = true;
const isEarning = true;
const haveGoodAttitude = true;
const behaviourWithTeachers = "Good";

if (
  isStudent &&
  isEarning &&
  haveGoodAttitude &&
  behaviourWithTeachers === "Good"
) {
  console.log("He is a Good Student");
} else {
  console.log("He is not a Good Student");
}

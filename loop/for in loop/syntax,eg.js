//The for...in loop in JavaScript is used to iterate over the properties of an object. It's different from a for loop or forEach loop, which are typically used to loop through arrays., for...in Loop Syntax:

for (variable in object) {
  // code to run for each property
}

//variable: A variable that will hold the name of each property, or key, in the object during each loop iteration., object: The object whose properties you want to loop through., Example 1: Loop through an Object's Properties, Let’s say you have an object with information about a student, and you want to print out each property and its value.

//eg1:
let student = {
  name: "John",
  age: 12,
  grade: 7
};

for (let key in student) {
  console.log(key + ": " + student[key]);
}

//eg2:
//Though for...in is usually for objects, it can be used to loop over indices (positions) of an array. However, using forEach or for is usually better for arrays.

let colors = ["red", "blue", "green"];

for (let index in colors) {
  console.log("Color at index " + index + ": " + colors[index]);
}
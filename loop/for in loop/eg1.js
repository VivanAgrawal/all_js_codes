const person = {fname:"John", lname:"Doe", age:25}; 

let txt = "";
for (let x in person) {
  txt += person[x] + " ";
}

document.getElementById("demo").innerHTML = txt;//to make this statement work type the same code in html and in the body write the code:<div id="demo"></div>
console.log(txt)
/*
The for in loop iterates over a person object
Each iteration returns a key (x)
The key is used to access the value of the key
The value of the key is person[x]
*/
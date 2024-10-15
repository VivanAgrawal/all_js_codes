let firstName = prompt("What is your first name?");
let lastName = prompt("What is your last name?");
let age = parseInt(prompt("What is your age?"));
let height = parseInt(prompt("What is your height in centimeters?"));
let petName = prompt("What is your pet's name?");

let firstName1=firstName.charAt(0)==lastName.charAt(0);

let age1=age>20 & age<30;

let height1=height>170;

let petName1= petName.charAt(petName.length-1)=="y";

if (firstName1 & age1 & height1 & petName1==true){
    console.log("you are the spy! secrect message :you passed the test ,congratulations!!!")
}

else{
    console.log("sorry,you failed")
}


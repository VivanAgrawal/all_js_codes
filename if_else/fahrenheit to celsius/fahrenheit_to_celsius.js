
let choice=parseInt(prompt("enter 1 for converting celsius to fahrenheit \n  2 for conterting fahrenheit to celsius :"))

if (choice==1){
    let a=parseInt(prompt("Enter the temperature in celcius:"))

    let b=(a * 9/5) + 32 
    alert("The temperature in fahrenheit is:"+b)
}
if (choice==2){
    let c=parseInt(prompt("Enter the temperature in fahrenheit:"))

    let d=5/9*(c - 32) 
    alert("The temperature in celsius is:"+d)
}

function ab(){

let choice=parseInt(prompt("enter 1 for converting celsius to fahrenheit \n  2 for conterting fahrenheit to celsius :"))

if (choice==1){
    let a=parseInt(prompt("Enter the temperature in celcius:"))

    let b=(a * 9/5) + 32 
    alert("The temperature in fahrenheit is:"+b)
}
if (choice==2){
    let c=parseInt(prompt("Enter the temperature in fahrenheit:"))

    let d=5/9*(c - 32)

    alert("The temperature in celsius is:"+d)
}

}

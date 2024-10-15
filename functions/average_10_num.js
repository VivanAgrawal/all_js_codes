//1st code with input 
function average_num(num1,num2,num3,num4,num5,num6,num7,num8,num9,num10){
    a=(num1+num2+num3+num4+num5+num6+num7+num8+num9+num10)/10
    alert("the average of these numbers is:"+a)
}

b=parseInt(prompt("Enter 1st number:"))
c=parseInt(prompt("Enter 2nd number:"))
d=parseInt(prompt("Enter 3rd number:"))
e=parseInt(prompt("Enter 4th number:"))
f=parseInt(prompt("Enter 5th number:"))
g=parseInt(prompt("Enter 6th number:"))
h=parseInt(prompt("Enter 7th number:"))
i=parseInt(prompt("Enter 8th number:"))
j=parseInt(prompt("Enter 9th number:"))
k=parseInt(prompt("Enter 10th number:"))
average_num(b,c,d,e,f,g,h,i,j,k)




//2nd code without input
function findAverage(numbers) {
    let sum = 0;

    // Loop through the array and calculate the sum
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    // Calculate the average by dividing the sum by the length of the array
    let average = sum / numbers.length;

    return average;
}

// Example usage:
let numbersArray = [10, 20, 30, 40, 50];
let average = findAverage(numbersArray);
alert("The average is: " + average);


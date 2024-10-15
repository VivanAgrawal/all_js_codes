//let numbers = [3, 7, 2, 9, 4];
let numbers = prompt("Enter a list of numbers separated by commas:").split(',')
let largest = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
alert("Largest number:"+ largest);

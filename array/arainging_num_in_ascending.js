
let input = prompt("Enter numbers separated by commas:");
let numbers = input.split(',').map(Number);

let sorted = false;
for (let i = 0; i < numbers.length - 1; i++) {

    if (numbers[i] > numbers[i + 1]) {
        let temp = numbers[i];
        numbers[i] = numbers[i + 1];
        numbers[i + 1] = temp;
        sorted = true;
    }
        
    if (i == numbers.length - 2 && sorted) {
        i = -1; 
        sorted = false; 
    }
}


alert("Ascending order:"+ numbers);

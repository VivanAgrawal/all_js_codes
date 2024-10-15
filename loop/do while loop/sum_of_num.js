//Sum of Numbers Until Zero is Entered  :-
let sum = 0;
let number;
do {
    number = parseInt(prompt("Enter a number (0 to stop):"));
    sum += number;
} while (number !== 0);

alert("The sum of the numbers is: " + sum);
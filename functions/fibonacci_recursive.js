//to run connect this page to ab.html file

function fibonacciRecursive(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

input=parseInt(prompt("Enter a number:"))
// Example: Getting the first 10 Fibonacci numbers
for (let i = input; i < input+10; i++) {
    console.log(fibonacciRecursive(i));
}
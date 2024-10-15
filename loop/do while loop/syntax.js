//The do...while loop is similar to the while loop, but it guarantees that the code block is executed at least once, even if the condition is false on the first check.
//Syntax: 
do {
    //Code to be executed
} while (condition);

//e.g. 
let i = 0;
do {
    alert("Iteration number " + i);
    i++;
} while (i <= 5);
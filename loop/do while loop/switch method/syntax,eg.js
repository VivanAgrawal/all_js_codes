//The switch statement in JavaScript is a control flow statement that allows you to compare the value of a variable or expression against multiple 
//possible cases, executing different code depending on which case matches. It's an alternative to using multiple if...else if statements.  
switch (expression) {
    case value1:
        // Code to execute if expression === value1
        break;
    case value2:
        // Code to execute if expression === value2
        break;
    // Add more cases as needed
    default:
        // Code to execute if no cases match
}

//expression: This is the value or expression that you want to evaluate.
//case valueX: Each case represents a possible match with the expression. If a match is found, the corresponding block of code is executed.
//break: This keyword is used to exit the switch block once a matching case has been executed. If omitted, the code will continue to execute the 
//next case statements (a behavior known as "fall-through").
//default: This block is optional and is executed if none of the case values match the expression.

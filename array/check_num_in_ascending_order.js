//without input

let numbers = [1, 2, 3, 4, 5];
let isSorted = true;

for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] > numbers[i + 1]) {
        isSorted = false;
        break;
    }
}

if (isSorted) {
    alert("The array is sorted in ascending order.");
} else {
    alert("The array is not sorted in ascending order.");
}

//with input
let numbers1=prompt("enter numbers comma seperated:").split(',').map(Number)
let isSorted1 = true;

for (let i = 0; i < numbers1.length -1; i++) {
    if (numbers1[i] > numbers1[i + 1]) {
        isSorted1 = false;
        break;
    }
}

if (isSorted1) {
    alert("The array is sorted in ascending order.");
} else {
    alert("The array is not sorted in ascending order.");
}
//with input and function
function abcd(){
    let numbers1=prompt("enter numbers comma seperated:").split(',').map(Number)
    let isSorted1 = true;

    for (let i = 0; i < numbers1.length -1; i++) {
        if (numbers1[i] > numbers1[i + 1]) {
            isSorted1 = false;
            break;
        }
    }

    if (isSorted1) {
        alert("The array is sorted in ascending order.");
    } else {
        alert("The array is not sorted in ascending order.");
    }
}


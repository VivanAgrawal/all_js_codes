let choice;
do {
    console.log("Menu:");
    console.log("1. Option 1");
    console.log("2. Option 2");
    console.log("3. Exit");

    choice = prompt("Enter your choice (1-3):");

    switch(choice) {
        case '1':
            console.log("You selected Option 1");
            break;
        case '2':
            console.log("You selected Option 2");
            break;
        case '3':
            console.log("Exiting...");
            break;
        default:
            console.log("Invalid choice, please try again.");
    }
} while (choice !== '3');
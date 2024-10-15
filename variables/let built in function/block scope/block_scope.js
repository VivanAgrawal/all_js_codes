let y = 10;
if (true) {
    let y = 20; // This y is different from the one outside the block
    console.log(y); // Output: 20
}
console.log(y); // Output: 10

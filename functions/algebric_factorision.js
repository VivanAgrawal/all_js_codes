function findRoots(a, b, c) {
    // Calculate the discriminant (b^2 - 4ac)
    let discriminant = b * b - 4 * a * c;
    let root1, root2;

    // Check if discriminant is positive, zero or negative
    if (discriminant > 0) {
        // Two real and distinct roots
        root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        console.log(`The roots are real and distinct: ${root1} and ${root2}`);
    } else if (discriminant === 0) {
        // One real root (repeated)
        root1 = -b / (2 * a);
        console.log(`The root is real and repeated: ${root1}`);
    } else {
        // Complex roots
        let realPart = -b / (2 * a);
        let imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
        console.log(`The roots are complex: ${realPart} + ${imaginaryPart}i and ${realPart} - ${imaginaryPart}i`);
    }
}

// Example usage:
// For equation  x*x + 2x + 1 (a = 1, b = 2, c = 1)
findRoots(1, 2, 1);





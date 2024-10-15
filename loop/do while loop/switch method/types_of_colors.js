let color = prompt("enter a color:").toLowerCase();



switch (color) {
    case "red":
    case "green":
    case "blue":
        alert(color + " is a primary color.");
        break;
    case "yellow":
    case "purple":
    case "cyan":
        alert(color + " is a secondary color.");
        break;
    default:
        alert("Unknown color.");
}
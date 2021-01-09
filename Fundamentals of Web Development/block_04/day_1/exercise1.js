let a = 8;
let b = 2;

let operation = "Mod";

switch (operation) {
    case "Sum":
        console.log(a + b);
        break;
    case "Sub":
        console.log(a - b);
        break;
    case "Mult":
        console.log(a * b);
        break;
    case "Div":
        console.log(a / b);
        break;
    case "Mod":
        console.log( a % b);
        break;
    default:
        console.log('error 404!');
        break;

}
